import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import ReactDoM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDoM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDoM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
