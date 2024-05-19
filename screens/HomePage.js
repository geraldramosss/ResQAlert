import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Frame from "../components/Frame";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomePage = () => {
  const [ellipseImage1Visible, setEllipseImage1Visible] = useState(false);
  const navigation = useNavigation();

  const openEllipseImage1 = useCallback(() => {
    setEllipseImage1Visible(true);
  }, []);

  const closeEllipseImage1 = useCallback(() => {
    setEllipseImage1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.homepage}>
        <Image
          style={styles.reqalert1Icon}
          contentFit="cover"
          source={require("../assets/reqalert-1.png")}
        />
        <Image
          style={[styles.image1Icon, styles.image4Layout]}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
        <Pressable
          style={[styles.image2, styles.imageLayout]}
          onPress={() => navigation.navigate("Messages")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
        </Pressable>
        <Pressable style={[styles.ellipseParent, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Pressable style={styles.wrapper} onPress={openEllipseImage1}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/ellipse-2.png")}
            />
          </Pressable>
          <Text style={styles.pressAndHoldFor}>
            Press and Holdfor Emergency
          </Text>
        </Pressable>
        <Pressable
          style={[styles.image4, styles.image4Layout]}
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
          style={[styles.image8, styles.imageLayout]}
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
      </View>

      <Modal animationType="fade" transparent visible={ellipseImage1Visible}>
        <View style={styles.ellipseImage1Overlay}>
          <Pressable
            style={styles.ellipseImage1Bg}
            onPress={closeEllipseImage1}
          />
          <Frame onClose={closeEllipseImage1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  image4Layout: {
    width: 42,
    position: "absolute",
  },
  imageLayout: {
    width: 39,
    position: "absolute",
  },
  groupChildLayout: {
    height: 234,
    width: 244,
    position: "absolute",
  },
  imagePosition: {
    top: 733,
    position: "absolute",
  },
  reqalert1Icon: {
    top: 110,
    left: 79,
    width: 239,
    height: 68,
    position: "absolute",
  },
  image1Icon: {
    top: 254,
    height: 42,
    left: 32,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image2: {
    left: 306,
    top: 257,
    height: 39,
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  ellipseImage1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipseImage1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  wrapper: {
    left: 14,
    top: 14,
    width: 216,
    height: 205,
    position: "absolute",
  },
  pressAndHoldFor: {
    top: 76,
    left: 35,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 174,
    height: 90,
    position: "absolute",
  },
  ellipseParent: {
    top: 360,
    left: 71,
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
    height: 38,
    left: 32,
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
  homepage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomePage;
