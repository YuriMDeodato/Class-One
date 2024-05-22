import React from "react";
import { ImageBackground } from "react-native";
import {
  Container,
  HeaderContainer,
  HeaderImg,
  HeaderTitle,
  Subtitle,
  TitleContainer,
  Input,
  TitleText,
  TitleColored,
} from "./index-style";

import Background from "../../assets/images/Background.png";
import Cloud from "../../assets/images/Cloud.png";

export default function Search() {
  return (
    <Container source={Background} resizeMode="cover">
      <HeaderContainer>
        <HeaderImg source={Cloud} />
        <TitleText>TypeWeather</TitleText>
      </HeaderContainer>
      <TitleContainer>
        <TitleText>
          Boas Vindas ao <TitleColored>TypeWeather</TitleColored>
        </TitleText>
        <Subtitle>Escolha um local para ver a previsão do tempo</Subtitle>
      </TitleContainer>
      <Input placeHolder="Buscar Local" placeHolderTextColor="#7f7f98"></Input>
    </Container>
  );
}
