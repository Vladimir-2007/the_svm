import { Link } from 'react-router-dom'
import './ProjectList.css'
import Avatar from '../Avatar/Avatar'

const ProjectList = ({ projects }) => {
   return (
      <div className="project-list">
         {projects.length === 0 && <p>No projects yet!</p>}
         {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id}>
               <h4>{project.name}</h4>
               <p>Due by {project.dueDate.toDate().toDateString()}</p>
               <div className='assigned-to'>
                  <ul>
                  {project.assignedUsersList.map(user => (
                     <li key={user.photoURL} style={{display: 'flex', alignItems: 'center'}}>
                        <Avatar src={user.photoURL}/>
                        <p style={{marginLeft: '15px' }}>{user.displayName}</p>
                     </li>
                  ))}
                  </ul>
               </div>

            </Link>
         ))}
      </div>
   )
}

export default ProjectList
