import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {
  HalfContainer,
  HalfContainerLeft,
  Test,
  Title,
  SubTitle,
} from './ViewStyle';

interface Props {}
export default function Weather({ temp, condition }: Props) {
  const weatherOptions = {
    Thunderstorm: {
      iconName: 'weather-lightning',
      gradient: ['#0f2027', '#203a43', '#2c5364'],
      title: '번개',
      subTitle: '조심하세요! 번개맞습니다.',
    },
    Drizzle: {
      iconName: 'weather-rainy',
      gradient: ['#2193b0', '#6dd5ed'],
      title: '비',
      subTitle: '비가 조금 내립니다. 우산 챙겨주세요!',
    },
    Clouds: {
      iconName: 'weather-cloudy',
      gradient: ['#373b44', '#4286f4'],
      title: '구름',
      subTitle: '구름이 많습니다.',
    },
    Clear: {
      iconName: 'weather-night',
      gradient: ['#2980b9', '#6dd5fa', '#ffffff'],
      title: '맑음',
      subTitle: '날씨가 맑습니다.',
    },
    Rain: {
      iconName: 'weather-rainy',
      gradient: ['#00b4db', '#0083b0'],
      title: '비',
      subTitle: '비옵니다. 우산 챙기세요.',
    },
    Snow: {
      iconName: 'weather-snowy',
      gradient: ['#e0eafc', '#cfdef3'],
      title: '눈',
      subTitle: '나랑 눈사람 만들래~?',
    },
  };

  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      {console.log(
        'weatherOptions[condition].gradient ? ',
        weatherOptions[condition].gradient
      )}
      <StatusBar barStyle="light-content" />
      <HalfContainer>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={80}
          color="white"
          className="icon"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </HalfContainer>
      <HalfContainerLeft className="text-left">
        <Title>{weatherOptions[condition].title}</Title>
        <SubTitle>{weatherOptions[condition].subTitle}</SubTitle>
      </HalfContainerLeft>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  // oneOf ? 알아보기 !!!!!!!!!!!!!!!!!!!
  // isRequired ? 붙이고 안붙이고 차이가 뭔지????
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
  },
  temp: {
    fontSize: 32,
    marginTop: 20,
    color: 'white',
  },
});
