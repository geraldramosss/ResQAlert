import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Map1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.map}>
      <Pressable
        style={[styles.image4, styles.image4Position]}
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
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-8.png")}
      />
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
      <Image
        style={[styles.reqalert2Icon, styles.image4Position]}
        contentFit="cover"
        source={require("../assets/reqalert-2.png")}
      />
      <Image
        style={styles.e07a3f0840cc946c20dfa39a29Icon}
        contentFit="cover"
        source={require("../assets/4374e07a3f0840cc946c20dfa39a29b6-1.png")}
      />
      <Image
        style={[styles.image11Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={[styles.image12Icon, styles.image11Position]}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Pressable
        style={[styles.image11, styles.image11Position]}
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
  image4Position: {
    left: 88,
    position: "absolute",
  },
  imagePosition: {
    top: 733,
    position: "absolute",
  },
  iconLayout: {
    width: 48,
    height: 37,
  },
  image11Position: {
    left: 28,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image4: {
    top: 739,
    height: 55,
    width: 42,
  },
  image6: {
    left: 260,
    top: 747,
    width: 33,
    height: 37,
    position: "absolute",
  },
  image8Icon: {
    top: 750,
    left: 32,
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
  reqalert2Icon: {
    top: 64,
    width: 197,
    height: 44,
  },
  e07a3f0840cc946c20dfa39a29Icon: {
    top: 201,
    left: 0,
    borderTopLeftRadius: Border.br_26xl,
    borderTopRightRadius: Border.br_26xl,
    width: 390,
    height: 508,
    position: "absolute",
  },
  image11Icon: {
    top: 366,
    left: 245,
    position: "absolute",
  },
  image12Icon: {
    top: 265,
    width: 48,
    height: 37,
  },
  image11: {
    top: 137,
    height: 42,
    width: 42,
  },
  map: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Map1;
