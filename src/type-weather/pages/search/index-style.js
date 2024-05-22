import styled from "styled-components/native";
import { ImageBackground } from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  gap: 10px;
  margin-top: 48px;
`;

export const HeaderImg = styled.Image`
  width: 36px;
  height: 24px;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: white;
`;

export const TitleColored = styled.Text`
  font-size: 20px;
  color: #8fb2f5;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  margin-top: 32px;
  color: white;
  width: 311px;
  height: 36px;
  padding-left: 20px;
`;
