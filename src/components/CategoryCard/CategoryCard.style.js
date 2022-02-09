import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    elevation: 5,
    alignItems: 'center',
    borderColor: '#bcaaa4',
    borderWidth: 2,
    flexDirection: 'row',
    margin: 5,
    padding: 5,
    borderTopStartRadius: 50,
    borderBottomStartRadius: 50,
    borderRadius: 5,
    flex: 1,
  },
  image_container: {},
  image: {
    width: Dimensions.get('window').width / 3,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  text: {
    paddingLeft: 15,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
