import React, { useState } from "react";
import { Components, styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import { Alert, TouchableOpacity } from "react-native";
import { auth } from "../../../firebase";
import { isEmail, isPassword, isEmpty } from "../../../validation";
import * as WebBrowser from "expo-web-browser";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { RootStackParamList } from "../../../types";

WebBrowser.maybeCompleteAuthSession();

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

const Signup = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const signUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert("Error", "An error has occurred. Please try again");
    }
  };

  const handleSignUp = async () => {
    if (!isEmail(email)) {
      Alert.alert("Error", "Email address is invalid.");
    }
    if (!isPassword(password)) {
      Alert.alert("Error", "Password must have at least 8 characters");
    }
    if (password !== passwordConfirmation) {
      Alert.alert("Error", "Passwords must match");
    }
    if (isEmpty(email) || isEmpty(password)) {
      Alert.alert("Error", "All fields are mandatory");
    }

    await signUp();
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <Components.ScreenContainer showsHorizontalScrollIndicator={false}>
      <Components.LoginWrapper>
        <Components.SortingGarbageImage
          source={require("../../../assets/images/sorting-garbage.png")}
          resizeMode={"contain"}
        />
        <Components.Title>
          Don't throw it await! Recycle it and be a citizen of the EcoVille{" "}
          <Ionicons
            name={"people-outline"}
            size={24}
            style={styles.iconStyle}
          />
        </Components.Title>
        <Components.FormWrapper>
          <Components.InputWrapper>
            <Components.CustomInput
              placeholder={"Email"}
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />
          </Components.InputWrapper>
          <Components.InputWrapper>
            <Components.CustomInput
              placeholder={"Password"}
              secureTextEntry={true}
              autoCorrect={false}
              value={password}
              onChangeText={setPassword}
            />
            <Components.IconWrapper>
              <Ionicons
                name={"eye-off-outline"}
                size={24}
                style={styles.iconStyle}
              />
            </Components.IconWrapper>
          </Components.InputWrapper>
          <Components.InputWrapper>
            <Components.CustomInput
              placeholder={"Confirm Password"}
              secureTextEntry={true}
              autoCorrect={false}
              value={passwordConfirmation}
              onChangeText={setPasswordConfirmation}
            />
            <Components.IconWrapper>
              <Ionicons
                name={"eye-off-outline"}
                size={24}
                style={styles.iconStyle}
              />
            </Components.IconWrapper>
          </Components.InputWrapper>
          <Components.ForgotPasswordMessage>
            Forgot password?
          </Components.ForgotPasswordMessage>
          <Components.LoginButtonWrapper>
            <Components.LoginButton onPress={handleSignUp}>
              <Components.ButtonText>Sign up</Components.ButtonText>
            </Components.LoginButton>
          </Components.LoginButtonWrapper>
          <TouchableOpacity onPress={navigateToLogin}>
            <Components.SecondaryMessage>
              Already a member?{" "}
              <Components.LinkMessage>Login </Components.LinkMessage>instead
            </Components.SecondaryMessage>
          </TouchableOpacity>
        </Components.FormWrapper>
      </Components.LoginWrapper>
    </Components.ScreenContainer>
  );
};

export default Signup;
