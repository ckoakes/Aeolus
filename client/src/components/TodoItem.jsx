import React, { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import deleteTodoRequest from '../api/deleteTodoRequest';
import updateTodoRequest from '../api/updateTodoRequest';

export const TodoItem = ({ todo }) => {
  const [text, setText] = useState(todo.text);
  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  );

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
        value={todo.text}
        onChange={(e) =>
          updateTodo({
            ...todo,
            text: e.target.value,
          })
        }
      />

      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
};

{
  /* {todo.text}
      {`${todo.completed}`} */
}
