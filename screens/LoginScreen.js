import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/style';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // if (email.trim() === 'a' && password.trim() === 'xeyyam123') {
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
    // } else {
    //   alert('No route');
    // }
  };
  return (
    <View style={styles.login}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={require("../assets/back-arrow.png")}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer} >
            <View style={styles.loginImg} >
            <Image
            style={styles.anemiaImg}
            source={require("../assets/login-anemia.jpg")}
          />
            </View>
            <View style={styles.form} >
            <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Enter email"
          />
           <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
          />
           <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
            </View>
        </View>
        <View style={styles.loginBottom} >
            <Text style={styles.accountText} >
              Don't have an accout?
            </Text>
          
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.lText}  >Sign up</Text>
          </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default LoginScreen;
