import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame3 from "../components/Frame3";
import Frame4 from "../components/Frame4";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LogIn = () => {
  const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const [image45IconVisible, setImage45IconVisible] = useState(false);

  const openForgotPassword = useCallback(() => {
    setForgotPasswordVisible(true);
  }, []);

  const closeForgotPassword = useCallback(() => {
    setForgotPasswordVisible(false);
  }, []);

  const openImage45Icon = useCallback(() => {
    setImage45IconVisible(true);
  }, []);

  const closeImage45Icon = useCallback(() => {
    setImage45IconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.logIn}>
        <Image
          style={styles.reqalert1Icon}
          contentFit="cover"
          source={require("../assets/reqalert-1.png")}
        />
        <Image
          style={styles.logInChild}
          contentFit="cover"
          source={require("../assets/vector-4.png")}
        />
        <Text style={[styles.logIn1, styles.logIn1Clr]}>Log-in</Text>
        <Text style={[styles.username, styles.passwordTypo]}>Username</Text>
        <Pressable
          style={[styles.signUpHere, styles.signUpHerePosition]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.logInWithTypo}>Sign-Up here</Text>
        </Pressable>
        <Text style={[styles.logInWith, styles.logInWithTypo]}>
          Log-in with
        </Text>
        <Text style={[styles.noAccountYet, styles.signUpHerePosition]}>
          No Account yet?
        </Text>
        <Pressable style={styles.forgotPassword} onPress={openForgotPassword}>
          <Text style={[styles.forgotPassword1, styles.passwordTypo]}>
            Forgot Password?
          </Text>
        </Pressable>
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
        <Text style={[styles.or, styles.orFlexBox]}>or</Text>
        <TextInput style={[styles.logInItem, styles.logLayout]} />
        <TextInput style={[styles.logInInner, styles.logLayout]} />
        <Pressable
          style={[styles.groupPressable, styles.groupLayout]}
          onPress={() => navigation.navigate("MyProfile")}
        >
          <View style={[styles.groupChild, styles.groupLayout]} />
        </Pressable>
        <Text style={[styles.logIn2, styles.orFlexBox]}>Log-in</Text>
        <Pressable style={styles.image45} onPress={openImage45Icon}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-451.png")}
          />
        </Pressable>
        <Text style={[styles.geraldramos, styles.logIn1Clr]}>geraldramos</Text>
        <Text style={styles.text}>********</Text>
      </View>

      <Modal animationType="fade" transparent visible={forgotPasswordVisible}>
        <View style={styles.forgotPasswordOverlay}>
          <Pressable
            style={styles.forgotPasswordBg}
            onPress={closeForgotPassword}
          />
          <Frame3 onClose={closeForgotPassword} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={image45IconVisible}>
        <View style={styles.image45IconOverlay}>
          <Pressable style={styles.image45IconBg} onPress={closeImage45Icon} />
          <Frame4 onClose={closeImage45Icon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  logIn1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  passwordTypo: {
    height: 22,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  signUpHerePosition: {
    top: 758,
    position: "absolute",
  },
  logInWithTypo: {
    width: 98,
    height: 22,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
  },
  orFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  logLayout: {
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 40,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupLayout: {
    height: 36,
    width: 141,
    position: "absolute",
  },
  reqalert1Icon: {
    top: 110,
    left: 79,
    width: 239,
    height: 68,
    position: "absolute",
  },
  logInChild: {
    top: 178,
    width: 388,
    height: 89,
    left: 0,
    position: "absolute",
  },
  logIn1: {
    top: 302,
    left: 138,
    textAlign: "left",
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
  },
  username: {
    top: 363,
    width: 77,
    height: 22,
    left: 148,
    position: "absolute",
    textAlign: "left",
  },
  signUpHere: {
    left: 169,
  },
  logInWith: {
    top: 637,
    left: 148,
    position: "absolute",
  },
  noAccountYet: {
    left: 42,
    width: 123,
    height: 22,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    textAlign: "left",
  },
  forgotPasswordOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  forgotPasswordBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  forgotPassword1: {
    width: 145,
    textAlign: "left",
  },
  forgotPassword: {
    left: 122,
    top: 503,
    position: "absolute",
  },
  password: {
    top: 433,
    width: 77,
    height: 22,
    left: 148,
    position: "absolute",
    textAlign: "left",
  },
  or: {
    top: 602,
    left: 149,
    height: 22,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
    width: 77,
  },
  logInItem: {
    top: 385,
  },
  logInInner: {
    top: 455,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorMaroon,
    left: 0,
  },
  groupPressable: {
    top: 543,
    left: 118,
  },
  logIn2: {
    top: 548,
    left: 87,
    color: Color.colorWhite,
    width: 199,
    height: 31,
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
  },
  image45IconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  image45IconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image45: {
    left: 165,
    top: 672,
    width: 47,
    height: 43,
    position: "absolute",
  },
  geraldramos: {
    left: 133,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.k2DRegular,
    top: 385,
    textAlign: "left",
  },
  text: {
    top: 466,
    left: 152,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  logIn: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LogIn;
