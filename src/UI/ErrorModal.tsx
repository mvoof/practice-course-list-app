import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

type ErrorModalPropsType = {
  title: string;
  message: string;
  onConfirm: () => void;
};
const ErrorModal = ({ title, message, onConfirm }: ErrorModalPropsType) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirm} />

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
    </div>
  );
};

export default ErrorModal;
