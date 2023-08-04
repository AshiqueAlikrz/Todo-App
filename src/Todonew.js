import { useState } from "react";
import "./App.css";

function Todo() {
  const [data, setData] = useState([]);
  const [newdata, setNewdata] = useState("");
  const change = () => {
    if (newdata.length === 0) {
      alert("Pleasae enter something");
    } else {
      setData([...data, newdata]);
      setNewdata("");
    }
  };

  function deleteArr(index) {
    const newtask = [...data];
    newtask.splice(index, 1);
    setData(newtask);
  }

  return (
    <>
      <h1>Add List</h1>
      <input
        type="text"
        value={newdata}
        onChange={(e) => {
          setNewdata(e.target.value);
        }}
        placeholder="Write Something"
      ></input>
      <button onClick={change}>add</button>
      <div>
        <ul>
          {data.map((value, index) => (
            <li key={index}>
              {value}
              <button onClick={() => deleteArr(index)}> &nbsp;delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
