import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          sx={{ margin: "3px" }}
        />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          sx={{ margin: "3px" }}
        />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          sx={{ margin: "3px" }}
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox onChange={() => setInputs((...prev)=> ({...prev, subscribe: !inputs.subscribe}) )}
                
              />
            }
            label="Subscribes To Newsletter"
          />
        </FormGroup>

        <Button type="submit"> Submit </Button>
      </form>
    </div>
  );
};

export default Form;
