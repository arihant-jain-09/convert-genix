import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAVBAR from './components/navbar.jsx'
import JUMBOTRON from './components/jumbotron.jsx'
import { Route,Redirect } from 'react-router-dom';
import {auth, CreateUserProfileDocument} from './firebase/firebase.utils.js'
import {connect} from 'react-redux';
import setcurrentUser from './redux/user/user.actions.js'
import SIGNIN from './components/sign-in.jsx'
class App extends React.Component {
    constructor() {
      super();
      this.state = {
        loading:true,
      };
    }

    unsubscribeFromAuth = null;
    componentDidMount() {
      const {setcurrentUser}=this.props

      setTimeout(
    function() {
        this.setState({ loading: false });
    }
    .bind(this),
    3000
);
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await CreateUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setcurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          });
        }
        setcurrentUser(userAuth)
      });
    }

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
    const load=this.state.loading;
  return (

    <div className="App">
        <p>{load}</p>
      <NAVBAR />
      <div >
        <Route exact path='/convert-genix' component={JUMBOTRON}/>
        <Route exact path='/convert-genix/signin' render={()=>this.props.currentUser?(<Redirect to='/convert-genix/'/>):<SIGNIN /> }/>
        {/* <h1>{this.state.loading}</h1> */}
      </div>
    </div>
  );
}
}
const mapStateToProps=(state)=>({
  currentUser:state.user.currentUser
})
const mapDispatchToProps=(dispatch)=>({
  setcurrentUser:(user)=>dispatch(setcurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
