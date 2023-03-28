import './resume.css'

export const ResumePage = () => {
  return(
    <div className="container">
      <h1>Resume</h1>
      <div className="line"></div>

      <h2>My Skills</h2>

      <span>HTML</span>
      <div className="skills-container">
        <div className="skill">90%</div>
      </div>
      <span>CSS</span>
      <div className="skills-container">
        <div className="skill">90%</div>
      </div>
      <span>JS</span>
      <div className="skills-container">
        <div className="skill">90%</div>
      </div>
      <span>REACT</span>
      <div className="skills-container">
        <div className="skill">90%</div>
      </div>

      <h2>Education</h2>

      <p>KGUSTA UNIVERSITET</p>

    </div>
  )
}