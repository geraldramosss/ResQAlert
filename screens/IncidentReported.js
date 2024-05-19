import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const IncidentReported = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.incidentreported}>
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
      <Text style={styles.incidentReported}>Incident Reported</Text>
      <Pressable
        style={styles.image47}
        onPress={() => navigation.navigate("MyProfile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-46.png")}
        />
      </Pressable>
      <View style={styles.incidentreportedChild} />
      <Text style={[styles.theft, styles.timeTypo]}>Theft</Text>
      <Text style={[styles.locationParramattaWestfield, styles.timeTypo]}>
        Location: Parramatta westfield
      </Text>
      <Text style={[styles.when19042024, styles.time1332Typo]}>
        When: 19/04/2024
      </Text>
      <Text style={[styles.time1332, styles.time1332Typo]}>Time: 13:32</Text>
      <View
        style={[styles.incidentreportedItem, styles.incidentreportedLayout]}
      />
      <Text style={[styles.physicalAssault, styles.timeTypo]}>
        Physical Assault
      </Text>
      <Text
        style={[
          styles.locationBlacktownStation,
          styles.othersCarAccidentPosition,
        ]}
      >
        Location: Blacktown Station
      </Text>
      <Text style={[styles.when15042024, styles.timeTypo]}>
        When: 15/04/2024
      </Text>
      <Text style={[styles.time2030, styles.timeTypo]}>Time: 20:30</Text>
      <View
        style={[styles.incidentreportedInner, styles.incidentreportedLayout]}
      />
      <Text
        style={[styles.othersCarAccident, styles.othersCarAccidentPosition]}
      >
        OTHERS: CAR ACCIDENT
      </Text>
      <Text style={[styles.locationRichmonRd, styles.timeTypo]}>
        Location: Richmon rd. blacktown
      </Text>
      <Text style={[styles.when10042024, styles.timeTypo]}>
        When: 10/04/2024
      </Text>
      <Text style={[styles.time1300, styles.timeTypo]}>Time: 13:00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    top: 733,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.juliusSansOneRegular,
    position: "absolute",
  },
  time1332Typo: {
    left: 38,
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.juliusSansOneRegular,
    position: "absolute",
  },
  incidentreportedLayout: {
    left: 27,
    height: 112,
    width: 336,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  othersCarAccidentPosition: {
    left: 33,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.juliusSansOneRegular,
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
  image4: {
    top: 739,
    width: 42,
    height: 55,
    left: 88,
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
  incidentReported: {
    top: 262,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
    left: 88,
    position: "absolute",
  },
  image47: {
    top: 257,
    width: 36,
    height: 36,
    left: 25,
    position: "absolute",
  },
  incidentreportedChild: {
    top: 334,
    height: 112,
    width: 336,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 25,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  theft: {
    top: 344,
    left: 36,
    textAlign: "center",
    fontSize: FontSize.size_5xl,
  },
  locationParramattaWestfield: {
    top: 373,
    fontSize: FontSize.size_base,
    left: 36,
    textAlign: "center",
  },
  when19042024: {
    top: 393,
  },
  time1332: {
    top: 413,
  },
  incidentreportedItem: {
    top: 463,
  },
  physicalAssault: {
    top: 471,
    fontSize: FontSize.size_5xl,
    left: 32,
  },
  locationBlacktownStation: {
    top: 504,
    fontSize: FontSize.size_base,
  },
  when15042024: {
    top: 524,
    fontSize: FontSize.size_base,
    left: 36,
    textAlign: "center",
  },
  time2030: {
    top: 542,
    fontSize: FontSize.size_base,
    left: 36,
    textAlign: "center",
  },
  incidentreportedInner: {
    top: 592,
  },
  othersCarAccident: {
    top: 601,
    fontSize: FontSize.size_5xl,
  },
  locationRichmonRd: {
    top: 631,
    fontSize: FontSize.size_base,
    left: 36,
    textAlign: "center",
  },
  when10042024: {
    top: 653,
    fontSize: FontSize.size_base,
    left: 36,
    textAlign: "center",
  },
  time1300: {
    top: 671,
    left: 39,
    fontSize: FontSize.size_base,
  },
  incidentreported: {
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default IncidentReported;
