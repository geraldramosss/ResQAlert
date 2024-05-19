import * as React from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Message = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.message1}>
      <View style={[styles.message1Child, styles.message1Border]} />
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
        style={styles.image9}
        onPress={() => navigation.navigate("Report")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </Pressable>
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
      <Text style={[styles.messages, styles.messagesFlexBox]}>Messages</Text>
      <View style={[styles.message1Item, styles.message1Border]} />
      <Text style={[styles.michael, styles.meTypo]}>Michael</Text>
      <Text style={[styles.me, styles.meTypo]}>Me</Text>
      <View style={[styles.message1Inner, styles.rectangleBorder]} />
      <View style={[styles.rectangleView, styles.rectangleBorder]} />
      <TextInput
        style={[styles.rectangleTextinput, styles.typeAMessagePosition]}
      />
      <Text style={[styles.helloWhereIs, styles.messagesFlexBox]}>
        Hello, where is the specific location of the incident happened in
        Paramatta
      </Text>
      <Text style={[styles.helloTheIncidentContainer, styles.typeAMessageTypo]}>
        <Text style={styles.h}>H</Text>
        <Text style={styles.elloTheIncident}>
          ello, the incident happened  at level 2 in front of Uniqlo
        </Text>
      </Text>
      <Text style={[styles.typeAMessage, styles.typeAMessagePosition]}>
        Type a message
      </Text>
      <Image
        style={[styles.image53Icon, styles.image10Position]}
        contentFit="cover"
        source={require("../assets/image-53.png")}
      />
      <Pressable
        style={styles.image48}
        onPress={() => navigation.navigate("Messages")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-46.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  message1Border: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  image10Position: {
    left: 318,
    position: "absolute",
  },
  messagesFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  meTypo: {
    height: 14,
    width: 131,
    textAlign: "center",
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.juliusSansOneRegular,
    position: "absolute",
  },
  rectangleBorder: {
    opacity: 0.1,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  typeAMessagePosition: {
    top: 687,
    position: "absolute",
  },
  typeAMessageTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  message1Child: {
    left: 28,
    width: 222,
    height: 73,
    top: 499,
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
    width: 42,
    height: 55,
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
    left: 32,
    top: 750,
    width: 39,
    height: 38,
    position: "absolute",
  },
  image9: {
    left: 159,
    width: 68,
    height: 66,
    top: 733,
    position: "absolute",
  },
  image10: {
    width: 61,
    height: 61,
    top: 733,
  },
  messages: {
    top: 262,
    left: 136,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  message1Item: {
    top: 334,
    left: 25,
    width: 336,
    height: 386,
  },
  michael: {
    top: 485,
    left: -6,
  },
  me: {
    top: 562,
    left: 264,
  },
  message1Inner: {
    left: 29,
    height: 63,
    width: 213,
    opacity: 0.1,
    borderRadius: Border.br_mini,
    position: "absolute",
    top: 499,
  },
  rectangleView: {
    top: 580,
    left: 141,
    height: 63,
    width: 213,
    opacity: 0.1,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  rectangleTextinput: {
    left: 47,
    width: 292,
    height: 20,
    opacity: 0.1,
    borderRadius: Border.br_mini,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    top: 687,
  },
  helloWhereIs: {
    top: 503,
    left: 36,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.k2DRegular,
  },
  h: {
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  elloTheIncident: {
    fontFamily: FontFamily.k2DRegular,
  },
  helloTheIncidentContainer: {
    top: 595,
    left: 153,
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  typeAMessage: {
    left: 60,
    color: "#878787",
    fontFamily: FontFamily.k2DRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  image53Icon: {
    top: 689,
    width: 16,
    height: 15,
  },
  image48: {
    left: 18,
    top: 257,
    width: 36,
    height: 36,
    position: "absolute",
  },
  message1: {
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Message;
