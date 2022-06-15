// @ts-ignore
import styled from "styled-components/native";
import { CHIN_HEIGHT, SCREEN_WIDTH } from "../../../styled/dimensions";
import { Colors } from "../../../styled";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";

export const styles = {
  scrollContentStyle: {
    width: "100%",
    marginTop: 14,
  },
  inputIOS: {
    fontSize: 16,
    padding: 12,
    borderWidth: 0.5,
    borderColor: Colors.grey,
    borderRadius: 4,
    marginBottom: 12,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  addressStyle: {
    textInputContainer: {
      marginBottom: 12,
      fontSize: 16,
      borderWidth: 0.5,
      borderColor: Colors.grey,
      borderRadius: 4,
    },
  },
};

export const Components = {
  ScreenContainer: styled.SafeAreaView`
    width: ${SCREEN_WIDTH}px;
    background-color: ${Colors.primaryWhite};
    flex: 1;
  `,
  LogNewSpotWrapper: styled.View`
    margin-horizontal: 16px;
    margin-bottom: ${CHIN_HEIGHT}px;
  `,
  SortingGarbageImage: styled.Image`
    align-self: center;
    height: 320px;
  `,
  Title: styled.Text`
    font-size: 18px;
    text-align: center;
  `,
  FormWrapper: styled.View`
    margin-vertical: 24px;
  `,
  CustomInput: styled.TextInput`
    margin-bottom: 12px;
    padding: 16px;
    font-size: 16px;
    border: 0.5px solid ${Colors.grey};
    border-radius: 4px;
  `,
  CustomTextArea: styled.TextInput`
    margin-bottom: 12px;
    padding: 16px;
    font-size: 16px;
    border: 0.5px solid ${Colors.grey};
    border-radius: 4px;
    min-height: 80px;
  `,

  ForgotPasswordMessage: styled.Text`
    align-self: flex-end;
    font-size: 14px;
  `,
  SecondaryMessage: styled.Text`
    align-self: center;
    font-size: 14px;
  `,
  LogNewSpotButtonWrapper: styled.View`
    margin-vertical: 16px;
  `,
  LogNewSpotButton: styled.TouchableOpacity`
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
  IconWrapper: styled.View`
    position: absolute;
    right: 16px;
    top: 12px;
  `,
  InputWrapper: styled.View``,
  Icon: styled(Ionicons),
};
