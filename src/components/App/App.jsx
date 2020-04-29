import React from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import CharactersViewer from '../../containers/CharactersViewer/CharactersViewers';
import DetailView from './Detail/DetailView';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Link to="/">Home</Link>
        <Switch>
          <Route exact path="/" component={CharactersViewer} />  
          <Route exact path="/characters/:id" component={DetailView} />
        </Switch>
      </div>
    </Router>
  );
}



