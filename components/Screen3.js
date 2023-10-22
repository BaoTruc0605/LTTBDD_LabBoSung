import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, FlatList, SafeAreaView } from 'react-native';


export default function Screen3({ navigation, route }) {
  var curentImg = route.params?.curentImg || "xe_red";
  var curentName = route.params?.curentName || "Pina Mountain"; 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.cover}>
          <Image source={require('../assets/' + curentImg + '.png')} style={{ width: null, height: '95%' }} resizeMode='contain'>
          </Image>
        </View>
      </View>
      <View style={styles.body}>
        <View >
          <Text style={styles.name}>
            {curentName}
          </Text>
          <Text style={styles.textPrice}>15% OFF 1350$  <Text style={styles.textPriceLine}>499$</Text> </Text>
        </View>
        <Text style={styles.des}>
          Description
        </Text>
        <Text style={styles.description}>
          It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </View>
      <View style={styles.footer}>
      <Image source={require('../assets/heart.png')} style={{ width:50, height: 50}}>
          </Image>
          <Pressable style={styles.button}
        onPress={()=>{
          navigation.navigate("Screen2")
        }}
        >Add to card</Pressable>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems:'center'
  },
  header: {
    height: '45%',
    width: '100%',
    alignItems: 'center'
  },
  body: {
    width: '90%',
    height: '40%',
    display: 'flex',
    justifyContent: 'space-around',

  },
  footer: {
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center'
  },
  name: {
    fontSize: 28,
    fontWeight: 500
  },
  cover: {
    backgroundColor: 'rgba(233, 65, 65, 0.1)',
    width: '95%',
    height: '100%',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textPrice: {
    color: 'gray',
    fontSize: 25,
    fontWeight: 500
  },
  textPriceLine: {
    color: '#000',
    fontSize: 25,
    fontWeight: 400,
    textDecorationLine: 'line-through',
    marginLeft: '10%'
  },
  des: {
    fontSize: 25,
    fontWeight: 500
  },
  description: {
    color: 'gray',
    fontSize: 22,
    fontWeight: 400
  },
  button:{
    
    backgroundColor:'red',
    color:'white',
    borderRadius:15,
    height:45,
    width:'70%',
    fontSize:25,
    fontWeight:500,
    textAlign:'center',
    paddingTop:'1%',
    fontFamily: 'VT323',
  }



});
