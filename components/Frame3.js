import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame3 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.passwordResetLinkSentToYParent}>
      <Text style={[styles.passwordResetLink, styles.okTypo]}>
        PASSWORD RESET LINK SENT TO YOUR E-MAIL
      </Text>
      <Pressable
        style={[styles.rectangleWrapper, styles.groupChildLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </Pressable>
      <Text style={[styles.ok, styles.okTypo]}>ok</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  okTypo: {
    textAlign: "center",
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  groupChildLayout: {
    height: 36,
    width: 141,
    position: "absolute",
  },
  passwordResetLink: {
    top: 88,
    left: 10,
    color: Color.colorBlack,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMaroon,
  },
  rectangleWrapper: {
    top: 183,
    left: 111,
  },
  ok: {
    top: 188,
    left: 165,
    color: Color.colorWhite,
  },
  passwordResetLinkSentToYParent: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 350,
    height: 250,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame3;
