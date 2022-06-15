// @ts-ignore
import styled from "styled-components/native";
import {
  CHIN_HEIGHT,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
} from "../../../styled/dimensions";
import { Colors } from "../../../styled";

export const styles = {
  iconStyle: {},
  scrollContentStyle: {
    width: "100%",
    marginTop: 14,
  },
};

export const Components = {
  ScreenContainer: styled.ScrollView`
    width: ${SCREEN_WIDTH}px;
    background-color: ${Colors.primaryWhite};
    height: 100%;
  `,
  LoginWrapper: styled.View`
    margin-top: ${STATUS_BAR_HEIGHT}px;
    margin-horizontal: 16px;
    margin-bottom: ${CHIN_HEIGHT}px
    justify-content: space-between;
    height: 100%;

  `,
  SortingGarbageImage: styled.Image`
    align-self: center;
    width: 400px;
    height: 300px;
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
  ForgotPasswordMessage: styled.Text`
    align-self: flex-end;
    font-size: 14px;
  `,
  SecondaryMessage: styled.Text`
    align-self: center;
    font-size: 14px;
  `,
  LinkMessage: styled.Text`
    align-self: center;
    font-size: 14px;
    color: ${Colors.stoke};
    font-weight: bold;
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
  IconWrapper: styled.View`
    position: absolute;
    right: 16px;
    top: 12px;
  `,
  InputWrapper: styled.View``,
};
