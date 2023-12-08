import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value }));
  }


  
  return (
    <div>
      <form>
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

        <Button type="submit"> Submit </Button>
      </form>
    </div>
  );
};

export default Form;
