// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {timelineData} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = timelineData
  return (
    <div className="project-card-container">
      <img className="project-image" alt="project" src={imageUrl} />
      <div className="title-duration-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link-item">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
