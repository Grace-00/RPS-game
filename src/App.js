import './App.css';
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';
import CustomRank from './components/CustomRank';
import { Text, View } from 'react-native';

function App() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
      score: 1,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      score: 1,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      score: 1,
    },
  ];


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
      <CustomRank data={DATA} orientation='column' />
    </div>
  );
}

export default App;
