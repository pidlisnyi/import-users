import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const inputFileRef = useRef(undefined);

  const getUsersFromCsv = (result) => {
    // do something to get users from string
    return [
      {
        id: 1,
        name: "Andrii",
      },
    ]; // [{ id: 1, name: "Greg"}];
  };

  const handleChange = () => {
    const reader = new FileReader();

    reader.onload = function () {
      const users = getUsersFromCsv(reader.result); // ""
      setUsers(users);
    };

    console.log(inputFileRef.current.files[0])
    reader.readAsText(inputFileRef.current.files[0]);
  };

  return (
    <div className="App">
      <input
        ref={inputFileRef}
        style={{ display: "none" }}
        type="file"
        accept=".csv"
        onChange={handleChange}
      />

      <button onClick={() => {
        inputFileRef.current.click()
      }}>Import users</button>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
