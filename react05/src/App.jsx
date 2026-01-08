import './App.css'
import User from './components/User';
import Profile from './components/Profile';
import Role from './components/Role';

import tasks  from './components/data';
import Task from './components/Task';
import UserType from './components/UserType';

import Modal from './components/Modal';
import Navigation from './components/Navigation';

import FeatureFlags from './components/FeatureFlags';

function App() {
  const user = {
  id : "1",
  userName :"Farel",
  userRole:"admin",
  isLoggedIn : true,
  isLoading  : false
};
  //admin, user, none

  const taskArray = tasks.length == 0 ? "No tasks available" : tasks.map((task) => {
    return <Task nameTask = {task.nameTask} type={task.type} key={task.id}/>
  })

  return (
    <>
      <User userName={user.userName} isLoggedIn={user.isLoggedIn} isLoading={user.isLoading}/>
      <Profile isLoggedIn={user.isLoggedIn}/>
      <Role userRole={user.userRole}/>
<br />
      <hr />

      <UserType />

      <hr />
<br />
      <div>
        <p>Tasks</p>
        {taskArray}
      </div>

<br />
      <Modal />
      <br />

      <Navigation />

      <br />

      <FeatureFlags />
    </>
  )
}

export default App
