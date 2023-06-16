import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Quotes from './components/Quotes';
import './dancing.gif'


export default function App() {
  return (
    <View style={styles.container}>

  <Image style={styles.image} source={require('./walking.gif')}/>
    <Quotes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#420b5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 200,
        height: 200,
        marginBottom: 30,
  }
});
