import React from "react";
import "./Container_bootstrap.css";
import { Container } from "react-bootstrap";
const Container_bootstrap = (props) => {
  return (
    <Container  className="main__container">
      {props.children}
    </Container>
  );
};

export default Container_bootstrap;
