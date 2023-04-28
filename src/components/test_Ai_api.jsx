import React, { useState } from 'react';
import axios from 'axios';

export default function Test_Ai_api() {
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://127.0.0.1:8000/predict', { weight });
    setResult(response.data.result);
  };

  return (
    <div>
      <h2>Weight Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Weight :
          <input type="number" value={weight} onChange={(event) => setWeight(event.target.value)} />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
};

