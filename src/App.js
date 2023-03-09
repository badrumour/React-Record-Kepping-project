import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function addData() {
    setData([
      ...data,
      {
        name: name,
        email: email,
      },
    ]);
    setName("");
    setEmail("");
  }

  function removeItem(index) {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      {/*form*/}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/*data*/}

      <div className="data">
        <div className="data_val">
          <h4>name</h4>
          <h4>email</h4>
          <h4>remove</h4>
        </div>

        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Button
                onClick={() => removeItem(index)}
                variant="contained"
                color="error"
              >
                <AutoDeleteIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
