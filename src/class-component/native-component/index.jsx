import * as S from "./styles";
function CreativeCard(props) {
  return (
    <S.Container>
      <S.CardContainer>
        <S.CardTitle>{props.title}</S.CardTitle>
        <S.CardSubtitle>{props.description}</S.CardSubtitle>
      </S.CardContainer>
    </S.Container>
  );
}

export default function CreativeComponent() {
  return (
    <S.Container>
      <CreativeCard title="emily" description="abacaxi" />
      <CreativeCard title="Pedro" description="gayzao" />
      <CreativeCard title="Gabi" description="hetero top" />
      <CreativeCard title="Gusta" description="gay" />
      <CreativeCard title="gui" description="'crente'" />
    </S.Container>
  );
}
