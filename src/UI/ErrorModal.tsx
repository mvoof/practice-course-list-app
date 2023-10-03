import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import { createPortal } from 'react-dom';

type ErrorModalPropsType = {
  title: string;
  message: string;
  onConfirm: () => void;
};

const Backdrop = ({ onConfirm }: Pick<ErrorModalPropsType, 'onConfirm'>) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }: ErrorModalPropsType) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>

      <div className={classes.content}>
        <p>{message}</p>
      </div>

      <footer className={classes.actions}>
        <Button onClick={onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onConfirm }: ErrorModalPropsType) => {
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root') as HTMLElement
      )}

      {createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById('overlay-root') as HTMLElement
      )}
    </>
  );
};

export default ErrorModal;
