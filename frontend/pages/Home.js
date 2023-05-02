import React from 'react';
import {View, StyleSheet} from 'react-native'
import ProfileCard from '../components/ProfileCard';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default Home;