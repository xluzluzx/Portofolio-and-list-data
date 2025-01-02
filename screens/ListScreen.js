// Enhanced ListScreen.js
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  Animated,
  Easing,
} from 'react-native';
import axios from 'axios';

const ListScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scaleAnimation = new Animated.Value(1);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handlePressIn = () => {
    Animated.timing(scaleAnimation, {
      toValue: 0.95,
      duration: 150,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 150,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { postId: item.id })}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ scale: scaleAnimation }],
          },
        ]}
      >
        <Text style={styles.cardTitle}>{item.title}</Text>
      </Animated.View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
        <Text style={styles.loadingText}>Fetching your content...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    backgroundColor: '#f3f3f3',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#6200EE',
    fontStyle: 'italic',
  },
});

export default ListScreen;
