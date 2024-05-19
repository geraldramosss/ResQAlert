import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Messages = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.messages}>
      <Image
        style={styles.reqalert1Icon}
        contentFit="cover"
        source={require("../assets/reqalert-1.png")}
      />
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
      <Text style={styles.messages1}>Messages</Text>
      <Pressable
        style={styles.messagesChild}
        onPress={() => navigation.navigate("Message")}
      />
      <Text style={[styles.michael, styles.michaelPosition]}>Michael</Text>
      <Text style={[styles.helloWhereIs, styles.michaelPosition]}>
        Hello, where is the specific location of the incident?
      </Text>
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
  michaelPosition: {
    left: 39,
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
  },
  image10: {
    left: 318,
    width: 61,
    height: 61,
  },
  messages1: {
    top: 262,
    left: 136,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  messagesChild: {
    top: 334,
    left: 25,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 336,
    height: 112,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  michael: {
    top: 344,
    textAlign: "center",
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_5xl,
    left: 39,
  },
  helloWhereIs: {
    top: 373,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.k2DRegular,
    width: 424,
    height: 73,
    textAlign: "left",
  },
  image1: {
    left: 33,
    top: 251,
    height: 42,
  },
  messages: {
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Messages;
