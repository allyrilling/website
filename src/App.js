import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
									link='https://apps.apple.com/us/app/penguin-workouts/id1534463056?itsct=apps_box&amp;itscg=30200'
									logo={appStoreIcon}
									projectIcon={icon}
									aboutThe='About the App'
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
									link='https://apps.apple.com/us/app/lightyear-solar-clock/id1580773908'
									logo={appStoreIcon}
									projectIcon={lightyearicon}
									aboutThe='About the App'
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
									description={[
										<p>I built this site using...</p>,
										<ul>
											<li>ReactJS</li>
											<li>React-Bootstrap</li>
											<li>HTML</li>
											<li>CSS</li>
										</ul>,
										<p>
											It is hosted on Firebase and available on <a href='https://github.com/allyrilling'>GitHub</a>.
										</p>,
										<p>The favicon was made in Figma.</p>,
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
									link=''
									logo={gitHubIcon}
									projectIcon={jslogo}
									aboutThe='About the Project'
									description={[]}
								/>
							)}
						/>

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
									description={[]}
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
									description={[]}
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
									description={[]}
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
