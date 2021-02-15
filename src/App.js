import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NAVBAR from './components/navbar.jsx'
import JUMBOTRON from './components/jumbotron.jsx'
function App() {
  return (
    <div className="App">
      <NAVBAR />
      <div >
        <JUMBOTRON />
      </div>
    </div>
  );
}
export default App;
