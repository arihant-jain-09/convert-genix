import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAVBAR from './components/navbar.jsx'
import JUMBOTRON from './components/jumbotron.jsx'
// import SIGNIN from './pages/Signinandsignup.jsx'
import { Route } from 'react-router-dom';
import {auth} from './firebase/firebase.utils.js'
import SIGNIN from './components/sign-in.jsx'
class App extends React.Component {
  constructor(){
  super();
  this.state={
    currentUser: null
  }
}
unsubscribeFromAuth=null

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
    this.setState({currentUser: user})
    console.log(user);
  })
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
