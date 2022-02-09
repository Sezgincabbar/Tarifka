import React, {useCallback} from 'react';
import {TouchableOpacity, Text, Linking, View, Alert} from 'react-native';
import styles from './LinkButton.style';
const LinkButton = ({url}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Video Bulunamadı');
    }
  }, [url]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>Watch on YouTube</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkButton;
