import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Signup = ({navigation}) => {
  // let navigate = useNavigation()
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup =  () => {
     Alert.alert(name, 'Your Data Saved on Backend')
    


    navigation.navigate('MainUserScreen')
    // Alert.alert(name,
    //   phone,
    //   email,
    //   password)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCapitalize="none"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        autoCapitalize="none"
        value={phone}
        onChangeText={setPhone}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={{marginTop: 100}}>Already Have an Account</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

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

export default Signup;
