import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Home from "./components/Home";
import AppDevelopment from "./components/AppDevelopment";
import Navigation from "./components/Navigation";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/website" exact component={() => <Home />} />
          <Route path="/home" exact component={() => <Home />} />
          <Route path="/appdevelopment" exact component={() => <AppDevelopment />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/privacypolicy" exact component={() => <PrivacyPolicy />} />
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
