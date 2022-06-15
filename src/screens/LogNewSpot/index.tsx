import React, { useContext, useState } from "react";
import { Components, styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import { itemsData } from "../../data/items";
import RNPickerSelect from "react-native-picker-select";
import { MarkerType } from "../MainDashboard/types";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Alert, FlatList } from "react-native";
import { SpotsContext } from "../../providers/spots/context";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { RootStackParamList } from "../../../types";
import { InputType } from "./types";

type Props = NativeStackScreenProps<RootStackParamList, "LogNewSpot">;

const LogNewSpot = ({ navigation }: Props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [value, setValue] = useState<string>("");
  const [description, setDescription] = useState("");
  const [lat, setLat] = useState<number>();
  const [lng, setLng] = useState<number>();
  const { recyclingSpots, setRecyclingSpots } = useContext(SpotsContext);

  const data: InputType[] = [
    { type: "name", value: name },
    { type: "address", value: address },
    { type: "garbage", value: value },
    { type: "conditions", value: description },
  ];

  const onAddNewSpot = (
    name: string,
    address: string,
    value: string | undefined,
    description: string,
    lat: number | undefined,
    lng: number | undefined
  ) => {
    const coordinates = {
      latitude: lat,
      longitude: lng,
    };
    const newSpot: MarkerType = {
      id: Number(Math.floor(Math.random() * 100) + 10),
      coordinate: coordinates,
      name: name,
      description: description,
      type: value,
      address: address,
      schedule: "Non-stop",
    };
    recyclingSpots.map((spot) => {
      if (
        spot.coordinate.latitude === lat &&
        spot.coordinate.longitude === lng
      ) {
        return Alert.alert(
          "Error",
          "The spot you are trying to submit already exists"
        );
      }
    });
    setRecyclingSpots([...recyclingSpots, newSpot]);
    Alert.alert(
      "Success",
      "Your recycling spot has been successfully submitted"
    );
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: InputType }) => {
    if (item.type === "name") {
      return (
        <Components.InputWrapper>
          <Components.CustomInput
            placeholder={"Location name"}
            autoCorrect={false}
            value={name}
            onChangeText={setName}
          />
        </Components.InputWrapper>
      );
    } else if (item.type === "address") {
      return (
        <GooglePlacesAutocomplete
          placeholder="Address"
          fetchDetails={true}
          query={{
            key: "AIzaSyDXw707YVxttRNVhTMHqHmeuaYle_zgOhU",
            language: "en", // language of the results
            field: "geometry",
          }}
          onPress={(data, details) => {
            if (details !== null) {
              setAddress(details.formatted_address);
              const lat = details.geometry.location.lat;
              const lng = details.geometry.location.lng;
              setLat(lat);
              setLng(lng);
            }
          }}
          onFail={(error) => console.error(error)}
          styles={styles.addressStyle}
        />
      );
    } else if (item.type === "garbage") {
      return (
        <Components.InputWrapper>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-ignore*/}
          <RNPickerSelect
            onValueChange={setValue}
            items={itemsData}
            placeholder={{ label: "What can be recycled", value: null }}
            style={{ inputIOS: styles.inputIOS }}
          />
        </Components.InputWrapper>
      );
    } else {
      return (
        <Components.InputWrapper>
          <Components.CustomTextArea
            placeholder={"Recycling conditions"}
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={5}
          />
        </Components.InputWrapper>
      );
    }
  };

  return (
    <Components.ScreenContainer showsHorizontalScrollIndicator={false}>
      <Components.LogNewSpotWrapper>
        <Components.SortingGarbageImage
          source={require("../../../assets/images/garbage-sorting.png")}
          resizeMode={"contain"}
        />
        <Components.Title>
          Add new recycling spot{" "}
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/*@ts-ignore*/}
          <Ionicons name={"megaphone-outline"} size={24} />
        </Components.Title>
        <Components.FormWrapper>
          <FlatList data={data} renderItem={renderItem} />
          <Components.LogNewSpotButtonWrapper>
            <Components.LogNewSpotButton
              onPress={() =>
                onAddNewSpot(name, address, value, description, lat, lng)
              }
            >
              <Components.ButtonText>Add spot</Components.ButtonText>
            </Components.LogNewSpotButton>
          </Components.LogNewSpotButtonWrapper>
        </Components.FormWrapper>
      </Components.LogNewSpotWrapper>
    </Components.ScreenContainer>
  );
};

export default LogNewSpot;
