import React from "react";

import {
  Container,
  Header,
  Logo,
  Content,
  BoxInfo,
  TitlePage,
  Description,
  ButtonGroup,
  IconButton,
  Button,
  ContainerIllustration,
  Illustration
} from "./styles";

import logo from "./../../assets/logo.svg";
import illustration from "./../../assets/home-background.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} />
      </Header>
      <Content>
        <BoxInfo>
          <TitlePage>Seu marketplace de coleta de resíduos.</TitlePage>
          <Description>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </Description>
          <ButtonGroup>
            <IconButton />
            <Button />
          </ButtonGroup>
        </BoxInfo>
        <ContainerIllustration>
          <Illustration src={illustration} />
        </ContainerIllustration>
      </Content>
    </Container>
  );
};

export default Home;
