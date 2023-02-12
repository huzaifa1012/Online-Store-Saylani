import {View, TouchableOpacity, Text, Image} from 'react-native';
import React from 'react';

const Screen3 = ({navigation}) => {
  return (
    <View style={{margin: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          marginBottom: 10,
        }}>
        <Image
          source={require('./media/usericon.png')}
          style={{height: 30, width: 30}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{color: '#61B846', fontSize: 20, fontWeight: 'bold'}}>
            SAYLANI WELFARE
          </Text>
          <Text style={{color: '#024F9D', fontSize: 13, fontWeight: 'bold'}}>
            DISCOUNT STORE
          </Text>
        </View>
        <Image
          source={require('./media/delete.png')}
          style={{height: 30, width: 30}}
        />
      </View>
      <View style={{height: 30, width: 30}}></View>
      {/*  */}
      <View
        style={{
          marginHorizontal: 4,
          marginHorizontal: 10,
          marginBottom: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
          }}>
          <Image
            source={require('./media/item.png')}
            style={{
              width: 135,
              height: 79,
            }}
          />
          <Text
            style={{
              paddingLeft: 10,
              width: '40%',
              color: 'black',
            }}>
            ITEM NAME
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',

            width: 70,
            // borderWidth: 2,
          }}>
          <Text>$23423</Text>
        </View>
      </View>

      {/*  */}
      <View
        style={{
          marginHorizontal: 4,
          marginHorizontal: 10,
          marginBottom: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
          }}>
          <Image
            source={require('./media/item3.png')}
            style={{
              width: 135,
              height: 79,
            }}
          />
          <Text
            style={{
              paddingLeft: 10,
              width: '40%',
              color: 'black',
            }}>
            ITEM NAME
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',

            width: 70,
            // borderWidth: 2,
          }}>
          <Text>$23423</Text>
        </View>
      </View>

      {/*  */}
      <View
        style={{
          marginHorizontal: 4,
          marginHorizontal: 10,
          marginBottom: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
          }}>
          <Image
            source={require('./media/item2.png')}
            style={{
              width: 135,
              height: 79,
            }}
          />
          <Text
            style={{
              paddingLeft: 10,
              width: '40%',
              color: 'black',
            }}>
            ITEM NAME
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',

            width: 70,
            // borderWidth: 2,
          }}>
          <Text>$23423</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderWidth: 1,
          opacity: 0.1,
          marginHorizontal: 20,
        }}
      />

      <View style={{alignItems: 'center', marginTop: 200}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 250,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainUserScreen')}
            style={{alignItems: 'center'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./media/home.png')}
            />
            <Text style={{marginTop: 10, color: '#61B846'}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => navigation.navigate('screen3')}
            style={{alignItems: 'center'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./media/carticon.png')}
            />
            <Text style={{marginTop: 10}}>Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Setting')}
            style={{alignItems: 'center'}}>
            <Image
              style={{width: 20, height: 20}}
              source={require('./media/usericon.png')}
            />

            <Text style={{marginTop: 10}}>Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Screen3;
