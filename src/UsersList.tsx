import { UsersListType } from './App';
import Card from './Card';
import classes from './UsersList.module.css';

type UsersListTypeProps = {
  usersList: UsersListType;
};

const UsersList = ({ usersList }: UsersListTypeProps) => {
  return (
    <Card className={classes.users}>
      <ul>
        {usersList.map(({ username, age }) => {
          return (
            <li
              key={`${username}, ${Math.random()}`}
            >{`${username}, ${age}`}</li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
