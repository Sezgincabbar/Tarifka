import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 7,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 22,
    color: 'white',
    textAlign: 'right',
    backgroundColor: '#000000c0',
    padding: 5,
  },
});
