import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Alert1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.alert}>
      <Image
        style={styles.reqalert1Icon}
        contentFit="cover"
        source={require("../assets/reqalert-1.png")}
      />
      <Pressable
        style={[styles.image1, styles.imageLayout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image4, styles.imageLayout]}
        onPress={() => navigation.navigate("Live")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <Pressable
        style={styles.image8}
        onPress={() => navigation.navigate("Map1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image9, styles.imagePosition]}
        onPress={() => navigation.navigate("Report")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image10, styles.imagePosition]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
      </Pressable>
      <Text style={styles.alert1}>ALERT</Text>
      <Text style={[styles.stabbingHasBeen, styles.stabbingHasBeenTypo]}>
        Stabbing has been reported in Bondi Junction Westfield
      </Text>
      <Text
        style={[styles.awaitFurtherInstructions, styles.stabbingHasBeenTypo]}
      >
        Await further instructions from authorities
      </Text>
      <Image
        style={styles.image45Icon}
        contentFit="cover"
        source={require("../assets/image-45.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    width: 42,
    position: "absolute",
  },
  imagePosition: {
    top: 733,
    position: "absolute",
  },
  stabbingHasBeenTypo: {
    textAlign: "center",
    fontFamily: FontFamily.k2DRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  reqalert1Icon: {
    top: 110,
    left: 79,
    width: 239,
    height: 68,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image1: {
    top: 254,
    height: 42,
    left: 32,
  },
  image4: {
    left: 88,
    top: 739,
    height: 55,
  },
  image6Icon: {
    top: 747,
    left: 260,
    width: 33,
    height: 37,
    position: "absolute",
  },
  image8: {
    top: 750,
    width: 39,
    height: 38,
    left: 32,
    position: "absolute",
  },
  image9: {
    left: 159,
    width: 68,
    height: 66,
  },
  image10: {
    left: 318,
    width: 61,
    height: 61,
  },
  alert1: {
    top: 270,
    left: 153,
    fontFamily: FontFamily.juliusSansOneRegular,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  stabbingHasBeen: {
    top: 506,
    left: 40,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.k2DRegular,
  },
  awaitFurtherInstructions: {
    top: 622,
    left: 60,
    fontSize: FontSize.size_base,
  },
  image45Icon: {
    top: 332,
    left: 122,
    width: 153,
    height: 158,
    position: "absolute",
  },
  alert: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Alert1;
