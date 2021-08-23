import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      // setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(res.data);
      // setLoading(false);
    }
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <div>HI</div>
  );
};

export default App;