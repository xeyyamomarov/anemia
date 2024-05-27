import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/style';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.login}>
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 10,
                color: '#0065FC',
                fontSize: 20,
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.loginHeader}>Sign up</Text>
        </View>
        <View style={styles.form}>
        <Text>Fullname</Text>
          <TextInput style={styles.input} placeholder="Enter fullname" />
          <Text>Email</Text>
          <TextInput style={styles.input} placeholder="Enter email" />
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupRoute}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Login")} >
            <Text style={{color:"#0065FC",marginLeft:5}} >Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
