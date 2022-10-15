import { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  //const name = "Test";
  //const res = [...new Set(name.split(""))];
  //console.log(res);

  const handleClick = () => {
    // 👇️ toggle
    setIsLoading(true);
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);

    //console.log("value is:", event.target.value);
  };

  //Axios to get API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data)) //we got a response
      .catch((err) => console.log(err)); //catch the error in console log
  }, []); //render once

  return (
    <div>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
      />

      <h2>Message: {message}</h2>

      <button
        style={{
          backgroundColor: isActive ? "black" : "",
          color: isActive ? "white" : ""
        }}
        onClick={handleClick}
      >
        Fetch Data
      </button>

      {isLoading &&
        users &&
        users.map((user) => (
          <li key={user.id}>
            {user.company.name} <br />
          </li>
        ))}
    </div>
  );
}; //end function

export default App;
