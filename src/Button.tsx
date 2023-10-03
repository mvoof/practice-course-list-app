import classes from './Button.module.css';

type ButtonPropsType = {
  type?: 'submit';
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ type, children, onClick }: ButtonPropsType) => {
  return (
    <button className={classes.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
