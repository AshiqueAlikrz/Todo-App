import { useState } from "react";
import "./App.css";
import { Container,Button , Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
     <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">AddList</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <input
        type="text"
        className="form-row w-50 p-3"
        value={newdata}
        onChange={(e) => {
          setNewdata(e.target.value);
        }}
        placeholder="Write Something"
      ></input>
      <Button variant="warning p-3 m-3" onClick={change}>
        Add
      </Button>{" "}
      <div>
        <ul>
          {data.map((value, index) => (
            <li key={index}>
              {value}
              <Button variant="danger m-2" onClick={() => deleteArr(index)}>
                {" "}
                &nbsp;delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
