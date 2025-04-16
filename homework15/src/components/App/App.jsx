import UserList from '../UserList/UserList';

import './App.css'
import '../../styles/reset.css'
import '../../styles/common.css'

const users = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Brown" },
  { id: 4, name: "Diana Prince" },
  { id: 5, name: "Ethan Clark" }
];

function App() {

  return (
    <>
      <UserList users={users} />
    </>
  )
}

export default App
