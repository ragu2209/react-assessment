import List from './List';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from '../pages/detail';
function App() {
  return (
    <Router>
      {/* 1.	Use client-side routing to create a "detail" page. */}
      <Switch>
        <Route path="/" component={List} exact />
        <Route path="/detail" component={Detail} exact />
      </Switch>
    </Router>
  );
}

export default App;
