import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 150px;
  height: 100px;
  border-radius: 40px;
`;

export const CardTitle = styled.Text`
  color: yellow;
  font-size: 20px;
  font-weight: bold;
`;

export const CardSubtitle = styled.Text`
  color: blue;
  font-size: 20px;
  font-weight: bold;
`;
