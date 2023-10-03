import { useState } from 'react';
import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';

type UserType = {
  username: string;
  age: string;
};

export type UsersListType = UserType[];

const App = () => {
  const [usersList, setUsersList] = useState<UsersListType>([]);

  const onAddUser = (username: string, age: string) => {
    setUsersList([
      ...usersList,
      {
        username,
        age,
      },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={onAddUser} />

      {usersList.length > 0 ? <UsersList usersList={usersList} /> : null}
    </>
  );
};

export default App;
