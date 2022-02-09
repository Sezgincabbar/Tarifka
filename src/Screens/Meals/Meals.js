import React from 'react';
import {View, FlatList} from 'react-native';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Meals.style';
import MealCard from '../../components/MealCard/MealCard';
function Meals({navigation, route}) {
  const category = route.params;
  const {data, loading, error} = useFetch(`${Config.API_MEALS}${category}`);

  const renderMealCard = ({item}) => {
    return <MealCard meals={item} onSelect={() => goToDetail(item.idMeal)} />;
  };

  const goToDetail = idMeal => {
    navigation.navigate('DetailPage', [idMeal]);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMealCard} />
    </View>
  );
}

export default Meals;
