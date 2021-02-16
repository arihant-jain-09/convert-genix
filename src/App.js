import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAVBAR from './components/navbar.jsx'
import JUMBOTRON from './components/jumbotron.jsx'
import { Route } from 'react-router-dom';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils.js'

import SIGNIN from './components/sign-in.jsx'
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        currentUser: null
      };
    }
    unsubscribeFromAuth = null;
    componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await CreateUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
          });
        }
        this.setState({ currentUser: userAuth });
      });
    }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div className="App">
      <NAVBAR currentUser={this.state.currentUser}/>
      <div >
        <Route exact path='/convert-genix' component={JUMBOTRON}/>
        <Route exact path='/convert-genix/signin' component={SIGNIN}/>
      </div>
    </div>
  );
}
}
export default App;
