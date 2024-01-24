import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import './page.css';
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Charge your laptop', completed: false },
    { id: 2, title: 'Buy apples', completed: false },
  ]);
  const [newTask, setNewTask] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number>(-1);

  const addTask = () => {
    const newTaskObject: Task = { id: tasks.length + 1, title: newTask, completed: false };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  };

  const removeTask = (index: number) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setNewTask(tasks[index].title);
  };

  const saveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex].title = newTask;
    setTasks(updatedTasks);
    setEditingIndex(-1);
    setNewTask('');
  };

  const cancelEdit = () => {
    setEditingIndex(-1);
    setNewTask('');
  };

  const toggleCompleted = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className='todo-container'>
        <h1 className="heading">Todo List</h1>
        <div className="custom-input-container">
          <input
            type="text"
            className="custom-input"
            placeholder="Add a new task"
            value={newTask}
            onChange={handleInputChange}
          />
          {editingIndex === -1 ? (
            <button className="add-button" onClick={addTask}>
              Add
            </button>
          ) : (
            <>
              <button className="add-button" onClick={saveEdit}>
                Save
              </button>
              <button className="remove-button" onClick={cancelEdit}>
                Cancel
              </button>
            </>
          )}
        </div>
        <ul id="tasklist" className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-content">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(index)}
                />
                {editingIndex === index ? (
                  <input type="text" value={newTask} onChange={handleInputChange} />
                ) : (
                  <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                    {task.title}
                  </span>
                )}
              </div>
            <div className='action-btns-container'>
              <button className="remove-button" onClick={() => removeTask(index)}>
                Remove
              </button>

              <button className="edit-button" onClick={() => startEditing(index)}>
                Edit
              </button>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  );
};
