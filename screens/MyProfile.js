import * as React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MyProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myprofile}>
      <Pressable
        style={[styles.myprofileChild, styles.myprofileLayout]}
        onPress={() => navigation.navigate("IncidentReported")}
      />
      <Image
        style={styles.reqalert1Icon}
        contentFit="cover"
        source={require("../assets/reqalert-1.png")}
      />
      <Pressable
        style={styles.image4}
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
        style={[styles.image8, styles.imagePosition1]}
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
      <Pressable
        style={[styles.myprofileItem, styles.myprofileLayout]}
        onPress={() => navigation.navigate("MyProfile1")}
      />
      <Text style={[styles.myProfile, styles.profileTypo]}>My Profile</Text>
      <Text style={[styles.myProfile1, styles.profileTypo]}>My Profile</Text>
      <Text style={[styles.incidentReported, styles.profileTypo]}>
        Incident Reported
      </Text>
      <Text style={styles.myProfile2}>My Profile</Text>
      <Pressable style={[styles.myprofileInner, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </Pressable>
      <Pressable
        style={styles.logOut}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.logOut1}>Log-OUT</Text>
      </Pressable>
      <Pressable
        style={[styles.image11, styles.imagePosition1]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  myprofileLayout: {
    height: 36,
    width: 278,
    backgroundColor: Color.colorMaroon,
    position: "absolute",
  },
  imagePosition1: {
    left: 32,
    position: "absolute",
  },
  imagePosition: {
    top: 733,
    position: "absolute",
  },
  profileTypo: {
    height: 27,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupChildLayout: {
    width: 141,
    height: 36,
    position: "absolute",
  },
  myprofileChild: {
    top: 436,
    left: 56,
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
  image4: {
    left: 88,
    top: 739,
    height: 55,
    width: 42,
    position: "absolute",
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
  myprofileItem: {
    top: 389,
    left: 55,
  },
  myProfile: {
    top: 393,
    left: 66,
    width: 153,
    height: 27,
  },
  myProfile1: {
    top: 706,
    left: 132,
    width: 153,
    height: 27,
  },
  incidentReported: {
    top: 442,
    left: 61,
    width: 245,
  },
  myProfile2: {
    top: 265,
    left: 131,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMaroon,
    width: 141,
  },
  myprofileInner: {
    top: 623,
    left: 124,
  },
  logOut1: {
    textAlign: "center",
    width: 199,
    height: 31,
    color: Color.colorWhite,
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
  },
  logOut: {
    left: 93,
    top: 628,
    position: "absolute",
  },
  image11: {
    top: 249,
    height: 42,
    width: 42,
  },
  myprofile: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default MyProfile;
