import * as React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Live = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.live}>
      <Image
        style={[styles.image4Icon, styles.image11Layout]}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
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
      <Image
        style={styles.reqalert2Icon}
        contentFit="cover"
        source={require("../assets/reqalert-2.png")}
      />
      <Pressable
        style={[styles.image11, styles.image11Layout]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.image17Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-17.png")}
      />
      <Image
        style={[styles.image18Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-18.png")}
      />
      <View style={styles.liveInner}>
        <View style={styles.image19Parent}>
          <Image
            style={styles.image19Icon}
            contentFit="cover"
            source={require("../assets/image-19.png")}
          />
          <Image
            style={styles.image20Icon}
            contentFit="cover"
            source={require("../assets/image-20.png")}
          />
          <Image
            style={styles.image22Icon}
            contentFit="cover"
            source={require("../assets/image-22.png")}
          />
          <Image
            style={styles.image21Icon}
            contentFit="cover"
            source={require("../assets/image-21.png")}
          />
          <Image
            style={styles.image23Icon}
            contentFit="cover"
            source={require("../assets/image-23.png")}
          />
          <Image
            style={styles.image24Icon}
            contentFit="cover"
            source={require("../assets/image-24.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.image25Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-25.png")}
      />
      <Image
        style={[styles.image26Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-25.png")}
      />
      <Image
        style={[styles.image27Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-25.png")}
      />
      <Text style={[styles.whereIsThat, styles.omgTypo]}>Where is that?</Text>
      <Text style={[styles.hopefullyNoOnes, styles.omgTypo]}>
        Hopefully no one’s hurt.
      </Text>
      <Text style={[styles.omg, styles.omgTypo]}>{`OMG!! `}</Text>
      <Image
        style={[styles.image28Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={[styles.image29Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={[styles.image30Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={[styles.image31Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={[styles.image32Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={[styles.image33Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={styles.image34Icon}
        contentFit="cover"
        source={require("../assets/image-34.png")}
      />
      <Image
        style={[styles.image35Icon, styles.iconLayout3]}
        contentFit="cover"
        source={require("../assets/image-35.png")}
      />
      <Image
        style={[styles.image36Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-36.png")}
      />
      <Image
        style={[styles.image37Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-36.png")}
      />
      <Image
        style={[styles.image38Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-36.png")}
      />
      <Image
        style={[styles.image39Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <Image
        style={[styles.image40Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <Image
        style={[styles.image41Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <Image
        style={[styles.image42Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <Image
        style={[styles.image43Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-39.png")}
      />
      <View style={[styles.liveChild, styles.liveLayout]} />
      <View style={[styles.liveItem, styles.liveLayout]} />
      <View style={[styles.lineView, styles.liveLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  image11Layout: {
    width: 42,
    position: "absolute",
  },
  imagePosition: {
    top: 733,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  iconLayout3: {
    height: 26,
    position: "absolute",
  },
  omgTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  iconLayout2: {
    height: 29,
    width: 29,
    position: "absolute",
  },
  iconLayout1: {
    width: 26,
    height: 26,
    position: "absolute",
  },
  iconLayout: {
    height: 36,
    width: 33,
    position: "absolute",
  },
  liveLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 716,
    width: 25,
    position: "absolute",
  },
  image4Icon: {
    top: 739,
    height: 55,
    left: 88,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image6: {
    left: 260,
    top: 747,
    height: 37,
    width: 33,
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
    width: 61,
    height: 61,
    left: 318,
  },
  reqalert2Icon: {
    top: 64,
    width: 197,
    height: 44,
    left: 88,
    position: "absolute",
  },
  image11: {
    left: 28,
    top: 137,
    height: 42,
  },
  image17Icon: {
    top: 187,
    borderRadius: Border.br_mini,
    width: 390,
    height: 538,
  },
  image18Icon: {
    top: 208,
    width: 73,
    height: 28,
  },
  image19Icon: {
    height: 42,
    width: 33,
  },
  image20Icon: {
    height: 33,
    marginLeft: 20,
    width: 33,
  },
  image22Icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  image21Icon: {
    width: 52,
    height: 43,
    marginLeft: 20,
  },
  image23Icon: {
    width: 56,
    height: 48,
    marginLeft: 20,
  },
  image24Icon: {
    width: 34,
    height: 34,
    marginLeft: 20,
  },
  image19Parent: {
    width: 349,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  liveInner: {
    top: 671,
    left: 242,
    width: 144,
    flexDirection: "row",
    position: "absolute",
  },
  image25Icon: {
    width: 25,
    left: 16,
    height: 26,
    top: 564,
  },
  image26Icon: {
    top: 602,
    width: 25,
    left: 16,
    height: 26,
  },
  image27Icon: {
    top: 640,
    width: 25,
    left: 16,
    height: 26,
  },
  whereIsThat: {
    top: 604,
    left: 49,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  hopefullyNoOnes: {
    top: 643,
    left: 49,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_base,
  },
  omg: {
    top: 567,
    left: 51,
  },
  image28Icon: {
    left: 303,
    top: 527,
  },
  image29Icon: {
    top: 490,
    left: 262,
  },
  image30Icon: {
    left: 255,
    top: 564,
  },
  image31Icon: {
    top: 587,
    left: 318,
  },
  image32Icon: {
    top: 619,
    left: 266,
  },
  image33Icon: {
    top: 623,
    left: 350,
  },
  image34Icon: {
    top: 526,
    left: 270,
    height: 23,
    width: 25,
    position: "absolute",
  },
  image35Icon: {
    top: 556,
    left: 336,
    width: 23,
  },
  image36Icon: {
    left: 282,
    top: 587,
  },
  image37Icon: {
    top: 600,
    left: 234,
  },
  image38Icon: {
    top: 628,
    left: 307,
  },
  image39Icon: {
    top: 483,
    left: 303,
  },
  image40Icon: {
    left: 227,
    top: 527,
  },
  image41Icon: {
    top: 586,
    left: 353,
  },
  image42Icon: {
    top: 631,
    left: 234,
  },
  image43Icon: {
    top: 513,
    left: 339,
  },
  liveChild: {
    left: 246,
  },
  liveItem: {
    left: 298,
  },
  lineView: {
    left: 349,
  },
  live: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default Live;
