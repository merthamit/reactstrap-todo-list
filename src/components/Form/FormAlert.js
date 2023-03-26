import React from "react";
import { Alert } from "reactstrap";

const FormAlert = ({ isValid }) => {
  return (
    <Alert
      style={{ zIndex: 9999, bottom: 0, right: 0, margin: "12px" }}
      className="position-absolute"
      isOpen={isValid}
      color="success"
    >
      Todo added.
    </Alert>
  );
};

export default FormAlert;
