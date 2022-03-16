
import './App.css';
import CustomButton from './components/CustomButton';
import CustomImage from './components/CustomImage';
import CustomInput from './components/CustomInput';
import rock from './assets/rock.svg'

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
      <CustomButton label='Press' callbackPress={handlePress} />
      <CustomImage callbackPress={handlePress} imageURI={rock} />
    </div>
  );
}

export default App;
