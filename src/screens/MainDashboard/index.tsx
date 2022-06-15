import React, { useContext, useEffect, useState } from "react";
import { Components, styles } from "./styled";
import { Callout } from "react-native-maps";
import RNPickerSelect from "react-native-picker-select";
import { itemsData, markers } from "../../data/items";
import { ItemDataType } from "./types";
import { SpotsContext } from "../../providers/spots/context";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { RootStackParamList } from "../../../types";

type Props = NativeStackScreenProps<RootStackParamList, "MainDashboard">;

const MainDashboard = ({ navigation }: Props) => {
  const [selectedValue, setSelectedValue] = useState<ItemDataType | "">(null);
  const { recyclingSpots, setRecyclingSpots } = useContext(SpotsContext);

  useEffect(() => {
    setRecyclingSpots(markers);
  }, []);

  const onSelect = (value: ItemDataType) => {
    setSelectedValue(value);
    const filteredSpots = markers.filter((spot) => spot.type === value);
    setRecyclingSpots(filteredSpots);
  };

  const navigateToLogNewSpot = () => navigation.push("LogNewSpot");

  return (
    <Components.ScreenContainer>
      <Components.PeopleSortingGarbageImage
        source={require("../../../assets/images/people-throwing-garbage.jpg")}
        resizeMode={"contain"}
      />
      <Components.DashboardWrapper>
        <Components.Title>
          Nearly 90% of what we throw away could potentially be recovered
          through reuse, recycling or composting.
        </Components.Title>
        <Components.Subtitle>
          Check locations and recycling conditions for your domestic waste
        </Components.Subtitle>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/*@ts-ignore*/}
        <RNPickerSelect
          onValueChange={onSelect}
          items={itemsData}
          placeholder={{
            label: "Select what to recycle",
            value: selectedValue,
          }}
          style={{ inputIOS: styles.inputIOS }}
        />
      </Components.DashboardWrapper>
      <Components.MapView>
        {recyclingSpots.map((marker) => (
          <Components.Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.name}
            description={marker.description}
            image={require("../../../assets/images/map-marker.png")}
          >
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*@ts-ignore*/}
            <Callout tooltip>
              <Components.PinWrapper>
                <Components.PinTitle>{marker.name}</Components.PinTitle>
                <Components.PinDescription>
                  {marker.description}
                </Components.PinDescription>
                <Components.PinHours>
                  Hours: {marker.schedule}
                </Components.PinHours>
                {marker.image ? (
                  <Components.PinImage
                    source={{
                      uri: marker.image,
                    }}
                  />
                ) : null}
              </Components.PinWrapper>
            </Callout>
          </Components.Marker>
        ))}
      </Components.MapView>
      <Components.CardWrapper>
        <Components.Text>
          {"Know a recycling spot that's not on the map?"}
        </Components.Text>
        <Components.LoginButton onPress={navigateToLogNewSpot}>
          <Components.ButtonText>Add it here</Components.ButtonText>
        </Components.LoginButton>
      </Components.CardWrapper>
    </Components.ScreenContainer>
  );
};

export default MainDashboard;
