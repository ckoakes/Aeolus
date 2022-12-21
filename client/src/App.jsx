import './App.css';
// import { useEffect, useState } from 'react';
import readTodosRequest from './api/readTodosRequest';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import { TodoItem } from './components/TodoItem';
import { CreateTodoForm } from './components/CreateTodoForm';

function App() {
  const { isLoading, data: todos } = useQuery('todos', readTodosRequest);
  // [state var from backend, setter func to update state]
  // const [todos, setTodos] = useState([]);

  // invoked (2x) when component mounts (strict mode)
  // useEffect(() => {
  //   readTodosRequest().then(setTodos);
  // }, []);

  return (
    <div className='App'>
      <h1>This is list.</h1>
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => <TodoItem todo={todo} key={todo._id} />)
      )}
      <CreateTodoForm />
    </div>
  );
}

export default App;
