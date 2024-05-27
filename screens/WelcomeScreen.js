import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../theme/style";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.welcome}>
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeContext} >

      
        <View style={styles.anemiaHeaderContainer} >
          <Image
            style={styles.anemiaImg}
            source={require("../assets/anemia.jpg")}
          />
          <Text style={styles.anemiaText} >Anemiya</Text>
        </View>
        <View style={styles.signContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signUpBtn}>Sign up</Text>
          </TouchableOpacity>
          <View style={styles.bottomTextContainer} >
            <Text style={styles.accountText} >
              Do you have an account?
            </Text>
          
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.lText}  >Log in</Text>
          </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
