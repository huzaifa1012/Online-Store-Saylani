import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const MainUserScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{paddingHorizontal: 0, width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              paddingBottom: 0,
            }}>
            <View>
              <Text
                style={{color: '#61B846', fontSize: 20, fontWeight: 'bold'}}>
                SAYLANI WELFARE
              </Text>
              <Text
                style={{color: '#024F9D', fontSize: 13, fontWeight: 'bold'}}>
                DISCOUNT STORE
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ShoppingCart')}>
              <Image
                source={require('./media/carticon.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30, padding: 10}}>
            <Image
              style={{width: '100%', borderRadius: 10}}
              source={require('./media/GroceryBanner.png')}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                width: '95%',
                marginTop: 10,
                borderWidth: 1,
                borderColor: 'black',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 20,
                marginHorizontal: 10,
              }}>
              <Image
                source={require('./media/Search.png')}
                style={{marginLeft: 10, marginRight: 20}}
              />
              <TextInput
                placeholder="Search by product name"
                style={{width: 230, height: 40}}
              />
            </View>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={{paddingHorizontal: 15, fontWeight: 'bold'}}>
              Shop by Categery
            </Text>
            <ScrollView
              horizontal
              style={{marginTop: 10, flexDirection: 'row', paddingBottom: 10}}>
              <Image
                source={require('./media/grocery.png')}
                style={{marginLeft: 10, marginRight: 20}}
              />
              <Image
                source={require('./media/fruit.png')}
                style={{marginLeft: 10, marginRight: 20}}
              />
              <Image
                source={require('./media/masalah.png')}
                style={{marginLeft: 10, marginRight: 20}}
              />
              <Image
                source={require('./media/grocery.png')}
                style={{marginLeft: 10, marginRight: 20}}
              />
              <Image
                source={require('./media/grocery.png')}
                style={{marginLeft: 10, marginRight: 20}}
              />
              <Image
                source={require('./media/fruit.png')}
                style={{marginLeft: 10, marginRight: 20}}
              />
            </ScrollView>
          </View>

          <ScrollView style={{paddingHorizontal: 10, width: '100%'}}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('./media/mirch.png')}
                style={{width: 90, height: 70}}
              />
              <View style={{width: 170}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  Chilli Powder
                </Text>
                <Text style={{fontSize: 12}}>
                  This is product description This is abc product description
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                  Rs.800 - per Kg
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61B846',
                    width: 50,
                    height: 35,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./media/+.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('./media/fish.png')}
                style={{width: 90, height: 70}}
              />
              <View style={{width: 170}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Fish</Text>
                <Text style={{fontSize: 12}}>
                  This is product description This is abc product description
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                  Rs.800 - per Kg
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61B846',
                    width: 50,
                    height: 35,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./media/+.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('./media/meat.png')}
                style={{width: 90, height: 70}}
              />
              <View style={{width: 170}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Meat</Text>
                <Text style={{fontSize: 12}}>
                  This is product description This is abc product description
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                  Rs.800 - per Kg
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61B846',
                    width: 50,
                    height: 35,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./media/+.png')} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={require('./media/item2.png')}
                style={{width: 90, height: 70}}
              />
              <View style={{width: 170}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>Fruits</Text>
                <Text style={{fontSize: 12}}>
                  This is product description This is abc product description
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                  Rs.800 - per Kg
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61B846',
                    width: 50,
                    height: 35,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./media/+.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          <View
            style={{
              height: 100,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 60,
            }}>
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
                style={{width:20,height:20}}
                source={require("./media/home.png")}
                />
                <Text style={{marginTop: 10, color: '#61B846'}}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('screen3')}
                style={{alignItems: 'center'}}>
                <Image
                style={{width:20,height:20}}
                source={require("./media/carticon.png")}
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
      </View>
    </ScrollView>
  );
};

export default MainUserScreen;
