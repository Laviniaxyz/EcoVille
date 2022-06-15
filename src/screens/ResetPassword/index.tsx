import React, { useState } from "react";
import { Components } from "./styled";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../Login/styled";
import { auth } from "../../../firebase";
import { Alert } from "react-native";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const onSubmit = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      Alert.alert("Succes", "Email was successfully sent");
    } catch (error) {
      Alert.alert("Error", "An error has occurred. Please try again");
    }
  };

  return (
    <Components.ScreenContainer showsHorizontalScrollIndicator={false}>
      <Components.LoginWrapper>
        <Components.SortingGarbageImage
          source={require("../../../assets/images/forgot-password.jpg")}
          resizeMode={"contain"}
        />
        <Components.Title>
          Forgot your password? Insert your email to reset it{" "}
          <Ionicons
            name={"lock-open-outline"}
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
          <Components.LoginButtonWrapper>
            <Components.LoginButton onPress={onSubmit}>
              <Components.ButtonText>Submit</Components.ButtonText>
            </Components.LoginButton>
          </Components.LoginButtonWrapper>
        </Components.FormWrapper>
      </Components.LoginWrapper>
    </Components.ScreenContainer>
  );
};

export default ResetPassword;
