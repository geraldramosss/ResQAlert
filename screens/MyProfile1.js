import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const MyProfile1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.myprofile1}>
      <Image
        style={styles.reqalert1Icon}
        contentFit="cover"
        source={require("../assets/reqalert-1.png")}
      />
      <Text style={[styles.yourName, styles.yourNameTypo]}>Your Name</Text>
      <Text style={[styles.username, styles.yourNameTypo]}>Username</Text>
      <Text style={[styles.homeAddress, styles.myProfileFlexBox]}>
        Home Address
      </Text>
      <Text style={[styles.mobileNumber, styles.mobileNumberTypo]}>
        Mobile Number
      </Text>
      <Text style={[styles.emailAddress, styles.mobileNumberTypo]}>
        Email Address
      </Text>
      <View style={[styles.myprofile1Child, styles.myprofile1ChildLayout]} />
      <Text style={[styles.markGeraldRamos, styles.geraldramosTypo]}>
        Mark Gerald Ramos
      </Text>
      <View style={[styles.myprofile1Item, styles.myprofile1ChildLayout]} />
      <Text style={[styles.blacktownNsw, styles.textTypo]}>Blacktown, NSW</Text>
      <View style={[styles.myprofile1Inner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.myprofile1Child1, styles.geraldramosPosition]} />
      <Text style={[styles.myProfile, styles.myProfileFlexBox]}>
        My Profile
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-5.png")}
      />
      <Text style={[styles.geraldramos, styles.geraldramosPosition]}>
        geraldramos
      </Text>
      <Text style={[styles.text, styles.textTypo]}>0451234678</Text>
      <Pressable
        style={styles.image46}
        onPress={() => navigation.navigate("MyProfile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-46.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image48}
        onPress={() => navigation.navigate("Live")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image49}
        onPress={() => navigation.navigate("Alert1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image50}
        onPress={() => navigation.navigate("Map1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-8.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image51, styles.imagePosition]}
        onPress={() => navigation.navigate("Report")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image52, styles.imagePosition]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
      </Pressable>
      <Text style={[styles.ramosmarkgerald13gmailcom, styles.myProfileFlexBox]}>
        ramos.markgerald13@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  yourNameTypo: {
    height: 22,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  myProfileFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  mobileNumberTypo: {
    width: 118,
    height: 22,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  myprofile1ChildLayout: {
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  geraldramosTypo: {
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleViewLayout: {
    left: 48,
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  geraldramosPosition: {
    top: 465,
    position: "absolute",
  },
  imagePosition: {
    top: 745,
    position: "absolute",
  },
  reqalert1Icon: {
    top: 110,
    left: 79,
    width: 239,
    height: 68,
    position: "absolute",
  },
  yourName: {
    top: 383,
    left: 143,
    width: 104,
  },
  username: {
    top: 442,
    left: 146,
    width: 145,
  },
  homeAddress: {
    top: 512,
    width: 115,
    height: 21,
    left: 139,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  mobileNumber: {
    top: 572,
    left: 136,
  },
  emailAddress: {
    top: 643,
    left: 139,
  },
  myprofile1Child: {
    left: 47,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 409,
    position: "absolute",
  },
  markGeraldRamos: {
    left: 95,
    top: 409,
    position: "absolute",
  },
  myprofile1Item: {
    top: 533,
    left: 49,
    position: "absolute",
  },
  blacktownNsw: {
    top: 536,
    left: 105,
  },
  myprofile1Inner: {
    top: 598,
  },
  rectangleView: {
    top: 667,
  },
  myprofile1Child1: {
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 47,
  },
  myProfile: {
    top: 336,
    left: 119,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  vectorIcon: {
    top: 199,
    left: -3,
    width: 388,
    height: 89,
    position: "absolute",
  },
  geraldramos: {
    left: 132,
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  text: {
    top: 601,
    left: 120,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image46: {
    left: 36,
    top: 298,
    width: 36,
    height: 36,
    position: "absolute",
  },
  image48: {
    left: 81,
    top: 751,
    width: 42,
    height: 55,
    position: "absolute",
  },
  image49: {
    left: 253,
    top: 759,
    width: 33,
    height: 37,
    position: "absolute",
  },
  image50: {
    left: 25,
    top: 762,
    width: 39,
    height: 38,
    position: "absolute",
  },
  image51: {
    left: 152,
    width: 68,
    height: 66,
  },
  image52: {
    left: 311,
    width: 61,
    height: 61,
  },
  ramosmarkgerald13gmailcom: {
    top: 672,
    left: 74,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  myprofile1: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default MyProfile1;
