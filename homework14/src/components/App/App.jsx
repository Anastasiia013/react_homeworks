
import User from '../User/User'
import UserForm from '../UserForm/UserForm'


import './App.css'
import '../../styles/reset.css'
import '../../styles/common.css'

function App() {

  return (
    <main>
      <h1>User Profile</h1>
      <div className='appBox'>
        <User />
        <UserForm />
      </div>
    </main>
  )
}

export default App
