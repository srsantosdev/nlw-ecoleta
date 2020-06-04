import React from "react";
import { ScrollView } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";

import {
  Container,
  Description,
  Title,
  Item,
  ItemTitle,
  ItemsContainer,
  Map,
  MapContainer,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
  SelectedItem,
} from "./styles";

const Points: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToDetail() {
    navigation.navigate("Detail");
  }

  return (
    <>
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>

        <Title>Bem vindo.</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>

        <MapContainer>
          <Map
            initialRegion={{
              latitude: -12.2170666,
              longitude: -38.9563696,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <MapMarker
              coordinate={{ latitude: -12.2170666, longitude: -38.9563696 }}
              onPress={handleNavigateToDetail}
            >
              <MapMarkerContainer>
                <MapMarkerImage
                  resizeMode="cover"
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
                  }}
                />
                <MapMarkerTitle>Mercado</MapMarkerTitle>
              </MapMarkerContainer>
            </MapMarker>
          </Map>
        </MapContainer>
      </Container>

      <ItemsContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.3:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lampadas</ItemTitle>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.3:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lampadas</ItemTitle>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.3:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lampadas</ItemTitle>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.3:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lampadas</ItemTitle>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.3:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lampadas</ItemTitle>
          </Item>
          <Item onPress={() => {}}>
            <SvgUri
              width={42}
              height={42}
              uri="http://192.168.15.3:3333/uploads/lampadas.svg"
            />
            <ItemTitle>Lampadas</ItemTitle>
          </Item>
        </ScrollView>
      </ItemsContainer>
    </>
  );
};

export default Points;
