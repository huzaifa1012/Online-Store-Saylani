import {useState} from 'react';
import {View, TouchableOpacity, Image, Text, TextInput} from 'react-native';
// import Picker from 'react-native-picker-select';
import React from 'react';
const AddItem = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 80,
          borderWidth: 0,
          marginHorizontal: 10,
        }}>
        <View
          onPress={() => navigation.navigate('Home')}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: 140,
          }}>
          <Image
            source={require('./media/back.png')}
            style={{height: 30, width: 30, marginRight: 0, marginLeft: -10}}
          />
          <Image
            source={require('./media/usericon.png')}
            style={{height: 60, width: 60}}
          />
          <View style={{justifyContent: 'flex-start'}}>
            <Text style={{color: '#024F9D', fontWeight: '700', fontSize: 20}}>
              {' '}
              Muhammad
            </Text>
            <Text style={{color: '#61B846', fontWeight: '700', fontSize: 20}}>
              {' '}
              Huzaifa
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('./media/menu.png')}
            style={{height: 45, width: 45}}
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: 'left',
          fontSize: 23,
          color: '#024F9D',
          fontWeight: '900',
          margin: 20,
        }}>
        {' '}
        Add New Item
      </Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginBottom: 5,
            width: '90%',
            height: 200,
            borderRadius: 15,
            backgroundColor: '#D9D9D9',
          }}></View>
        <TextInput
          style={{
            width: '90%',
            height: 40,
            borderColor: '#D9D9D9',
            borderBottomWidth: 2,
            padding: 10,
            backgroundColor: '#D9D9D9',
            marginVertical: 7,
            borderRadius: 15,
          }}
          placeholder="Name"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            width: '90%',
            height: 40,
            borderColor: '#D9D9D9',
            borderBottomWidth: 2,
            padding: 10,
            backgroundColor: '#D9D9D9',
            marginVertical: 7,
            borderRadius: 15,
          }}
          placeholder="Category"
          autoCapitalize="none"
        />
        <TextInput
          style={{
            width: '90%',
            height: 150,
            borderColor: '#D9D9D9',
            borderBottomWidth: 2,
            padding: 10,
            backgroundColor: '#D9D9D9',
            marginVertical: 7,
            borderRadius: 15,
          }}
          placeholder="Describe This Item"
          autoCapitalize="none"
        />
        <View style={{display: 'flex', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              width: 325,
              backgroundColor: '#61B846',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 22, padding: 5, color: 'white'}}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddItem;
