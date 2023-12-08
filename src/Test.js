import React from "react";
import { Button } from "@mui/material";

const Test = () => {
  return (
    <div>
      <Button
        onClick={()=> alert("Button clicked")}
        
        color="success"
        sx={{ margin: "3px" }}
        size="large"
        variant="contained"
      >
        First
      </Button>
      <Button
      onClick={()=> alert("Button clicked")}
        color="error"
        sx={{ margin: "3px" }}
        size="medium"
        variant="outlined"
      >
        Second
      </Button>
      <Button
      onClick={()=> alert("Button clicked")}
      
      color="info" sx={{ margin: "3px" }} size="Small" variant="" Text>
        Third
      </Button>
    </div>
  );
};

export default Test;
