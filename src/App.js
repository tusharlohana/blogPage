import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Nav from './Nav';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Form';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} ></Route>
          <Route exact path="/create" component={Form} ></Route>
          <Route exact path="/blogs/:id" component={BlogDetails} ></Route>
        </Switch>
        
      </BrowserRouter>
    </>
  );
}

export default App;
