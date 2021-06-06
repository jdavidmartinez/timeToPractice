import React, { useState} from 'react';
import AddUser from '../src/components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList]= useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList} />
    </div>
  );
}

export default App;
