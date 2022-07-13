import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Col, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Navigation from './components/Navigation';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import Resume from './components/Resume';
import PageNotFound from './components/PageNotFound';
import ProjectMaxi from './components/ProjectMaxi';
import icon from './images/penguinicon.png';
import favicon from './images/mylogo.svg';
import jslogo from './images/jslogo.svg';
import reactlogo from './images/reactlogo.svg';
import rnlogo from './images/rnlogo.svg';
import dialogflowlogo from './images/dflogo.svg';
import lightyearicon from './images/lightyearicon.png';
import iplogo from './images/iplogo.svg';
import appStoreIcon from './images/as.svg';
import gitHubIcon from './images/viewongithub.svg';
import jsImg from './images/jsimg.png';
import reactDemo from './files/ReactDemo.mov';
import rnFigmaDemo from './files/rnfigmademo.mov';
import rnDemo from './files/rndemo.MP4';
import dfDemo from './files/dfdemo.mp4';

function App() {
	return (
		<div className='App' id='page-container'>
			<Router>
				<div id='content-wrap'>
					<Navigation />
					<Switch>
						<Route path='/' exact component={() => <Home />} />
						<Route path='/website' exact component={() => <Home />} />
						<Route path='/home' exact component={() => <Home />} />
						<Route path='/resume' exact component={() => <Resume />} />
						<Route path='/projects' exact component={() => <Projects />} />
						<Route path='/privacypolicy' exact component={() => <PrivacyPolicy />} />
						<Route
							path='/projects/penguinworkouts'
							exact
							component={() => (
								<ProjectMaxi
									title='Penguin Workouts'
									subtitle='For every fitness level.'
									showPrivacyPolicy={true}
									link='https://apps.apple.com/us/app/penguin-workouts/id1534463056?itsct=apps_box&amp;itscg=30200'
									logo={appStoreIcon}
									projectIcon={icon}
									aboutThe='About the App'
									linkClass='privacyPolicyPenguin'
									class={'penguinContainer'}
									description='Penguin Workouts is a workout app that allows users to create quick workouts from a range of exercises. Users can add their own exercises and choose the number of exercises in each workout. The app includes upper body, lower body, hips, and core exercises. Additionally, Penguin Workouts comes with nine beautiful themes.'
								/>
							)}
						/>
						<Route
							path='/projects/lightyear'
							exact
							component={() => (
								<ProjectMaxi
									title='Lightyear'
									subtitle='Solar Stats.'
									showPrivacyPolicy={true}
									link='https://apps.apple.com/us/app/lightyear-solar-clock/id1580773908'
									logo={appStoreIcon}
									projectIcon={lightyearicon}
									aboutThe='About the App'
									linkClass='privacyPolicyLightyear'
									class={'lightyearContainer'}
									description={[
										'Lightyear is a utility that visualizes the current sunrise, sunset, and daylight hours. It shows the amount of daylight gained or lost over the last day, week, and month. Lightyear uses data from the ',
										<a href=' https://sunrise-sunset.org' className='privacyPolicyLightyear'>
											{' '}
											sunrise-sunset.org{' '}
										</a>,
										' API.',
									]}
								/>
							)}
						/>
						<Route
							path='/projects/site'
							exact
							component={() => (
								<ProjectMaxi
									title='This Site'
									subtitle='Portfolio'
									link='https://github.com/allyrilling/website'
									logo={gitHubIcon}
									projectIcon={favicon}
									aboutThe='About the Site'
									class={'siteContainer'}
									description={[
										<p>I built this site using...</p>,
										<ul>
											<li>ReactJS</li>
											<li>React-Bootstrap</li>
											<li>HTML</li>
											<li>CSS</li>
										</ul>,
										<p>
											It is hosted on Firebase and available on <a href='https://github.com/allyrilling'>GitHub</a>. The favicon was made in Figma.
										</p>,
									]}
								/>
							)}
						/>
						<Route
							path='/projects/javascript'
							exact
							component={() => (
								<ProjectMaxi
									title='JavaScript ɑ/β'
									subtitle='CS571 Class Project'
									link='https://github.com/CS571/js-beta-s22-allyrilling'
									logo={gitHubIcon}
									projectIcon={jslogo}
									aboutThe='About the Project'
									description={['The goal of this project was to create a webpage with JavaScript functionality and style it with Bootstrap CSS.']}
									class={'jsContainer'}
									extras={
										<Row>
											{/* <h3>
												See Figma design file{' '}
												<a href='https://www.figma.com/file/LydookNshs1dvt0unjOco6/CS571-JavaScript-Beta?node-id=0%3A1' color='#F7DF1E'>
													here
												</a>
												.
											</h3> */}
											<iframe
												// style='border: 1px solid rgba(0, 0, 0, 0.1);'
												className='center'
												width='800'
												height='450'
												src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLydookNshs1dvt0unjOco6%2FCS571-JavaScript-Beta%3Fnode-id%3D0%253A1'
												allowfullscreen
											></iframe>
											<img src={jsImg} class='center'></img>
										</Row>
									}
								/>
							)}
						/>
						// TODO: add a "main features" tag
						<Route
							path='/projects/react'
							exact
							component={() => (
								<ProjectMaxi
									title='React ɑ/β'
									subtitle='CS571 Class Project'
									link=''
									logo={gitHubIcon}
									projectIcon={reactlogo}
									aboutThe='About the Project'
									class={'reactContainer'}
									description={[
										'This project is course managment app. The React application pulls course data from the UW-Madison course database and loads it into the interface. State is preserved across tabs and interactions are handled using JavaScript.',
									]}
									extras={
										<Col>
											<Row>
												<h1>Prototype</h1>
											</Row>
											<Row>
												<iframe
													width='800'
													height='450'
													src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FrZWgf3fqn83YPhj2QrItiP%2FCS571-ReactBeta%3Fpage-id%3D0%253A1%26node-id%3D20%253A421%26scaling%3Dscale-down%26starting-point-node-id%3D20%253A421'
													allowfullscreen
												></iframe>
											</Row>
											<Row>
												<h1>Implementation</h1>
											</Row>
											<Row>
												<iframe width='1920' height='750' src={reactDemo} />
											</Row>
										</Col>
									}
								/>
							)}
						/>
						<Route
							path='/projects/reactnative'
							exact
							component={() => (
								<ProjectMaxi
									title='React Native ɑ/β'
									subtitle='CS571 Class Project'
									link=''
									logo={gitHubIcon}
									projectIcon={rnlogo}
									aboutThe='About the Project'
									class={'rnContainer'}
									description={[
										'This is a fitness tracking app built with React Native. Users can log into their account and view historical workouts data. The prototype shows the intended user interface; however, time constraints restricted the amount of user interface polishing done. Users can view, add, edit, and delete workouts and view and edit their account data. ',
									]}
									extras={
										<Col>
											<Row>
												<h1>Prototype</h1>
											</Row>
											<Row>
												<iframe
													width='800'
													height='450'
													src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWQ5DrKYANTxJIJr6Et2UrU%2FCS571-ReactNativeBeta%3Fpage-id%3D0%253A1%26node-id%3D23%253A368%26viewport%3D480%252C242%252C0.18%26scaling%3Dscale-down%26starting-point-node-id%3D23%253A368'
													allowfullscreen
												></iframe>
												<iframe width='800' height='450' src={rnFigmaDemo}></iframe>
											</Row>
											<Row>
												<h1>Implementation</h1>
											</Row>
											<Row>
												<iframe width='1920' height='750' src={rnDemo} />
											</Row>
										</Col>
									}
								/>
							)}
						/>
						<Route
							path='/projects/dialogflow'
							exact
							component={() => (
								<ProjectMaxi
									title='Dialogflow'
									subtitle='CS571 Class Project'
									link='https://github.com/CS571/dialogflow-s22-allyrilling'
									logo={gitHubIcon}
									projectIcon={dialogflowlogo}
									aboutThe='About the Project'
									class={'dfContainer'}
									description={[
										'This project is a Dialogflow chatbot integrated into a store website. Using the chatbot, users can log into the website, ask questions about products and categories, navigate the website, and checkout. The chatbot parses natural language input and chooses the best output from pre-specified options.',
									]}
									extras={
										<Col>
											<Row>
												<h1>Implementation</h1>
											</Row>
											<Row>
												<iframe width='1920' height='750' src={dfDemo} />
											</Row>
										</Col>
									}
								/>
							)}
						/>
						<Route
							path='/projects/cs570ip'
							exact
							component={() => (
								<ProjectMaxi
									title='Individual Project'
									subtitle='CS570 Class Project'
									link=''
									logo={gitHubIcon}
									projectIcon={iplogo}
									aboutThe='About the Project'
									class={'ipContainer'}
									description={[]}
								/>
							)}
						/>
						<Route path='*' component={PageNotFound} />
					</Switch>
				</div>
				<div id='footer'>
					{' '}
					<Footer />{' '}
				</div>
			</Router>
		</div>
	);
}

export default App;
