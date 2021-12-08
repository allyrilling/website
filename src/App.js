import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import AppDevelopment from "./components/AppDevelopment";
import Navigation from "./components/Navigation";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from './components/Footer';
import Resume from './components/Resume';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App" id="page-container">
      <Router>
        <div id="content-wrap">
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/website" exact component={() => <Home />} />
            <Route path="/home" exact component={() => <Home />} />
            <Route path="/resume" exact component={() => <Resume />} />
            <Route path="/appdevelopment" exact component={() => <AppDevelopment />} />
            <Route path="/privacypolicy" exact component={() => <PrivacyPolicy />} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
        <div id="footer"> <Footer /> </div>
      </Router>
    </div>

  );
}

export default App;
