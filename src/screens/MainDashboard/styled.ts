// @ts-ignore
import styled from "styled-components/native";
import { SCREEN_WIDTH } from "../../../styled/dimensions";
import MapView, { Callout, Marker } from "react-native-maps";
import { Colors } from "../../../styled";
import RNPickerSelect from "react-native-picker-select";

export const styles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 16,
    borderWidth: 0.5,
    borderColor: "green",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
};
// margin-bottom: 12px;

export const Components = {
  ScreenContainer: styled.ScrollView`
    width: ${SCREEN_WIDTH}px;
  `,
  Title: styled.Text`
    font-size: 16px;
    text-align: center;
    margin-bottom: 16px;
  `,
  Subtitle: styled.Text`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  `,
  Text: styled.Text`
    font-size: 16px;
    text-align: center;
  `,
  MapView: styled(MapView)`
    width: 100%;
    height: 300px; ;
  `,
  PeopleSortingGarbageImage: styled.Image`
    align-self: center;
    height: 200px;
  `,
  SortingGarbageImage: styled.Image`
    height: 220px;
    width: 100%;
    align-self: center;
    opacity: 0.5;
  `,
  DashboardWrapper: styled.View`
    margin-vertical: 12px;
    margin-horizontal: 16px;
    background-color: ${Colors.secondaryBlue};
    padding: 16px;
    border-radius: 4px;
  `,
  Marker: styled(Marker)``,
  CardWrapper: styled.View`
    margin-vertical: 16px;
    margin-horizontal: 16px;
    padding: 16px;
    border-radius: 4px;
  `,
  LoginButtonWrapper: styled.View`
    margin-vertical: 16px;
  `,
  LoginButton: styled.TouchableOpacity`
    background-color: ${Colors.highlightYellow};
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 4px;
    align-items: center;
    margin-top: 16px;
  `,
  ButtonText: styled.Text`
    font-size: 16px;
    font-weight: 400;
  `,
  PinWrapper: styled.View`
    max-width: 250px;
    background-color: ${Colors.lightGrey};
    padding: 16px;
    border-radius: 4px;
    opacity: 0.9;
  `,
  PinTitle: styled.Text`
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 16px;
  `,
  PinDescription: styled.Text`
    margin-bottom: 2px;
  `,
  PinHours: styled.Text`
    margin-bottom: 2px;
    font-weight: 500;
  `,
  Picker: styled(RNPickerSelect)``,
  PinImage: styled.Image`
    width: 200px;
    height: 60px;
  `,
};
