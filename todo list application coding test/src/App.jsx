import { useState } from 'react';

/**
 * TodoApp Component
 * A simple Todo List application built with React.
 */
const TodoApp = () => {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);
  // State to store the current input value
  const [input, setInput] = useState('');

  /**
   * handleAddTodo
   * Adds a new todo to the list.
   */
  const handleAddTodo = () => {
    if (input.trim() === '') return; // Do not add empty todos
    setTodos([...todos, { text: input, completed: false }]);
    setInput(''); // Clear the input field
  };

  /**
   * handleCompleteTodo
   * Marks a todo as completed.
   * @param {number} index - The index of the todo to be marked as completed.
   */
  const handleCompleteTodo = (index) => {
    const newTodos = todos?.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  /**
   * handleRemoveTodo
   * Removes a todo from the list.
   * @param {number} index - The index of the todo to be removed.
   */
  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span>{index + 1}. </span>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTodo(index)}
            />
            {todo.text}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
