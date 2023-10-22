import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Screen2 from './Screen2';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textDetail}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.cover}>
          <Image source={require('../assets/xe_blue.png')} style={{ width: null, height: '70%', marginTop:'10%' }} resizeMode='contain'>
          </Image>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.name}>POWER BIKE SHOP</Text>
        <Pressable style={styles.button}
        onPress={()=>{
          navigation.navigate("Screen2")
        }}
        >Get Started</Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '15%',
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  textDetail: {
    fontFamily: 'VT323',
    fontSize: 22,
    fontWeight: 500,
    textAlign:'center',
    width:'80%'
  },
  body: {
    width: '100%',
    height: '60%',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    marginLeft:'2.5%'
  },
  cover:{
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    width: '95%',
    height: '90%',
    borderRadius:10,
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
  },
  footer: {
    width: '100%',
    height: '25%',
    alignItems:'center'
  },
  name:{
    textAlign:'center',
    width:'40%',
    fontSize:24,
    fontWeight:'bold'
  },
  button:{
    marginTop:'5%',
    backgroundColor:'red',
    color:'white',
    borderRadius:15,
    height:45,
    width:'90%',
    fontSize:25,
    fontWeight:500,
    textAlign:'center',
    paddingTop:'1%',
    fontFamily: 'VT323',
  }


});
