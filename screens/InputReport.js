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
import Frame2 from "../components/Frame2";
import Frame1 from "../components/Frame1";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const InputReport = () => {
  const [groupButtonVisible, setGroupButtonVisible] = useState(false);
  const [attachPhotovideoForVisible, setAttachPhotovideoForVisible] =
    useState(false);
  const navigation = useNavigation();

  const openGroupButton = useCallback(() => {
    setGroupButtonVisible(true);
  }, []);

  const closeGroupButton = useCallback(() => {
    setGroupButtonVisible(false);
  }, []);

  const openAttachPhotovideoFor = useCallback(() => {
    setAttachPhotovideoForVisible(true);
  }, []);

  const closeAttachPhotovideoFor = useCallback(() => {
    setAttachPhotovideoForVisible(false);
  }, []);

  return (
    <>
      <View style={styles.inputreport}>
        <Pressable
          style={[styles.inputreportInner, styles.image46Layout]}
          onPress={openGroupButton}
        >
          <View style={[styles.groupChild, styles.image46Layout]} />
        </Pressable>
        <Image
          style={styles.reqalert1Icon}
          contentFit="cover"
          source={require("../assets/reqalert-1.png")}
        />
        <Text style={[styles.yourName, styles.yourNameTypo]}>Your Name</Text>
        <Text style={[styles.mobileNumber, styles.yourNameTypo]}>
          Mobile Number
        </Text>
        <Text style={[styles.homeAddress, styles.homeAddressTypo]}>
          Home Address
        </Text>
        <Text style={[styles.locationOfIncident, styles.homeAddressTypo]}>
          Location of Incident
        </Text>
        <Text style={[styles.timeOfIncident, styles.homeAddressPosition]}>
          Time of Incident
        </Text>
        <Text style={[styles.otherInformation, styles.yourNameTypo]}>
          Other information
        </Text>
        <Pressable
          style={styles.attachPhotovideoForContainer}
          onPress={openAttachPhotovideoFor}
        >
          <Text
            style={[styles.attachPhotovideoForEvidenc, styles.homeAddressTypo]}
          >
            Attach photo/video for evidence
          </Text>
        </Pressable>
        <TextInput
          style={[styles.inputreportChild, styles.inputreportChildLayout]}
        />
        <TextInput
          style={[styles.inputreportItem, styles.inputreportChildLayout]}
        />
        <TextInput
          style={[styles.rectangleTextinput, styles.inputreportChildLayout]}
        />
        <TextInput
          style={[styles.inputreportChild1, styles.inputreportChildLayout]}
        />
        <TextInput style={styles.inputreportChild2} />
        <TextInput
          style={[styles.inputreportChild3, styles.inputreportChildLayout]}
        />
        <Image
          style={styles.image16Icon}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
        <Text style={styles.submit}>SUBMIT</Text>
        <Pressable
          style={[styles.image46, styles.image46Layout]}
          onPress={() => navigation.navigate("Report")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-46.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={groupButtonVisible}>
        <View style={styles.groupButtonOverlay}>
          <Pressable style={styles.groupButtonBg} onPress={closeGroupButton} />
          <Frame2 onClose={closeGroupButton} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={attachPhotovideoForVisible}
      >
        <View style={styles.attachPhotovideoForOverlay}>
          <Pressable
            style={styles.attachPhotovideoForBg}
            onPress={closeAttachPhotovideoFor}
          />
          <Frame1 onClose={closeAttachPhotovideoFor} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  image46Layout: {
    height: 36,
    position: "absolute",
  },
  yourNameTypo: {
    height: 22,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  homeAddressTypo: {
    height: 21,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  homeAddressPosition: {
    left: 140,
    position: "absolute",
  },
  inputreportChildLayout: {
    height: 30,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupButtonBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorMaroon,
    width: 141,
    height: 36,
  },
  inputreportInner: {
    top: 745,
    left: 126,
    width: 141,
    height: 36,
  },
  reqalert1Icon: {
    top: 110,
    left: 79,
    width: 239,
    height: 68,
    position: "absolute",
  },
  yourName: {
    top: 278,
    left: 149,
    width: 104,
    position: "absolute",
  },
  mobileNumber: {
    top: 338,
    left: 139,
    width: 145,
    position: "absolute",
  },
  homeAddress: {
    top: 399,
    width: 139,
    left: 140,
    position: "absolute",
  },
  locationOfIncident: {
    top: 457,
    left: 128,
    width: 187,
    position: "absolute",
  },
  timeOfIncident: {
    top: 517,
    width: 153,
    height: 22,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  otherInformation: {
    top: 582,
    left: 137,
    width: 167,
    position: "absolute",
  },
  attachPhotovideoForOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  attachPhotovideoForBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  attachPhotovideoForEvidenc: {
    width: 304,
  },
  attachPhotovideoForContainer: {
    left: 110,
    top: 711,
    position: "absolute",
  },
  inputreportChild: {
    top: 304,
    left: 53,
    height: 30,
  },
  inputreportItem: {
    top: 420,
    left: 54,
  },
  rectangleTextinput: {
    top: 478,
    left: 53,
    height: 30,
  },
  inputreportChild1: {
    top: 543,
    left: 52,
  },
  inputreportChild2: {
    top: 604,
    height: 94,
    width: 293,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 53,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  inputreportChild3: {
    top: 360,
    left: 53,
    height: 30,
  },
  image16Icon: {
    top: 708,
    left: 74,
    width: 24,
    height: 27,
    position: "absolute",
  },
  submit: {
    top: 750,
    left: 98,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.juliusSansOneRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 199,
    height: 31,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image46: {
    left: 18,
    top: 256,
    width: 36,
  },
  inputreport: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default InputReport;
