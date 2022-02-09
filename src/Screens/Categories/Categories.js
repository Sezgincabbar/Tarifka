import React from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import Config from 'react-native-config';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import styles from './Categories.style';
function Categories({navigation}) {
  const {data, error, loading} = useFetch(Config.API_CATEGORY);

  const handleGoDetail = category => {
    navigation.navigate('MealsPage', [category]);
  };

  const renderCategoryCard = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleGoDetail(item.strCategory)}
    />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategoryCard} />
    </View>
  );
}

export default Categories;
