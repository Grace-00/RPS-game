
import './App.css';
import Input from './components/Input';

function App() {
  const handleName = (e) => {
    console.log(e);
  }
  return (
    <div className="App">
      <Input callbackName={handleName} />
    </div>
  );
}

export default App;
