import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  Container,
  Logo,
  Main,
  Title,
  Description,
  Footer,
  Button,
  ButtonIcon,
  ButtonText,
} from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container
      source={require("./../../assets/home-background.png")}
      imageStyle={{ width: 274, height: 368 }}
    >
      <Main>
        <Logo source={require("./../../assets/logo.png")} />
        <Title>Seu marketplace de coleta de resíduos.</Title>
        <Description>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </Description>
      </Main>

      <Footer>
        <Button onPress={() => navigation.navigate("Points")}>
          <ButtonIcon>
            <Icon name="arrow-right" color="#fff" size={24} />
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default Home;
