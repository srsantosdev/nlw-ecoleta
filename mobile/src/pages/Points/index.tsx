import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Alert } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SvgUri } from "react-native-svg";
import * as Location from "expo-location";

import api from "./../../services/api";

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
} from "./styles";

interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface Point {
  id: number;
  name: string;
  image: string;
  latitude: number;
  longitude: number;
}

const Points: React.FC = () => {
  const navigation = useNavigation();

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [items, setItems] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Oooops...",
          "Precisamos da sua permissão para acessar a localização."
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;
      setInitialPosition([latitude, longitude]);
    }

    loadPosition();
  }, []);

  useEffect(() => {
    api.get("items").then((res) => {
      setItems(res.data);
    });
  }, []);

  useEffect(() => {
    api
      .get("points", {
        params: {
          city: "Feira de Santana",
          uf: "BA",
          items: [1, 3],
        },
      })
      .then((res) => {
        setPoints(res.data);
      });
  }, []);

  function handleSelectItem(id: number) {
    const alreadySelected = selectedItems.findIndex((item) => item === id);
    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  function handleNavigateToDetail(id: number) {
    navigation.navigate("Detail", { point_id: id });
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
          {initialPosition[0] !== 0 && (
            <Map
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map((point) => (
                <MapMarker
                  key={String(point.id)}
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                  onPress={() => handleNavigateToDetail(point.id)}
                >
                  <MapMarkerContainer>
                    <MapMarkerImage
                      resizeMode="cover"
                      source={{
                        uri: point.image,
                      }}
                    />
                    <MapMarkerTitle>{point.name}</MapMarkerTitle>
                  </MapMarkerContainer>
                </MapMarker>
              ))}
            </Map>
          )}
        </MapContainer>
      </Container>

      <ItemsContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {items.map((item) => (
            <Item
              key={item.id}
              onPress={() => handleSelectItem(item.id)}
              activeOpacity={0.5}
              style={
                selectedItems.includes(item.id) && {
                  borderColor: "#34CB79",
                  borderWidth: 2,
                  backgroundColor: "#CEF3DE",
                }
              }
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ScrollView>
      </ItemsContainer>
    </>
  );
};

export default Points;
