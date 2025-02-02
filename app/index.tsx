import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStyles } from "@/constants/Styles";
import { useFonts } from "expo-font";
import { Image } from "expo-image";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue } from "react-native-responsive-fontsize";
import { useColorScheme } from "@/hooks/useColorScheme";

const SplashScreen = () => {
  const colorScheme = useColorScheme();

  const [hasNavigated, setHasNavigated] = useState(false);

  const [loaded] = useFonts({
    InterBlack: require("@/assets/fonts/Inter-Black.otf"),
    InterBold: require("@/assets/fonts/Inter-Bold.otf"),
    InterExtraBold: require("@/assets/fonts/Inter-ExtraBold.otf"),
    InterItalic: require("@/assets/fonts/Inter-Italic.otf"),
    InterMedium: require("@/assets/fonts/Inter-Medium.otf"),
    InterRegular: require("@/assets/fonts/Inter-Regular.otf"),
    InterSemiBold: require("@/assets/fonts/Inter-SemiBold.otf"),
  });

  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeoutId = setTimeout(() => {
        // setHasNavigated(true);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [loaded, hasNavigated]);

  return (
    <SafeAreaView style={GlobalStyles.screen}>
      <View
        style={
          colorScheme === "dark"
            ? styles.container_dark
            : styles.container_light
        }
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: wp(40), height: wp(40) }}
        />
        <Text
          style={
            colorScheme === "dark"
              ? styles.container_dark
              : styles?.container_light_text
          }
        >
          SpendWise
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container_light: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container_light_text: {
    fontFamily: "InterBold",
    fontSize: RFValue(16),
    color: "#1d1d1d",
  },
  container_dark: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F1B26",
  },
  container_dark_text: {
    fontFamily: "InterBold",
    fontSize: RFValue(16),
    color: "#1d1d1d",
  },
});
