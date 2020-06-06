import React, { useState, useEffect, ChangeEvent } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PickerSelect from "react-native-picker-select";
import { Feather as Icon } from "@expo/vector-icons";
import axios from "axios";
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
  Selects,
} from "./styles";

interface IBGEUFResponse {
  nome: string;
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface UF {
  label: string;
  value: string;
}

interface City {
  label: string;
  value: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [ufs, setUfs] = useState<UF[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  const [selectedUF, setSelectedUF] = useState("0");
  const [selectedCity, setSelectedCity] = useState("0");

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      )
      .then((res) => {
        const ufInitials: UF[] = res.data.map((uf) => {
          return { label: uf.nome, value: uf.sigla };
        });
        setUfs(ufInitials.sort());
      });
  }, []);

  useEffect(() => {
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`
      )
      .then((res) => {
        const cityNames: City[] = res.data.map((city) => {
          return { label: city.nome, value: city.nome };
        });
        setCities(cityNames.sort());
      });
  }, [selectedUF]);

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
        <Selects>
          <PickerSelect
            onValueChange={(value) => setSelectedUF(value)}
            items={ufs}
            placeholder={{ label: "Selecione o Estado", value: null }}
          />
          <PickerSelect
            onValueChange={(value) => setSelectedCity(value)}
            items={cities}
            placeholder={{ label: "Selecione a Cidade", value: null }}
          />
        </Selects>
        <Button
          onPress={() =>
            navigation.navigate("Points", {
              uf: selectedUF,
              city: selectedCity,
            })
          }
        >
          <ButtonIcon>
            <Icon name="arrow-right" color="#fff" size={24} />
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  select: {
    flex: 1,
    backgroundColor: "#f0f0f5",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    fontSize: 16,
    color: "#6c6c80",
  },
});

export default Home;
