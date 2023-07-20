import './Sidebar.css'
import DashboardIcon from '../../assets/dashboard_icon.svg'
import AddIcon from '../../assets/add_icon.svg'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import Avatar from '../Avatar/Avatar'

const Sidebar = () => {
   const { user } = useAuthContext()

   return (
      <div className="sidebar">
         <div className="sidebar-content">
            <div className="user">
               {user ? (
                  <>
                     <Avatar src={user.photoURL} />
                     <p>Hey {user.displayName} </p>
                  </>
               ) : (
                  <p>Hey user</p>
               )}
            </div>
            <nav className="links">
               <ul>
                  <li>
                     <NavLink exact to="/">
                        <img src={DashboardIcon} alt="dashboard" />
                        <span>Dashboard</span>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/create">
                        <img src={AddIcon} alt="addIcon" />
                        <span>New Project</span>
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Sidebar
