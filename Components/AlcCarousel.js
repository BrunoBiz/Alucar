import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-carousel';

const data = [
  {
    uri: 'https://example.com/image1.jpg',
  },
  {
    uri: 'https://example.com/image2.jpg',
  },
  {
    uri: 'https://example.com/image3.jpg',
  },
];

const AlcCarousel = () => {
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
        sliderWidth={300}
        itemWidth={250}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default AlcCarousel;