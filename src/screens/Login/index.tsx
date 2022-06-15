import React, { useEffect, useState } from "react";
import { Components, styles } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";
import { auth } from "../../../firebase";
import { isEmail, isPassword, isEmpty } from "../../../validation";
import { TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { RootStackParamList } from "../../../types";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.push("MainDashboard");
      }
    });
  }, []);

  const login = async () => {
    try {
      const userCredentials = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      if (userCredentials.user) {
        navigation.push("MainDashboard");
      }
    } catch (error) {
      Alert.alert("Error", "An error has occured please try again");
    }
  };

  const handleLogin = async () => {
    if (!isEmail(email)) {
      Alert.alert("Error", "Email address is invalid.");
    }
    if (!isPassword(password)) {
      Alert.alert("Error", "Password must have at least 6 characters");
    }
    if (isEmpty(email) || isEmpty(password)) {
      Alert.alert("Error", "All fields are mandatory");
    }

    await login();
  };

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  const navigationToForgotPass = () => {
    navigation.navigate("ResetPassword");
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
          <TouchableOpacity onPress={navigationToForgotPass}>
            <Components.ForgotPasswordMessage>
              Forgot password?
            </Components.ForgotPasswordMessage>
          </TouchableOpacity>
          <Components.LoginButtonWrapper>
            <Components.LoginButton onPress={handleLogin}>
              <Components.ButtonText>Login</Components.ButtonText>
            </Components.LoginButton>
          </Components.LoginButtonWrapper>
          <TouchableOpacity onPress={navigateToSignUp}>
            <Components.SecondaryMessage>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have an account?{" "}
              <Components.LinkMessage>Sign up </Components.LinkMessage>
              instead
            </Components.SecondaryMessage>
          </TouchableOpacity>
        </Components.FormWrapper>
      </Components.LoginWrapper>
    </Components.ScreenContainer>
  );
};

export default Login;
