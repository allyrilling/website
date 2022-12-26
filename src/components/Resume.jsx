import '../CSScomponents/Resume.css'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import resumePDF from "../files/ARilling.pdf"

export default function Resume ()
{
  return (
    <Container>
      <Col className="box">
        <Row className="resumeCategoryHeader" style={{ borderColor: "red" }}><h2>Education</h2></Row>

        <Row className="resumeItemBody" style={{ borderColor: "red" }}  >
          <Col>
            <Row><h3 className="resumeTitleText">University of Wisconsin — Madison</h3></Row>
            <Row><h4 className="resumeSubtitleText">Graduation December 2023</h4></Row>
            <Row><h4 className="resumeSubtitleText">Majors: Computer Science (B.S.) and Finance (B.S.)</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Relevant Business Coursework</li>
              <ul>
                <li>Derivative Securities</li>
                <li>Asset Pricing and Leverage</li>
                <li>Corporate Finance</li>
                <li>Investment Theory, Financial Markets and Economic Activity</li>
                <li>Introduction to Finance, Financial Reporting I</li>
                <li>Introductory Managerial Accounting, Introductory Financial Accounting</li>
                <li>Business Analytics I & II</li>
                <li>Microeconomics, Macroeconomics</li>
              </ul>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>Relevant Computer Science Coursework</li>
              <ul>
                <li>Building User Interfaces</li>
                <li>Computer Graphics</li>
                <li>Theory of Programming Language Design</li>
                <li>Introduction to Human Computer Interaction</li>
                <li>Programming I, II & III (in Java)</li>
                <li>Algorithms</li>
                <li>Machine Organization and Programming (in C and Assembly)</li>
                <li>Introduction to Discrete Mathematics</li>
                <li>Introduction to Computer Engineering</li>
              </ul>
            </ul>
          </Col>
        </Row>

        <Row className="resumeCategoryHeader" style={{ borderColor: "aqua" }}><h2>Experience</h2></Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Software Engineering Intern, Charles Schwab</h3></Row>
            <Row><h4 className="resumeSubtitleText">June 2022 - August 2022</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Architected and implemented (in .NET and C#) the backend for a new options expiration assignment risk monitoring feature that created alerts for customer accounts with risky options spreads.</li>
              <li>Utilized knowledge of options to gather requirements from business users for the new options assignment risk alerts.</li>
              <li>Developed a workflow in PEGA that parsed the backend assignment risk alert output and displayed alert data to end users.</li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Teaching Assistant, Professor Sebastien Plante</h3></Row>
            <Row><h4 className="resumeSubtitleText">January 2022 - May 2022</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Assisted in the restructuring of course content to utilize Python for teaching investment theory.</li>
              <li>Wrote practice problems about the time value of money and programming concepts including variables, conditionals, loops, data structures, and running regressions in Python.</li>
              <li>Created multiple 1-3 minute video animations to demonstrate basic programming concepts like variables and lists.</li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Personal Projects</h3></Row>
            <Row><h4 className="resumeSubtitleText">October 2020 - Present</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Used ReactJS to build <a className="resume" href="/projects/options-visualizer" style={{ color: 'aqua' }}>Options Visualizer</a>, a website that visualizes options spreads and allows users to input custom spreads.</li>
              <li>Created <a className="resume" href="/projects/penguinworkouts" style={{ color: 'aqua' }}>Penguin Workouts</a>, a pleasantly designed and user configurable workout app on iOS built with Swift and SwiftUI.</li>
              <li>Built <a className="resume" href="/projects/lightyear" style={{ color: 'aqua' }}>Lightyear - Solar Clock</a>, an iOS app that monitors sunrise and sunset times based on location and data from a third-party API.</li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Software Engineering Intern, Wells Fargo</h3></Row>
            <Row><h4 className="resumeSubtitleText">June 2021 - August 2021</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Utilized Selenium to write over 20 UI automation test cases for two different webpages. </li>
              <li>Mapped elements of webpages to variables in code using Xpaths so that their attributes could be validated.</li>
              <li>Created a workflow for scanning and validating the contents of auto-generated PDFs.</li>
              <li>Collaborated with six interns in other lines of business to create a presentation about intern networking opportunities.</li>
              <li>Worked in an Agile environment and participated in Scrum ceremonies on two different teams.</li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Technical Specialist, Apple</h3></Row>
            <Row><h4 className="resumeSubtitleText">September 2021 - December 2021</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Assisted customers in troubleshooting a wide variety of hardware and software issues with their iPhones, iPads, Apple Watches, and AirPods.</li>
              <li>Educated customers during appointments on best practices and helpful tips to improve the experience of using their Apple devices.</li>
            </ul>
          </Col>
        </Row>

        <Row className="resumeItemBody" style={{ borderColor: "aqua" }}>
          <Col>
            <Row><h3 className="resumeTitleText">Administrative Assistant, Health In Balance Physical Therapy</h3></Row>
            <Row><h4 className="resumeSubtitleText">June 2019 - January 2021</h4></Row>
          </Col>
          <Col>
            <ul>
              <li>Organized company server by creating and implementing a new hierarchical file structure.</li>
              <li>Greeted patients, scheduled appointments and enrolled new patients in the patient data management system.</li>
              <li>Created Excel spreadsheets to log statistics and redesigned patient forms to streamline information processing.</li>
              <li>Assisted co-workers in adoption of new patient management system.</li>
            </ul>
          </Col>
        </Row>

        {/* <Row className="resumeItemBody">
        <Col>
          <Row><h3 className="resumeTitleText">Instructor, City of Mequon</h3></Row>
          <Row><h4 className="resumeSubtitleText">Mequon, Wisconsin | June 2019 - July 2019</h4></Row>
        </Col>
        <Col>
          <ul>
            <li>Taught children ages 3 to 15 proper swimming technique and water safety.</li>
            <li>Offered one-on-one instruction to children who struggled with various skills.</li>
          </ul>
        </Col>
      </Row>

      <Row className="resumeItemBody">
        <Col>
          <Row><h3 className="resumeTitleText">Associate, Stein’s Garden and Home Store</h3></Row>
          <Row><h4 className="resumeSubtitleText">Mequon, Wisconsin | May 2017 - August 2017 </h4></Row>
        </Col>
        <Col>
          <ul>
            <li>Assisted customers in finding products in the Annuals and Perennials department.</li>
            <li>Made hourly rounds of store to ensure all plants were watered and organized.</li>
            <li>Helped reconfigure store for change in seasonal merchandise.</li>
          </ul>
        </Col>
      </Row>

      <Row className="resumeItemBody">
        <Col>
          <Row><h3 className="resumeTitleText">Community Service</h3></Row>
          <Row><h4 className="resumeSubtitleText">Mequon, Wisconsin | 2015 - 2019</h4></Row>
        </Col>
        <Col>
          <ul>
            <li>Volunteered at youth basketball camps.</li>
            <li>Assisted with various weekend basketball clinics.</li>
            <li>Instructed youth at summer volleyball camp.</li>
            <li>Sold Christmas trees for Mequon-Thiensville Optimist Club.</li>
          </ul>
        </Col>
      </Row> */}

        <Row className="resumeCategoryHeader" style={{ borderColor: "rgb(79, 126, 255)" }}><h2>Skills and Certifications</h2></Row>

        <Row className="resumeItemBody" style={{ borderColor: "rgb(79, 126, 255)" }}>
          <Col>
            <h3>Programming Languages</h3>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>C# / .NET</li>
              <li>Python</li>
              <li>HTML / CSS</li>
              <li>Swift / SwiftUI</li>
              <li>C / C++</li>
              <li>Haskell</li>
            </ul>
          </Col>

          <Col>
            <h3>Software Proficiencies</h3>
            <ul>
              <li>Figma</li>
              <li>Git (GitHub and Bitbucket)</li>
              <li>Jira</li>
              <li>IDEs: Visual Studio, JetBrains IDEs, Xcode, Eclipse, VS Code</li>
              <li>Excel / Powerpoint</li>
            </ul>
          </Col>

          <Col>
            <h3>Certifications</h3>
            <ul>
              <li>Bloomberg Market Concepts</li>
              <li>Wisconsin School of Business: Excel Proficiency</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="resumeECAandMoreColR">
            <Row className="resumeCategoryHeader" style={{ borderColor: 'lightgreen' }}><h2>Extra-Curricular Activities</h2></Row>
            <Row className="resumeItemBody" style={{ borderColor: 'lightgreen' }}><h3 className="resumeSubtitleText">UW - Madison Track Club | September 2019 - Present</h3></Row>
          </Col>
          <Col className="resumeECAandMoreColL">
            <Row className="resumeCategoryHeader" style={{ borderColor: 'orange' }}><h2>More</h2></Row>
            <Row className="resumeItemBody" style={{ borderColor: 'orange' }}>
              <Col>Click <a className="resume" href={resumePDF} download="ARilling.pdf" style={{ color: 'orange' }}>here</a> to download resume.</Col>
              {/* <Col>A feature on <a className="resume" href="https://www.macsparky.com/blog/2020/3/home-screens-ally-rilling" style={{ color: 'orange' }}>MacSparky blog</a>.</Col> */}
            </Row>
          </Col>
        </Row>
      </Col>


    </Container>
  )
}
