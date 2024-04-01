// Write your code here
import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="app-container">
      <div className="timeline-view-container">
        <h1 className="timeline-view-title">
          MY JOURNEY OF <span className="timeline-view-subtitle">CCBP 4.0</span>
        </h1>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(timeLineItem =>
            timeLineItem.categoryId === 'COURSE' ? (
              <CourseTimelineCard timelineData={timeLineItem} />
            ) : (
              <ProjectTimelineCard timelineData={timeLineItem} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
