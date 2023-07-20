import './Project.css'
import Avatar from '../../components/Avatar/Avatar'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useHistory } from 'react-router-dom'

const ProjectSummary = ({ project }) => {
   const history = useHistory()
   const { deleteDocument } = useFirestore('projects')
   const { user } = useAuthContext()

   const handleClick = (e) => {
      deleteDocument(project.id)
      history.push('/')
   }

   return (
      <div>
         <div className="project-summary">
            <h2 className="page-title">{project.name}</h2>
            <p>By {project.createdBy.displayName}</p>
            <p className="due-date">
               Project due by {project.dueDate.toDate().toDateString()}
            </p>
            <p className="details">{project.details}</p>
            <h4>Project is assigned to:</h4>
            {project.assignedUsersList.map((user) => (
               <div key={user.photoURL} style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                  <Avatar src={user.photoURL} />
                  <p style={{marginLeft: '15px'}}>{user.displayName}</p>
               </div>
            ))}
         </div>
         {user.uid === project.createdBy.id && (
            <button className="btn" onClick={handleClick}>
               Mark as Complete
            </button>
         )}
      </div>
   )
}

export default ProjectSummary
