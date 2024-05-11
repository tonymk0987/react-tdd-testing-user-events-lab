import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interests: {
      interest1: false,
      interest2: false,
      interest3: false
    }
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        interests: {
          ...formData.interests,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Signup Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} />

        <div>
          <label htmlFor="interest1">Interest 1</label>
          <input type="checkbox" id="interest1" name="interest1" onChange={handleChange} checked={formData.interests.interest1} />

          <label htmlFor="interest2">Interest 2</label>
          <input type="checkbox" id="interest2" name="interest2" onChange={handleChange} checked={formData.interests.interest2} />

          <label htmlFor="interest3">Interest 3</label>
          <input type="checkbox" id="interest3" name="interest3" onChange={handleChange} checked={formData.interests.interest3} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
