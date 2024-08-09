import React, { useContext, useState, useCallback, useMemo } from 'react';
import { TaskContext } from './TaskContext';
import TaskItem from './TaskItem';

const Todotask = () => {
  const [todo, setTodo] = useState('');
  const { tasks, addTask, deleteTask, toggleStatus } = useContext(TaskContext);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = useCallback((event) => {
    event.preventDefault();
    if (todo.trim() !== '') {
      const newTask = { name: todo, status: 'Not Completed' };
      addTask(newTask);
      setTodo('');
    }
  }, [todo, addTask]);

  const handleDeleteTodo = useCallback((index) => {
    deleteTask(index);
  }, [deleteTask]);

  const handleStatus = useCallback((index) => {
    toggleStatus(index);
  }, [toggleStatus]);

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <>
      <div>
        <div className="mb-3 w-50 my-3" style={{ margin: 'auto' }}>
          <label htmlFor="exampleFormControlInput1" className="form-label">Enter Task Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            value={todo}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="btn btn-success" onClick={handleAddTodo}>Add Task</button>
      </div>

      <div className="row">
        {memoizedTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            onDelete={handleDeleteTodo}
            onToggleStatus={handleStatus}
          />
        ))}
      </div>
    </>
  );
};

export default Todotask;
