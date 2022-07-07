import Header from './shared/Header';
import Footer from './shared/Footer';
import Copyright from './shared/Copyright';
import Home from './layout/Home'
import About from './layout/About'
import Contact from './layout/Contact'
import Services from './layout/Services'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
      </Switch>  
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
