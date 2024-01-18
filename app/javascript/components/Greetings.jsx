// app/javascript/packs/Greeting.jsx
import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/random_greeting')
      .then(response => response.json())
      .then(data => setGreeting(data.greeting));
  }, []);

  return (
    <div>
      <h2>Random Greeting:</h2>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
