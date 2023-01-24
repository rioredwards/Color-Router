import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import RGB from './Components/RGB/RGB.js';
import './app.css';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/rgb/:r/:g/:b" component={RGB} />
      </Switch>
    </main>
  );
}

export default App;
