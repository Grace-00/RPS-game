
import './App.css';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';

function App() {

  const handleName = (e) => {
    console.log(e);
  }

  const handlePress = () => {
    console.log('Pressed')
  }
  
  return (
    <div className="App">
      <CustomInput callbackName={handleName} />
      <CustomButton label='Press' callbackPress={handlePress}/>
    </div>
  );
}

export default App;
