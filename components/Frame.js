import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.emergencyContactsNotifiedParent}>
      <Text style={[styles.emergencyContactsNotified, styles.okTypo]}>
        EMERGENCY CONTACTS NOTIFIED
      </Text>
      <Image
        style={styles.image11Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Pressable
        style={[styles.rectangleWrapper, styles.groupChildLayout]}
        onPress={() => navigation.navigate("HomePage")}
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
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupChildLayout: {
    height: 36,
    width: 141,
    position: "absolute",
  },
  emergencyContactsNotified: {
    top: 109,
    left: 41,
    color: Color.colorBlack,
  },
  image11Icon: {
    top: 43,
    left: 170,
    width: 33,
    height: 37,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMaroon,
  },
  rectangleWrapper: {
    top: 190,
    left: 116,
  },
  ok: {
    top: 195,
    left: 169,
    color: Color.colorWhite,
  },
  emergencyContactsNotifiedParent: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 373,
    height: 271,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame;
