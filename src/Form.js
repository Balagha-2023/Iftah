import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
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
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      > 
      {/* Text Input -------------------------------------- */}

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

          {/* CheckBox Input -------------------------------------- */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() =>
                  setInputs((...prev) => ({
                    ...prev,
                    subscribe: !inputs.subscribe,
                  }))
                }
              />
            }
            label="Subscribes To Newsletter"
          />
        </FormGroup>

      {/* DropDown Input -------------------------------------- */}

        <FormControl fullWidth>
          <InputLabel >Age</InputLabel>
          <Select name="age" value={inputs.age} label="Age" onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        
        <Button type="submit"> Submit </Button>

      </form>
    </div>
  );
};

export default Form;
