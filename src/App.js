import { Switch, Route} from 'react-router';
import './App.scss';
import Home from './Pages/Home/Home';
import Month from './Pages/Month/Month';
import Header from './Components/Header';

function App() {
  return (
      <div className='container'>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/month' component={Month} />
        </Switch>
      </div>
  );
}

export default App;
