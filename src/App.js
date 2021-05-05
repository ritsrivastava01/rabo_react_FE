import LoginPage from './components/login/LoginPage';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Header from './components/common/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <Header> </Header>
      <div className="container">
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
      <ToastContainer autoClose={3000} hideProgress></ToastContainer>
    </>
  );
}

export default App;
