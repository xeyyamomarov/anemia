import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../theme/style";
import { useNavigation } from "@react-navigation/native";

export const HomeView = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.backIcon}
              source={require("../../assets/back-arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.homeMenu}>
        <Text style={styles.homeText}>Check for anemia</Text>
      </View>
      <View style={styles.checkupContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.checkupBtn}>Checkup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
