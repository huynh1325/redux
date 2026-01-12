import logo from './logo.svg';
import './App.css';
import { Counter } from './redux/slices/Counter';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, [])
  
  const fetchAllUsers = async () => {
    let res = await axios.get("http://localhost:8080/users/all");
    setListUsers(res.data ? res.data : []);
    console.log(res.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React!</h1>
        {/* <Counter /> */}
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {listUsers && listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
