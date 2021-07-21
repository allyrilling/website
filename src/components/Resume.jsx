import '../CSScomponents/Resume.css'
import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

export default function Resume() {
    return (
        <Container>
          {/* <Row><h1 className="globalPageTitle">Resume</h1></Row> */}
    
          <Row className="resumeCategoryHeader"><h2>Education</h2></Row>
    
          <Row className="resumeItemBody">
            <Col>
              <Row><h3 className="resumeTitleText">University of Wisconsin — Madison</h3></Row>
              <Row><h4 className="resumeSubtitleText">Graduation Spring 2023</h4></Row>
              <Row><h4 className="resumeSubtitleText">Majors: Finance and Computer Science</h4></Row>
            </Col>
            <Col>
              <ul>
                <li>Relevant Business Coursework</li>
                <ul>
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
                  <li>Programming I, II & III (in Java)</li>
                  <li>Machine Organization and Programming (in C and Assembly)</li>
                  <li>Introduction to Discrete Mathematics</li>
                  <li>Introduction to Computer Engineering</li>
                  <li>Learn a Programming Language: C++</li>
                </ul>
                </ul>
            </Col>
          </Row>
    
          <Row className="resumeCategoryHeader"><h2>Experiance</h2></Row>
    
          <Row className="resumeItemBody">
            <Col>
              <Row><h3 className="resumeTitleText">Technology Intern, Wells Fargo</h3></Row>
              <Row><h4 className="resumeSubtitleText">June 2021 - Present</h4></Row>
            </Col>
            <Col>
              <ul>
                <li>Internship is not complete yet!</li>
              </ul>
            </Col>
          </Row>
    
          <Row className="resumeItemBody">
            <Col>
              <Row><h3 className="resumeTitleText">iOS App Developer, Penguin Workouts</h3></Row>
              <Row><h4 className="resumeSubtitleText">October 2020 - Present</h4></Row>
            </Col>
            <Col>
              <ul>
                <li>Shipped version 1.1 with entirely new UI design.</li>
                <li>Used Apple’s Swift programming language to build and design a workout app for the iPhone.</li>
                <li>See more about Penguin Workouts <a href="AppDevelopment">here.</a></li>
              </ul>
            </Col>
          </Row>
    
          <Row className="resumeItemBody">
            <Col>
              <Row><h3 className="resumeTitleText">Administrative Assistant, Health In Balance Physical Therapy</h3></Row>
              <Row><h4 className="resumeSubtitleText">Mequon, Wisconsin | June 2019 - January 2021</h4></Row>
            </Col>
            <Col>
              <ul>
                <li>Organized company server by creating and implementing a new hierarchical file structure.</li>
                <li>Greeted patients, scheduled appointments and enrolled new patients in the patient data management system.</li>
                <li>Created Excel spreadsheets to log statistics and redesigned patient forms to streamline information processing.</li>
                <li>Assisted co-workers in adoption of new patient managment system.</li>
              </ul>
            </Col>
          </Row>
    
          <Row className="resumeItemBody">
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
          </Row>
    
          <Row className="resumeCategoryHeader"><h2>Skills and Certifications</h2></Row>
    
          <Row className="resumeItemBody">
            <Col>
              <h3>Programming Languages</h3>
              <ul>
                <li>Java</li>
                <li>Swift / SwiftUI</li>
                <li>Python</li>
                <li>C / C++</li>
                <li>HTML / CSS</li>
                <li>JavaScript</li>
              </ul>
            </Col>
    
            <Col>
              <h3>Software Proficiencies</h3>
              <ul>
                <li>Microsoft: Word, Excel, PowerPoint, Outlook, OneNote</li>
                <li>G Suite: Docs, Sheets, Slides, Sites</li>
                <li>iWork: Pages, Keynote, Numbers</li>
                <li>IDEs: Xcode, IntelliJ IDEA, Eclipse, WebStorm</li>
                <li>Git and GitHub</li>
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
                <Row className="resumeCategoryHeader"><h2>Extra-Curricular Activities</h2></Row>
                <Row className="resumeItemBody"><h3 className="resumeSubtitleText">UW - Madison Track Club | September 2019 - Present</h3></Row>
              </Col>
              <Col className="resumeECAandMoreColL">
                <Row className="resumeCategoryHeader"><h2>More</h2></Row>
                    <Row className="resumeItemBody">
                    <Col className="resumeSubtitleText">A feature on <a href="https://www.macsparky.com/blog/2020/3/home-screens-ally-rilling">MacSparky blog.</a></Col>
                    <Col className="resumeSubtitleText">Click here for resume.</Col>
                </Row>
              </Col>
          </Row>
    
    
        </Container>
      )
}
