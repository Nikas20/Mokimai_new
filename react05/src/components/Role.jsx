import AdminPanel from './AdminPanel';
import UserDashboard from './UserDashboard';
import GuestPage from './GuestPage';

function Role(props) {
    const {userRole} = props
    return (
       <>{userRole == "admin" ? <AdminPanel/> : userRole == "user" ? <UserDashboard /> : <GuestPage/>}</>
    )
}

export default Role