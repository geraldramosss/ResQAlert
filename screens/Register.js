import * as React from "react";
import { Pressable, StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <Pressable
        style={[styles.registerInner, styles.groupChildLayout]}
        onPress={() => navigation.navigate("EmergencyContact")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
      </Pressable>
      <Image
        style={styles.reqalert1Icon}
        contentFit="cover"
        source={require("../assets/reqalert-1.png")}
      />
      <Text style={[styles.yourName, styles.yourNameLayout]}>Your Name</Text>
      <Text style={[styles.username, styles.textPosition]}>Username</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.homeAddress, styles.passwordTypo]}>
        Home Address
      </Text>
      <Text style={[styles.mobileNumber, styles.mobileNumberTypo]}>
        Mobile Number
      </Text>
      <Text style={[styles.emailAddress, styles.mobileNumberTypo]}>
        Email Address
      </Text>
      <TextInput style={[styles.registerChild, styles.registerChildLayout1]} />
      <TextInput style={[styles.registerItem, styles.registerChildLayout1]} />
      <TextInput
        style={[styles.rectangleTextinput, styles.registerChildLayout1]}
      />
      <TextInput style={[styles.registerChild1, styles.registerChildLayout]} />
      <TextInput style={[styles.registerChild2, styles.registerChildLayout]} />
      <TextInput style={[styles.registerChild3, styles.registerChildLayout1]} />
      <Text style={[styles.next, styles.nextTypo]}>NEXT</Text>
      <Text style={[styles.createAnAccount, styles.nextTypo]}>
        Create an account
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-5.png")}
      />
      <Text style={[styles.markGeraldRamos, styles.geraldramosTypo]}>
        Mark Gerald Ramos
      </Text>
      <Text style={[styles.geraldramos, styles.geraldramosTypo]}>
        geraldramos
      </Text>
      <Text style={[styles.text, styles.textPosition]}>********</Text>
      <Text style={[styles.blacktownNsw, styles.text1Typo]}>
        Blacktown, NSW
      </Text>
      <Text style={[styles.text1, styles.text1Typo]}>0451234678</Text>
      <Text style={[styles.ramosmarkgerald13gmailcom, styles.yourNameFlexBox]}>
        ramos.markgerald13@gmail.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 36,
    width: 141,
    position: "absolute",
  },
  yourNameLayout: {
    height: 22,
    fontSize: FontSize.size_sm,
  },
  textPosition: {
    left: 154,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  passwordTypo: {
    height: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
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
  registerChildLayout1: {
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  registerChildLayout: {
    left: 54,
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  nextTypo: {
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  geraldramosTypo: {
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  yourNameFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMaroon,
  },
  registerInner: {
    top: 736,
    left: 128,
  },
  reqalert1Icon: {
    top: 110,
    left: 79,
    width: 239,
    height: 68,
    position: "absolute",
  },
  yourName: {
    top: 346,
    left: 151,
    width: 104,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  username: {
    top: 405,
    width: 145,
    height: 22,
    fontSize: FontSize.size_sm,
  },
  password: {
    top: 467,
    left: 158,
    width: 79,
  },
  homeAddress: {
    top: 525,
    width: 115,
    left: 145,
  },
  mobileNumber: {
    top: 585,
    left: 142,
  },
  emailAddress: {
    top: 656,
    left: 145,
  },
  registerChild: {
    left: 55,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 372,
  },
  registerItem: {
    top: 488,
    left: 56,
  },
  rectangleTextinput: {
    top: 546,
    left: 55,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  registerChild1: {
    top: 611,
  },
  registerChild2: {
    top: 680,
  },
  registerChild3: {
    top: 428,
    left: 55,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  next: {
    top: 741,
    left: 100,
    color: Color.colorWhite,
    textAlign: "center",
    width: 199,
    height: 31,
  },
  createAnAccount: {
    top: 303,
    left: 71,
    textAlign: "left",
    color: Color.colorBlack,
  },
  vectorIcon: {
    top: 199,
    left: -3,
    width: 388,
    height: 89,
    position: "absolute",
  },
  markGeraldRamos: {
    left: 103,
    top: 372,
  },
  geraldramos: {
    top: 427,
    left: 128,
  },
  text: {
    top: 498,
    fontSize: FontSize.size_mini,
  },
  blacktownNsw: {
    top: 549,
    left: 121,
  },
  text1: {
    top: 615,
    left: 134,
  },
  ramosmarkgerald13gmailcom: {
    top: 685,
    left: 76,
    fontSize: FontSize.size_base,
    textDecoration: "underline",
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  register: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Register;
