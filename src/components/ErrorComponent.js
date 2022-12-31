import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ msg }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      marginLeft={"40"}
      w={"container.lg"}
    >
      <AlertIcon />
      {msg}
    </Alert>
  );
};

export default ErrorComponent;