import classes from './Card.module.css';

type CardPropdsType = {
  className: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: CardPropdsType) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
