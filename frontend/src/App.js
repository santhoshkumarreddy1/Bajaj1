import React, { useState } from 'react';

function DataSender() {
  const [jsonData, setJsonData] = useState('[]');  // State to hold the input JSON data
  const [response, setResponse] = useState(null);  // State to hold the response data

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:3000/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: JSON.parse(jsonData) }),  // Send the JSON data
      });

      const data = await res.json();  // Parse the JSON response
      setResponse(data);  // Update state with the response
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <textarea
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        placeholder='Enter JSON data'
        rows={5}
        cols={40}
      />
      <button onClick={handleSubmit}>Submit</button>

      {response && (
        <div>
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>  {/* Display the response */}
        </div>
      )}
    </div>
  );
}

export default DataSender;
