import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 2,
  },
  innercontainer: {
    flex: 1,
    margin: 7,
  },
  meal: {
    fontSize: 30,
    color: '#A52A2A',
    fontWeight: 'bold',
  },
  area: {
    color: '#A52A2A',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inst: {
    color: 'black',
    fontSize: 16,
  },
});
