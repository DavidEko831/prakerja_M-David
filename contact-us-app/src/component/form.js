import React, { useState, useEffect } from 'react';

function Form() {
  const [fahrenheit, setFahrenheit] = useState('');
  const [result, setResult] = useState('');
  const [bgColor, setBgColor] = useState('green');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    alert('Selamat Datang');
    return () => {
      alert('Sampai Jumpa');
    };
  }, []);

  const handleChange = (e) => {
    setFahrenheit(e.target.value);
  };

  const handleClick = () => {
    if (isNaN(fahrenheit) || fahrenheit === '') {
      setResult('Please enter a valid number');
      return;
    }
    const celsius = (fahrenheit - 32) * 5 / 9;
    setResult(`${fahrenheit} Fahrenheit = ${celsius.toFixed(2)} Celsius`);
  };

  const toggleBgColor = () => {
    setBgColor((prevColor) => (prevColor === 'green' ? 'blue' : 'green'));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setCompletedTasks(completedTasks + 1);
  };

  return (
    <div>
      <h3>Pengubah suhu</h3>
      <label htmlFor="fahrenheit">Fahrenheit:</label>
      <input type="number" id="fahrenheit" name="fahrenheit" value={fahrenheit} onChange={handleChange} /><br />
      <button onClick={handleClick}>Uji</button>
      <p id="hasil">{result}</p>
      <p id="warna" style={{ backgroundColor: bgColor }} onClick={toggleBgColor}>ubah warna</p>

      <h3>To-Do List</h3>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onRemoveTask={removeTask} />
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed/Removed Tasks: {completedTasks}</p>
    </div>
  );
}

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} placeholder="Add a new task" />
      <button type="submit">Add Task</button>
    </form>
  );
}

function TaskList({ tasks, onRemoveTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => onRemoveTask(index)}>Complete</button>
        </li>
      ))}
    </ul>
  );
}

export default Form;
