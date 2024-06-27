import React from 'react';
import './JobPreviewDashboard.css';
import notification from "./assets/notification.png"

const JobPreviewDashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="logo">Logo</div>
        <div className="tabs">
          <div className="tab active">Jobs</div>
          <div className="tab">Messages</div>
          <div className="tab">Payments</div>
        </div>
        <div>
            <img src={notification} alt="notification" className='notification'/>
        </div>
      </div>
      <div className="content">
        <div className="left-panel">
          <div className="job-preview">
            <h2>Senior Product Designer</h2>
            <p className="posted">posted 2 days ago • <span className="status">Open</span></p>
            <p className="location-salary">Delaware, USA • $300k-$400k</p>
            <div className="skills-required">
              <span className="skill">Figma</span> 
              <span className="skill">Adobe Illustrator</span> 
              <span className="skill">Adobe XD</span>
            </div>
            <p className="preferred-language">Preferred Language: English</p>
            <p className="type">Type: Full time</p>
            <p className="experience">Years of Experience: 3+ Years of Experience</p>
            <div className="about-job">
              <h3>About the job</h3>
              <ul>
                <li>Handle the UI/UX research design</li>
                <li>Work on researching on latest web applications designs & trends</li>
                <li>Work on conceptualizing and visualizing</li>
                <li>Work on creating graphics content and other graphic related works</li>
              </ul>
              <div className="benefits">
                <h4>Benefits:</h4>
                <ul>
                  <li>Health Insurance</li>
                  <li>Provident Fund</li>
                </ul>
              </div>
              <p>Schedule: Day shift</p>
              <div className="pay-types">
                <h4>Supplemental pay types:</h4>
                <ul>
                  <li>Performance bonus</li>
                  <li>Yearly bonus</li>
                </ul>
              </div>
              <p>Work Location: In person</p>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <button className="delete-job">Delete job</button>
          <button className="edit-job">Edit job</button>
          <div className="stats">
            <div className="stat">
              <span className="number">400</span>
              <span className="label">Applicants</span>
            </div>
            <div className="stat">
              <span className="number">100</span>
              <span className="label">Matches</span>
            </div>
            <div className="stat">
              <span className="number">147</span>
              <span className="label">Messages</span>
            </div>
            <div className="stat">
              <span className="number">800</span>
              <span className="label">Views</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="company-info">
          <h3>Atlassian</h3>
          <p>Company size: 1k-2k employees</p>
          <p>Sector: Information Technology, Infrastructure</p>
          <p>Founded: 2019</p>
          <p>Type: Private</p>
          <p>Funding: Bootstrapped</p>
          <p>Founded By: Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </div>
  );
};

export default JobPreviewDashboard;
