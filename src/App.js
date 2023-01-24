import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import RGB from './Components/RGB/RGB.js';
import NotFound from './Components/NotFound/NotFound.js';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/rgb/:r/:g/:b" component={RGB} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
