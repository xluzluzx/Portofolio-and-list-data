import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const ProfileScreen = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText =
    "I am a university student with a strong passion for mobile application development and UI/UX design. With a background in information technology, I am committed to integrating education and technology to create innovative digital solutions.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prevText) => prevText + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  const openURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profile-picture.png')}
          style={styles.profileImage}
        />
        <Text style={styles.heading}>Hello, I'm a Mobile App Dev</Text>
        <Text style={styles.name}>M Ahsan Furqan</Text>
        <TouchableOpacity
        style={styles.contactButton}
        onPress={() => openURL('https://drive.google.com/drive/folders/1kXC5E0IbPiUYR0Kb1tLePVRG6X9dYzw_?hl=ID')}
      >
          <Text style={styles.portfolioButtonText}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => openURL('https://wa.me/6287858941917')}
        >
          <Text style={styles.contactButtonText}>Get in touch by WhatsApp</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={[styles.aboutText, { minHeight: 100 }]}>{displayedText}</Text>
      </View>
      <View style={styles.portfolioSection}>
        <Text style={styles.sectionTitle}>My Portfolio</Text>
        <Image
          source={require('../assets/uiux.png')}
          style={styles.portfolioImage}
        />
        <Text style={styles.portfolioCategoryCenter}>UI/UX Design</Text>
        <View style={styles.portfolioGap} />
        <Image
          source={require('../assets/mobileapp.png')}
          style={styles.portfolioImage}
        />
        <Text style={styles.portfolioCategoryCenter}>Mobile App</Text>
        <View style={styles.portfolioGap} />
        <TouchableOpacity
          style={styles.seeMoreButton}
          onPress={() => openURL('https://drive.google.com/drive/folders/1kXC5E0IbPiUYR0Kb1tLePVRG6X9dYzw_?hl=ID')}
        >
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.skillsSection}>
        <Text style={styles.sectionTitle}>My Skills</Text>
        <Image
          source={require('../assets/figma.png')}
          style={styles.skillIcon}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/kotlin.png')}
          style={styles.skillIcon}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/java.png')}
          style={styles.skillIcon}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/flutter.png')}
          style={styles.skillIcon}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact Me</Text>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => openURL('https://linkedin.com/in/mahsanfurqan')}
        >
          <Text style={styles.contactButtonText}>LinkedIn</Text>
          <Image
            source={require('../assets/LinkedIn.png')}
            style={styles.contactIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => openURL('https://wa.me/6287858941917')}
        >
          <Text style={styles.contactButtonText}>WhatsApp</Text>
          <Image
            source={require('../assets/WhatsApp.png')}
            style={styles.contactIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={() => openURL('https://t.me/yourprofile')}
        >
          <Text style={styles.contactButtonText}>Telegram</Text>
          <Image
            source={require('../assets/TelegramApp.png')}
            style={styles.contactIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 75,
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    marginVertical: 5,
  },
  portfolioButton: {
    backgroundColor: '#414141',
    paddingVertical: 15,
    width: 250,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  portfolioButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  contactButton: {
    backgroundColor: '#414141',
    paddingVertical: 15,
    width: 250,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  aboutSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  portfolioSection: {
    marginBottom: 30,
  },
  portfolioCategoryCenter: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  portfolioImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 15,
  },
  seeMoreButton: {
    backgroundColor: '#414141',
    paddingVertical: 15,
    width: 250,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  seeMoreText: {
    color: 'white',
  },
  skillsSection: {
    alignItems: 'center',
    marginBottom: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  skillIcon: {
    width: 80,
    height: 80,
    margin: 10,
  },
  contactSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  contactIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  portfolioGap: {
    marginBottom: 20,
  },
});

export default ProfileScreen;
