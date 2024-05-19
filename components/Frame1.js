import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Frame1 = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.photovideoAttachedParent}>
      <Text style={[styles.photovideoAttached, styles.okTypo]}>
        PHOTO/VIDEO ATTACHED
      </Text>
      <Image
        style={styles.image17Icon}
        contentFit="cover"
        source={require("../assets/image-171.png")}
      />
      <Pressable
        style={[styles.rectangleWrapper, styles.groupChildLayout]}
        onPress={() => navigation.navigate("InputReport")}
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
  photovideoAttached: {
    top: 122,
    left: 26,
    color: Color.colorBlack,
  },
  image17Icon: {
    top: 58,
    left: 157,
    width: 48,
    height: 48,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMaroon,
  },
  rectangleWrapper: {
    top: 187,
    left: 110,
  },
  ok: {
    top: 192,
    left: 164,
    color: Color.colorWhite,
  },
  photovideoAttachedParent: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 362,
    height: 271,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Frame1;
