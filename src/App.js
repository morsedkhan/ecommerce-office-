import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Demo from './components/demo/Demo';
import UserLogin from './components/Auth/UserLogin';
import { Container } from 'react-bootstrap';


const App = () => {

  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);


  return (
    <>
      <Provider store={store}>
        <Router>
          <>
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

            <Container>
             <Switch>
                <Route path="/" exact component={UserLogin} />
                <Route path="/login" exact component={UserLogin} />
                <Route path="*" >
                    This Page Not Found ..... 404 !
                </Route>
             </Switch>
            </Container>

            {/* <UserLogin /> */}
          </>
        </Router>
      </Provider>
    </>
  );
}

export default App;
