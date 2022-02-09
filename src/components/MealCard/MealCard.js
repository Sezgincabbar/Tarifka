import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './MealCard.style';
const MealCard = ({meals, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          imageStyle={{borderRadius: 6}}
          source={{uri: meals.strMealThumb}}>
          <View>
            <Text numberOfLines={1} style={styles.text} ellipsizeMode="tail">
              {meals.strMeal}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealCard;
