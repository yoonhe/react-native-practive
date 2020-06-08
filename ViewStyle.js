import styled from 'styled-components/native';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

export const HalfContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  border: 1px solid #fff;
`;

export const HalfContainerLeft = styled(HalfContainer)`
  padding: 0 50px;
  align-items: flex-start;
`;

export const Test = styled.View`
  background: #fff;
  height: 200px;
  width: 150px;
  border: 1px solid red;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  margin: 10px;
`;

export const Title = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  font-size: 40px;
  text-align: left;
  font-weight: 600;
`;
export const SubTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;
