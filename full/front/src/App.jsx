
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
 // ✅ axios import karo

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/test") 
      .then((response) => {
        setUsers(response.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="box">
      <h1>Users List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="box1">
          {users.map((user) => (
            <li key={user.id}>
              <h3>{user.userId}</h3>
                <h3>{user.id}</h3>
              <h3>{user.title}</h3>
              <p>{user.body}</p>
            
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
