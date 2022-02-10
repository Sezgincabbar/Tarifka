import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard/DetailCard';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
const Detail = ({route}) => {
  const {idMeal} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_DETAIL}${idMeal}`);
  const renderDetailCard = ({item}) => {
    return <DetailCard item={item} />;
  };

  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data.meals}
        renderItem={renderDetailCard}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
};

export default Detail;
