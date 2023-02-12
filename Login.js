// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Login() {
//   return (
//     <View>
//       <Text>Login</Text>
//     </View>
//   )
// }

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic goes here
    navigation.navigate('MainUserScreen')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}></TextInput>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop:100,flexDirection:"row",justifyContent:'space-around',width:'100%'}}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={{marginTop: 0}}>Register Now</Text>
        </TouchableOpacity>
      </View>
      
      {/* Ruff */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('AddItem')}>
          <Text style={{marginTop: 0}}>Signup As Admin</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};


{/* <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
<Text style={{marginTop: 100}}>Setting</Text>
</TouchableOpacity> */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#61B846',
    fontSize: 30,
    fontWeight: 800,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 2,
    padding: 10,
    // borderStyle:,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#61B846',
    padding: 10,
    borderRadius: 50,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 700,
    paddingHorizontal: 4,
    paddingVertical: 4,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
