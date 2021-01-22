import React, { useEffect } from 'react';
import './App.css';
// import { Container } from 'reactstrap';

// import Navbar from './components/navbar/Navbar';
// import Registration from './components/form/Registration';
// import resendVerification from './components/form/ResendVerification';
// import Login from './components/form/Login';
// import Home from './components/homePage/Home';
// import Profile from './components/profile/Profile';
// import ResetPasswordEmailSend from './components/form/ResetPasswordEmailSend';
// import ResetPasswordForm from './components/form/ResetPasswordForm';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Demo from './components/demo/Demo';
// import ConfirmationEmail from './components/form/ConfirmEmail';
// import { loadUser } from './store/actions/auth';


const App = () => {

  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);


  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Demo/>
            {/* <Navbar /> */}
            {/* <Container> */}
              {/* <Route path="/register" exact component={Registration} />
              <Route path="/confirmation/:token" exact component={ConfirmationEmail} />
              <Route path="/resend" exact component={resendVerification} />
              <Route path="/login" exact component={Login} />
              <Route path="/reset-password" exact component={ResetPasswordEmailSend} />
              <Route path="/reset-password/:token" exact component={ResetPasswordForm} />
              <Route path="/profile" exact component={Profile} /> */}
              {/* <Route path="/" exact component={Home} /> */}
            {/* </Container> */}

              <h1>Hello World!!</h1>
              <h2>YaY I am joining !</h2>

          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
