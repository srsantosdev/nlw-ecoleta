import React, { useEffect, useState } from "react";
import { TouchableOpacity, Linking } from "react-native";
import { Feather as Icon, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import api from "./../../services/api";

import {
  Container,
  Address,
  AddressContent,
  Footer,
  PointImage,
  PointItems,
  Button,
  ButtonText,
  AddressTitle,
  PointName,
} from "./styles";

interface Params {
  point_id: number;
}

interface Data {
  point: {
    id: number;
    name: string;
    image: string;
    email: string;
    whatsapp: string;
    city: string;
    uf: string;
  };
  items: {
    title: string;
  }[];
}

const Detail: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { point_id } = route.params as Params;

  const [data, setData] = useState<Data>({} as Data);

  useEffect(() => {
    api.get(`points/${point_id}`).then((res) => {
      setData(res.data);
    });
  }, [point_id]);

  function handleWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${data.point.whatsapp}&text="Tenho interesse sobre a coleta e desejo saber mais."`
    );
  }

  function handleComposeMail() {
    MailComposer.composeAsync({
      subject: "Interesse na coleta.",
      recipients: [data.point.email],
    });
  }

  if (!data.point) {
    return null;
  }

  return (
    <>
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <PointImage
          resizeMode="cover"
          source={{
            uri: data?.point?.image,
          }}
        />

        <PointName>{data?.point?.name}</PointName>
        <PointItems>
          {data.items.map((item) => item.title).join("• ")}
        </PointItems>

        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>
            {data?.point?.city} - {data?.point?.uf}
          </AddressContent>
        </Address>
      </Container>

      <Footer>
        <Button onPress={handleWhatsapp}>
          <FontAwesome name="whatsapp" size={24} color="#fff" />
          <ButtonText>Whatsapp</ButtonText>
        </Button>
        <Button onPress={handleComposeMail}>
          <Icon name="mail" size={24} color="#fff" />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </>
  );
};

export default Detail;
