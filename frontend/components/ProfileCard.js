import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const ProfileCard = () => {

  const linkedinUrl = "https://www.linkedin.com/in/dallas-klein-a00abb15b";
  const githubUrl = "https://github.com/dallaskle";

  const handleLinkClick = (url) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Cannot open URL:", url);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dallas Klein</Text>
      <Text style={styles.subheading}>Full Stack Software Engineer</Text>
      <Text style={styles.info}>Specializing in Javascript, React, React Native (Expo), Java, and Amazon Web Services (AWS).</Text>
      <View style={styles.bulletBox}>
        <Text style={styles.info}>🌱  Currently enrolled in BloomTech's Backend Program</Text>
        <Text style={styles.info}>🏈  Co-founder of SimBull.com - The Sports Market for Sports</Text>
        <Text style={styles.info}>📚  Master's Degree in Finance from Aarhus University</Text>
        <Text style={styles.info}>🪙  Curious about cryptocurrencies and dApps</Text>
        <Text style={styles.info}>🚝  Building a Personal Fitness Tracking App at Melirate.com</Text>
        <Text style={styles.info}>🏃  Fun Fact: Ran marathons in Iowa, Denmark, and Spain</Text>
      </View>
      <Text style={styles.info}>📫  Reach me by email: dallasjklein at gmail.com  📫</Text>
      <Text style={styles.info}>📍 Aarhus, Denmark 🔜 New York City 📍</Text>
      <Text style={styles.link}  onPress={() => handleLinkClick(linkedinUrl)}>Linkedin</Text>
      <Text style={styles.link}  onPress={() => handleLinkClick(githubUrl)}>Github</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bulletBox: {
    padding: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    marginBottom: 10,
    color: 'blue',
  },
});

export default ProfileCard;
