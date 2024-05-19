import React, { useState, useCallback } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  TextInput,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame5 from "../components/Frame5";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const EmergencyContact = () => {
  const navigation = useNavigation();
  const [sUBMITTextVisible, setSUBMITTextVisible] = useState(false);

  const openSUBMITText = useCallback(() => {
    setSUBMITTextVisible(true);
  }, []);

  const closeSUBMITText = useCallback(() => {
    setSUBMITTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.emergencycontact}>
        <Pressable
          style={[styles.emergencycontactInner, styles.groupChildLayout]}
          onPress={() => navigation.navigate("LogIn")}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
        </Pressable>
        <Image
          style={styles.reqalert1Icon}
          contentFit="cover"
          source={require("../assets/reqalert-1.png")}
        />
        <Text style={styles.name}>Name</Text>
        <Text style={[styles.relationship, styles.homeAddressTypo]}>
          Relationship
        </Text>
        <Text style={[styles.homeAddress, styles.homeAddressTypo]}>
          Home Address
        </Text>
        <Text style={[styles.mobileNumber, styles.mobileNumberTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.emailAddress, styles.mobileNumberTypo]}>
          Email Address
        </Text>
        <TextInput style={styles.emergencycontactChild} />
        <TextInput
          style={[styles.emergencycontactItem, styles.emergencycontactLayout]}
        />
        <TextInput
          style={[styles.rectangleTextinput, styles.rectangleTextinputLayout]}
        />
        <TextInput
          style={[
            styles.emergencycontactChild1,
            styles.rectangleTextinputLayout,
          ]}
        />
        <TextInput
          style={[styles.emergencycontactChild2, styles.emergencycontactLayout]}
        />
        <Pressable style={styles.submit} onPress={openSUBMITText}>
          <Text style={[styles.submit1, styles.submit1Typo]}>SUBMIT</Text>
        </Pressable>
        <Text style={[styles.createAnAccount, styles.submit1Typo]}>
          Create an account
        </Text>
        <Text style={[styles.emergencyContact, styles.emergencyContactTypo]}>
          eMERGENCY CONTACT
        </Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
        <Text style={[styles.maricelRamos, styles.textTypo]}>
          Maricel Ramos
        </Text>
        <Text style={[styles.mother, styles.motherFlexBox]}>Mother</Text>
        <Text style={[styles.blacktownNsw, styles.textTypo]}>
          Blacktown, NSW
        </Text>
        <Text style={[styles.text, styles.textTypo]}>0450089613</Text>
        <Text
          style={[styles.ramosmaricel1611gmailcom, styles.emergencyContactTypo]}
        >
          ramos.maricel1611@gmail.com
        </Text>
      </View>

      <Modal animationType="fade" transparent visible={sUBMITTextVisible}>
        <View style={styles.sUBMITTextOverlay}>
          <Pressable style={styles.sUBMITTextBg} onPress={closeSUBMITText} />
          <Frame5 onClose={closeSUBMITText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 36,
    width: 141,
    position: "absolute",
  },
  homeAddressTypo: {
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
  emergencycontactLayout: {
    left: 55,
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  rectangleTextinputLayout: {
    left: 54,
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  submit1Typo: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  emergencyContactTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  motherFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMaroon,
  },
  emergencycontactInner: {
    top: 733,
    left: 131,
  },
  reqalert1Icon: {
    top: 110,
    left: 79,
    width: 239,
    height: 68,
    position: "absolute",
  },
  name: {
    top: 393,
    left: 171,
    width: 49,
    height: 22,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  relationship: {
    top: 455,
    left: 143,
    width: 96,
  },
  homeAddress: {
    top: 513,
    width: 115,
    left: 145,
  },
  mobileNumber: {
    top: 573,
    left: 142,
  },
  emailAddress: {
    top: 644,
    left: 145,
  },
  emergencycontactChild: {
    top: 476,
    left: 56,
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  emergencycontactItem: {
    top: 534,
  },
  rectangleTextinput: {
    top: 599,
  },
  emergencycontactChild1: {
    top: 668,
  },
  emergencycontactChild2: {
    top: 416,
  },
  sUBMITTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  sUBMITTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  submit1: {
    color: Color.colorWhite,
    textAlign: "center",
    width: 199,
    height: 31,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  submit: {
    left: 103,
    top: 738,
    position: "absolute",
  },
  createAnAccount: {
    top: 303,
    left: 71,
    fontFamily: FontFamily.juliusSansOneRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  emergencyContact: {
    top: 350,
    left: 102,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  vectorIcon: {
    top: 199,
    left: -3,
    width: 388,
    height: 89,
    position: "absolute",
  },
  maricelRamos: {
    top: 415,
    left: 128,
    fontFamily: FontFamily.k2DRegular,
  },
  mother: {
    top: 482,
    left: 158,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
  },
  blacktownNsw: {
    top: 537,
    left: 121,
    fontFamily: FontFamily.interRegular,
  },
  text: {
    top: 603,
    left: 134,
    fontFamily: FontFamily.interRegular,
  },
  ramosmaricel1611gmailcom: {
    top: 673,
    left: 76,
    fontFamily: FontFamily.interRegular,
  },
  emergencycontact: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default EmergencyContact;
