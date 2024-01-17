import React, { useState } from 'react';

function App() {
  const [taskInputs, setTaskInputs] = useState([]);

  const addTaskInput = () => {
    setTaskInputs([...taskInputs, { id: taskInputs.length + 1, value: '' }]);
  };

  const handleInputChange = (id, value) => {
    const updatedInputs = taskInputs.map((input) =>
      input.id === id ? { ...input, value } : input
    );
    setTaskInputs(updatedInputs);
  };

  const handleSubmit = (id, e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    const input = taskInputs.find((input) => input.id === id);
    if (input && input.value.trim() !== '') {
      // Handle the submitted text (e.g., save it to a database, perform an action, etc.)
      console.log(`Submitted: ${input.value}`);
    }
  };

  return (
    <div>
      <div className='add-container'>
        <p className='btn-title'>Add a task</p>
        <button onClick={addTaskInput} className="btn-plus">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="200" fill="white">
              +
            </text>
          </svg>
        </button>
      </div>
      {taskInputs.map((input) => (
        <div key={input.id}>
          <form className='btn-input' onSubmit={(e) => handleSubmit(input.id, e)}>
            <input
              className=''
              type="text"
              placeholder='Add more task'
              value={input.value}
              onChange={(e) => handleInputChange(input.id, e.target.value)}
            />
            <button type="submit">
              Add
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default App;
