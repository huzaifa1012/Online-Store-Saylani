import {
  Button,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  ScrollView
} from 'react-native';
import React from 'react';

export default function Setting({navigation}) {
  return (
    <ScrollView style={{margin: 10}}>
      <View
        style={{
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: 30,
        }}>
        <Text
          style={{
            color: '#024F9D',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: 25,
            lineHeight: 25,
            marginBottom: 10,
          }}>
          Settings
        </Text>
        <Image
          source={require('./media/usericon.png')}
          style={{height: 100, width: 100, marginBottom: 5}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{}}
            placeholder="Change Your Name"
            autoCapitalize="none"
          />
          <TouchableOpacity>
            <Image
              source={require('./media/done.png')}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/*  */}
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text style={{color: '#024F9D', fontSize: 22}}>Orders</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'normal'}}>
            Inzamam Malik
          </Text>
          <Text style={{color: '#024F9D', fontSize: 13, fontWeight: 'bold'}}>
            Just Now - Pending
          </Text>
          <Text
            style={{
              paddingTop: 20,
              color: 'gray',
              fontSize: 13,
              fontWeight: 'normal',
            }}>
            2X ITEM NAME
          </Text>
          <Text style={{color: 'gray', fontSize: 13, fontWeight: 'normal'}}>
            2X ITEM NAME
          </Text>
        </View>
        <View style={{height: 100}}>
          <Text style={{height: 50, width: 100}}>0331235234</Text>
          <Text
            style={{
              color: '#61B846',
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 25,
            }}>
            PKR 100.0
          </Text>
        </View>
      </View>

      <View style={{height: 18, width: 18}}></View>



      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'normal'}}>
            Inzamam Malik
          </Text>
          <Text style={{color: '#024F9D', fontSize: 13, fontWeight: 'bold'}}>
            Just Now - Pending
          </Text>
          <Text
            style={{
              paddingTop: 20,
              color: 'gray',
              fontSize: 13,
              fontWeight: 'normal',
            }}>
            2X ITEM NAME
          </Text>
          <Text style={{color: 'gray', fontSize: 13, fontWeight: 'normal'}}>
            2X ITEM NAME
          </Text>
        </View>
        <View style={{height: 100}}>
          <Text style={{height: 50, width: 100}}>0331235234</Text>
          <Text
            style={{
              color: '#61B846',
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 25,
            }}>
            PKR 100.0
          </Text>
        </View>
      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'normal'}}>
            Inzamam Malik
          </Text>
          <Text style={{color: '#024F9D', fontSize: 13, fontWeight: 'bold'}}>
            Just Now - Pending
          </Text>
          <Text
            style={{
              paddingTop: 20,
              color: 'gray',
              fontSize: 13,
              fontWeight: 'normal',
            }}>
            2X ITEM NAME
          </Text>
          <Text style={{color: 'gray', fontSize: 13, fontWeight: 'normal'}}>
            2X ITEM NAME
          </Text>
        </View>
        <View style={{height: 100}}>
          <Text style={{height: 50, width: 100}}>0331235234</Text>
          <Text
            style={{
              color: '#61B846',
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 25,
            }}>
            PKR 100.0
          </Text>
        </View>
      </View>


      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'normal'}}>
            Inzamam Malik
          </Text>
          <Text style={{color: '#024F9D', fontSize: 13, fontWeight: 'bold'}}>
            Just Now - Pending
          </Text>
          <Text
            style={{
              paddingTop: 20,
              color: 'gray',
              fontSize: 13,
              fontWeight: 'normal',
            }}>
            2X ITEM NAME
          </Text>
          <Text style={{color: 'gray', fontSize: 13, fontWeight: 'normal'}}>
            2X ITEM NAME
          </Text>
        </View>
        <View style={{height: 100}}>
          <Text style={{height: 50, width: 100}}>0331235234</Text>
          <Text
            style={{
              color: '#61B846',
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 25,
            }}>
            PKR 100.0
          </Text>
        </View>
      </View>


      <View
        style={{
          borderBottomColor: 'black',
          borderWidth: 1,
          opacity: 0.1,
          marginHorizontal: 20,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'normal'}}>
            Inzamam Malik
          </Text>
          <Text style={{color: '#024F9D', fontSize: 13, fontWeight: 'bold'}}>
            Just Now - Pending
          </Text>
          <Text
            style={{
              paddingTop: 20,
              color: 'gray',
              fontSize: 13,
              fontWeight: 'normal',
            }}>
            2X ITEM NAME
          </Text>
          <Text style={{color: 'gray', fontSize: 13, fontWeight: 'normal'}}>
            2X ITEM NAME
          </Text>
        </View>
        <View style={{height: 100}}>
          <Text style={{height: 50, width: 100}}>0331235234</Text>
          <Text
            style={{
              color: '#61B846',
              fontSize: 20,
              fontWeight: 'bold',
              paddingTop: 25,
            }}>
            PKR 100.0
          </Text>
        </View>
      </View>

      <View style={{height: 18, width: 18}}></View>

      <View
        style={{
          borderBottomColor: 'black',
          borderWidth: 1,
          opacity: 0.1,
          marginHorizontal: 20,
          marginBottom: 10,
        }}
      />
      <View></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View>
      
        </View>
      </View>

      <View style={{height: 18, width: 18}}>
        
      </View>

      <View style={{display:'flex',alignItems:'center',}}>  

      <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}

// onPress={ ()=>{navigation.navigate('AddItem')}}
        style={{ 
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            //   position: 'absolute',
            //   bottom: 17,
            //   right: 70,
            width:"100%",
            backgroundColor: '#61B846',
            padding: 10,
            borderRadius: 10,
        }}>
        <Text style={{fontSize: 22, padding: 5, color: 'white'}}>Logout</Text>
      </TouchableOpacity>
            </View>
    </ScrollView>
  );
}
