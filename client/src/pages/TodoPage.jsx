//3rd Party Dependencies
import React from 'react';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

import readTodosRequest from '../api/readTodosRequest';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoForm } from '../components/CreateTodoForm';

export const TodoPage = () => {
  const { isLoading, data: todos } = useQuery('todos', readTodosRequest);

  return (
    <div>
      <h1>iList</h1>
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo._id} />)
      )}
      <CreateTodoForm />
    </div>
  );
};

// OG version withouth
// [state var from backend, setter func to update state]
// const [todos, setTodos] = useState([]);

// invoked (2x) when component mounts (strict mode)
// useEffect(() => {
//   readTodosRequest()..then(setTodos);
// }, []);
