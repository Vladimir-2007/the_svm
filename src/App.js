import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Dashboard from './views/dashboard/Dashboard'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'
import Create from './views/Create/Create'
import Project from './views/Project/Project'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import OnlineUsers from './components/OnlineUsers/OnlineUsers'

function App() {
   const { user, authIsReady } = useAuthContext()

   return (
      <div className="App">
         {authIsReady && (
            <BrowserRouter>
               {user && <Sidebar />}
               <div className="container">
                  <Navbar />
                  <Switch>
                     <Route exact path="/">
                        {!user && <Redirect to="/login" />}
                        {user && <Dashboard />}
                     </Route>
                     <Route path="/create">
                        {!user && <Redirect to="/login" />}
                        {user && <Create />}
                     </Route>
                     <Route path="/projects/:id">
                        {!user && <Redirect to="/login" />}
                        {user && <Project />}
                     </Route>
                     <Route path="/Login">
                        {user && <Redirect to="/" />}
                        {!user && <Login />}
                     </Route>
                     <Route path="/signup">
                        {user && <Redirect to="/" />}
                        {!user && <Signup />}
                     </Route>
                  </Switch>
               </div>
               {user && <OnlineUsers />}
            </BrowserRouter>
         )}
      </div>
   )
}

export default App
