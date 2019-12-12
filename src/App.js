import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GameProvider } from './context';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
// import Trolley from './pages/Trolley';
// import Checkout from './pages/Checkout';
// import Login from './pages/Login';
import GameInfo from './pages/GameInfo';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <GameProvider>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact={true} path='/' component={Home} />
              <Route path='/about' component={About} />
              {/* <Route path='/trolley' component={Trolley} /> */}
              {/* <Route path='/checkout' component={Checkout} /> */}
              <Route path='/contact' component={Contact} />
              {/* <Route path='/Login' component={Login} /> */} */}
              <Route exact={true} path='/games' component={Games} />
              <Route path='/games/:id' component={GameInfo} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </GameProvider>
    </div>
  );
}

export default App;
