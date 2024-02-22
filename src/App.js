import logo from './logo.svg';
import './App.css';
import Subscription from './components/Subscription';
import Books_list from './components/Books_list';
import Student_list from './components/Students_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Subscription />
        <Books_list />
        <Student_list />
      </header>
    </div>
  );
}

export default App;
