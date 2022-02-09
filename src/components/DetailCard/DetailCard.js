import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './DetailCard.style';
import LinkButton from '../LinkButton';

const DetailCard = ({item}) => {
  const {strMeal, strMealThumb, strInstructions, strArea, strYoutube} = item;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: strMealThumb}} />
      <View style={styles.innercontainer}>
        <Text style={styles.meal}>{strMeal}</Text>
        <Text style={styles.area}>{strArea}</Text>
        <View style={{borderWidth: 1, borderColor: 'gray'}} />
        <Text style={styles.inst}>{strInstructions}</Text>
        <LinkButton url={strYoutube} />
      </View>
    </View>
  );
};

export default DetailCard;
