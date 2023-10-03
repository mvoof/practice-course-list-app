import { useState } from 'react';
import classes from './AddUser.module.css';
import Button from './Button';
import Card from './Card';
import ErrorModal from './ErrorModal';

type AddUserTypeProps = {
  onAddUser: (enteredUsername: string, enteredAge: string) => void;
};

type ErrorType = {
  title: string;
  message: string;
} | null;

const AddUser = ({ onAddUser }: AddUserTypeProps) => {
  const [enteredUsername, setEnteredUsername] = useState<string>('');
  const [enteredAge, setEnteredAge] = useState<string>('');

  const [error, setError] = useState<ErrorType>(null);

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });

      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0). Use only numbers',
      });

      return;
    }

    if (!Number.isInteger(+enteredAge)) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age. Use only numbers',
      });

      return;
    }

    onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e: React.ChangeEvent) => {
    setEnteredUsername((e.target as HTMLInputElement).value);
  };

  const ageChangeHandler = (e: React.ChangeEvent) => {
    setEnteredAge((e.target as HTMLInputElement).value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={enteredAge}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
