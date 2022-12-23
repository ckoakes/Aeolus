import React, { useState, useCallback, useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import deleteTodoRequest from '../api/deleteTodoRequest.js';
import updateTodoRequest from '../api/updateTodoRequest';
import { debounce } from 'lodash';

export const TodoItem = ({ todo }) => {
  // when component mounts, uses initial todo.text -> displays in input box (setText), when user types into input box, it will update state isntead of making backend requests
  const [text, setText] = useState(todo.text);

  const queryClient = useQueryClient();

  // mutations
  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );
  // debouncing text w. lodash
  const debouncedUpdateTodo = useCallback(debounce(updateTodo, 600), [
    updateTodo,
  ]);

  // useEffects
  useEffect(() => {
    if (text !== todo.text) {
      debouncedUpdateTodo({
        ...todo,
        text,
      });
    }
  }, [text]);

  const { mutate: deleteTodo } = useMutation(
    (updatedTodo) => deleteTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

  return (
    <div>
      <input
        checked={todo.completed}
        type='checkbox'
        onChange={() =>
          updateTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
};

{
  /* {todo.text}
      {`${todo.completed}`} */
}
