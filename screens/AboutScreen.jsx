import React, { useEffect, useState } from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "../theme/style";

const AboutScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.about}>
       <View style={styles.container} >
       <Text>About</Text>
       </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;
