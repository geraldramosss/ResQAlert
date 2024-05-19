import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Report = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.report}>
      <Pressable
        style={[styles.reportChild, styles.reportChildLayout]}
        onPress={() => navigation.navigate("InputReport")}
      />
      <Pressable
        style={[styles.reportItem, styles.reportChildLayout]}
        onPress={() => navigation.navigate("InputReport")}
      />
      <Pressable
        style={[styles.reportInner, styles.reportChildLayout]}
        onPress={() => navigation.navigate("InputReport")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.reportChildLayout]}
        onPress={() => navigation.navigate("InputReport")}
      />
      <Pressable
        style={[styles.reportChild1, styles.reportChildLayout]}
        onPress={() => navigation.navigate("InputReport")}
      />
      <Pressable
        style={[styles.reportChild2, styles.reportChildLayout]}
        onPress={() => navigation.navigate("InputReport")}
      />
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
      <Pressable
        style={styles.image6}
        onPress={() => navigation.navigate("Alert1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
      </Pressable>
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
      <Image
        style={[styles.image9Icon, styles.image10Position]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Pressable
        style={[styles.image10, styles.image10Position]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.reportChildLayout]}
        onPress={() => navigation.navigate("InputReport")}
      >
        <View style={[styles.groupChild, styles.reportChildLayout]} />
        <Text style={styles.theft}>Theft</Text>
      </Pressable>
      <Text style={[styles.physicalAssault, styles.robberyTypo]}>
        Physical Assault
      </Text>
      <Text style={[styles.robbery, styles.robberyTypo]}>Robbery</Text>
      <Text style={[styles.sexualAssault, styles.othersTypo]}>
        Sexual Assault
      </Text>
      <Text style={[styles.homicide, styles.homicideTypo]}>Homicide</Text>
      <Text style={[styles.fraudAndScams, styles.homicideTypo]}>
        Fraud and Scams
      </Text>
      <Text style={[styles.others, styles.othersTypo]}>Others</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reportChildLayout: {
    height: 36,
    width: 278,
    position: "absolute",
  },
  imageLayout: {
    width: 42,
    position: "absolute",
  },
  image10Position: {
    top: 733,
    position: "absolute",
  },
  robberyTypo: {
    width: 184,
    fontSize: FontSize.size_xl,
    left: 48,
    height: 27,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.juliusSansOneRegular,
    position: "absolute",
  },
  othersTypo: {
    fontSize: FontSize.size_xl,
    left: 48,
    height: 27,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.juliusSansOneRegular,
    position: "absolute",
  },
  homicideTypo: {
    left: 44,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.juliusSansOneRegular,
    position: "absolute",
  },
  reportChild: {
    top: 363,
    backgroundColor: Color.colorMaroon,
    width: 278,
    left: 37,
  },
  reportItem: {
    top: 418,
    backgroundColor: Color.colorMaroon,
    width: 278,
    left: 37,
  },
  reportInner: {
    top: 474,
    backgroundColor: Color.colorMaroon,
    width: 278,
    left: 37,
  },
  rectanglePressable: {
    top: 539,
    backgroundColor: Color.colorMaroon,
    width: 278,
    left: 37,
  },
  reportChild1: {
    top: 606,
    backgroundColor: Color.colorMaroon,
    width: 278,
    left: 37,
  },
  reportChild2: {
    top: 668,
    backgroundColor: Color.colorMaroon,
    width: 278,
    left: 37,
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
  image6: {
    left: 260,
    top: 747,
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
  image9Icon: {
    left: 159,
    width: 68,
    height: 66,
  },
  image10: {
    left: 318,
    width: 61,
    height: 61,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMaroon,
    width: 278,
  },
  theft: {
    top: 4,
    left: 11,
    fontSize: FontSize.size_5xl,
    width: 103,
    height: 27,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.juliusSansOneRegular,
    position: "absolute",
  },
  rectangleParent: {
    top: 316,
    left: 37,
  },
  physicalAssault: {
    top: 372,
  },
  robbery: {
    top: 424,
  },
  sexualAssault: {
    top: 483,
    width: 167,
  },
  homicide: {
    top: 547,
    width: 107,
    height: 27,
  },
  fraudAndScams: {
    top: 616,
    width: 199,
    height: 26,
  },
  others: {
    top: 677,
    width: 78,
  },
  report: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Report;
