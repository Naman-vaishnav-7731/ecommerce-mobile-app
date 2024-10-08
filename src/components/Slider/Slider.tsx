import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const SLIDER_DATA = [
  {
    title: 'Item 1',
    image: 'https://via.placeholder.com/300/09f/fff.png',
  },
  {
    title: 'Item 2',
    image: 'https://via.placeholder.com/300/f90/fff.png',
  },
  {
    title: 'Item 3',
    image: 'https://via.placeholder.com/300/f0f/fff.png',
  },
];

const Slider = () => {
  
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item?.image }} style={styles?.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={SLIDER_DATA}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        vertical={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Slider;
