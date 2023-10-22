import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
const DATA = [
  {
    img: 'xe_blue',
    name: 'Pinarello',
    price: '$1800'
  },
  {
    img: 'xe_red',
    name: 'Pina Mountai',
    price: '$1700'
  },
  {
    img: 'xe_co_tron_tim',
    name: 'Pina Bike',
    price: '$1500'
  },
  {
    img: 'xe_co_tron_red',
    name: 'Pinarello',
    price: '$1900'
  },
  {
    img: 'xe_co_tron_tim',
    name: 'Pina Bike',
    price: '$2700'
  },
  {
    img: 'xe_co_tron_red',
    name: 'Pinarello',
    price: '$1350'
  },

];



// const renderItem = ({ item }) => (

//   <View style={styles.item}>
//     <TouchableOpacity 
//     onPress={()=>{
//       [setcurentImg(item.img),setcurentName(item.name)]
//       navigation.navigate({
//         name: 'Screen3', params: {curentImg,curentName },
//         merge: true,
//     })
//     }}
//     >
//       <Image source={require('../assets/heart.png')} style={{ width: 32, height: 32 }}>
//       </Image>
//       <View style={styles.img}>

//         <Image source={require('../assets/' + item.img + '.png')} style={{ width: null, height: 100 }} resizeMode='contain'>
//         </Image>
//       </View>
//       <View style={styles.text}>
//         <Text>{item.name}</Text>
//         <Text>{item.price}</Text>
//       </View>
//     </TouchableOpacity>
//   </View>


// );

export default function Screen2({ navigation }) {
  const [curentImg, setcurentImg] = useState('xe_blue');
  const [curentName, setcurentName] = useState('Pina Mountain');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>The world's Best Bike</Text>
        <View style={styles.buttons}>
          <Pressable style={[styles.button, styles.buttonClick]}
          >All</Pressable>
          <Pressable style={styles.button}
          >Roadbike</Pressable>
          <Pressable style={styles.button}
          >Mountain</Pressable>
        </View>
      </View>
      <View style={styles.body}>
        <SafeAreaView >
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity 
                onPress={()=>{
                  [setcurentImg(item.img),setcurentName(item.name)]
                  navigation.navigate({
                    name: 'Screen3', params: {curentImg:item.img,curentName:item.name},
                    merge: true,
                })                }}                >
                  <Image source={require('../assets/heart.png')} style={{ width: 32, height: 32 }}>
                  </Image>
                  <View style={styles.img}>
            
                    <Image source={require('../assets/' + item.img + '.png')} style={{ width: null, height: 100 }} resizeMode='contain'>
                    </Image>
                  </View>
                  <View style={styles.text}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            
            
            )}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',

  },
  header: {
    width: '100%',
    height: '15%',
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row'
  },
  button: {
    height: 30,
    width: '25%',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    paddingTop: '1.5%',
    color: '#bbb',
    fontSize: 16,
    fontWeight: 400
  },
  buttonClick: {
    color: 'red',
  },
  body: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',

  },
  item: {
    width: '100%',
    height: '90%',
    borderRadius: 10,
    backgroundColor: 'rgba(247, 186, 131, 0.15)',
    flex: 1,
    justifyContent: 'space-between',
    margin: 10,

  },
  img: {
    width: '90%',
    height: '60%',


  },
  text: {
    alignItems: 'center',
    width: '90%',
    height: '30%'
  }



});
