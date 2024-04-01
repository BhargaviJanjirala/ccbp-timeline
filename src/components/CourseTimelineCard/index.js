// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {timelineData} = props
  const {courseTitle, description, duration, tagsList} = timelineData
  return (
    <div className="course-card-container">
      <div className="title-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-image" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tagsListItem => (
          <li className="tags-list-item">
            <p>{tagsListItem.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
