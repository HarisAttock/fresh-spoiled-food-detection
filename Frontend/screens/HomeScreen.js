import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import themeContext from '../config/themeContext';

const HomeScreen = ({ navigation }) => {
  const theme = useContext(themeContext);

  return (
    <ScrollView>
      <View style={{ backgroundColor: theme.background }}>
        <View>
          <Text style={{ color: theme.color }}></Text>
          <Text style={styles.headerText}>Fresh and Spoiled Food Detective</Text>
        </View>

        <View>
          <Text style={styles.subHeaderText}>Using Camera, adulteration Food easily Detective</Text>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={require("../assets/apple.png")}></Image>
            <Text style={styles.itemText}>Apple</Text>
          </View>

          <View style={styles.itemContainer}>
            <Image style={styles.image} source={require("../assets/banana.jpg")}></Image>
            <Text style={styles.itemText}>Banana</Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={require("../assets/potato.png")}></Image>
            <Text style={styles.itemText}>Potato</Text>
          </View>

          <View style={styles.itemContainer}>
            <Image style={styles.image} source={require("../assets/tomato.png")}></Image>
            <Text style={styles.itemText}>Tomato</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  headerText: {
    marginTop: 5,
    height: 50,
    marginLeft: 1,
    backgroundColor: 'gray',
    borderColor: 'blue',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
  },
  subHeaderText: {
    marginTop: 3,
    marginLeft: 1,
    backgroundColor: 'black',
    borderColor: 'blue',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    height: 80,
    fontStyle: 'italic',
    color: 'yellow',
  },
  rowContainer: {
    flexDirection: 'row',
    marginTop: 32,
    backgroundColor: 'White',
    fontWeight: 'bold',
  },
  itemContainer: {
    borderTopWidth: 3,
    height: 160,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    marginLeft: 30,
    borderColor: 'green',
  },
  image: {
    height: 100,
    width: 110,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
  },
  itemText: {
    backgroundColor: 'black',
    fontSize: 12,
    color: 'yellow',
    textAlign: 'center',
    height: 27,
    fontSize: 20,
    borderTopWidth: 12,
    borderBottomWidth: 42,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 1, 
  },
};
export default HomeScreen;





















// import React,{useContext} from "react";
// import { View, Text,  Image, ScrollView} from 'react-native';
// import themeContext from '../config/themeContext';
// const HomeScreen = () => {
//   const theme = useContext(themeContext);
//       return (
//          <ScrollView>
//       <View style={{ backgroundColor: theme.background}}>
//       <View>
//     <Text style={{ color: theme.color}}></Text>
//            <Text style={{marginTop: 5, height:50, marginLeft: 1,backgroundColor: 'gray',borderColor:'blue',textAlign: 'center', color:'white', fontWeight:'bold',  fontSize:20, fontStyle: 'italic',Color:'White' }}>Fresh and Spoiled Food Detective</Text>
//               </View>
//            <View>
//         <Text style={{marginTop: 1,marginLeft: 1,backgroundColor: 'black',borderColor:'blue',textAlign: 'center', color:'white', fontWeight:'bold',  fontSize:16, height: 50,fontStyle: 'italic', color:'yellow'  }}>Using Camera, adultration Food easily Detective</Text>
//         </View>
//         <View style={{flexDirection: 'row',marginTop: 12,backgroundColor: 'White', fontWeight:'bold', }}>
//        <View style={{borderTopWidth:3,height: 123, borderRightWidth:3, borderLeftWidth:3, borderBottomWidth:3, marginLeft: 40,borderColor: 'green', }}>
  
//  <Image style={{height: 90, width: 90,  marginLeft: 10, marginRight: 10, alignSelf: 'center',}} source={require("../assets/apple.png")}></Image> 
//  <Text style={{ backgroundColor:'black',fontSize: 12,color:'yellow', textAlign:'center', height: 27, fontSize: 17,  borderTopWidth: 2,borderBottomWidth: 2,  borderRightWidth: 2, borderLeftWidth: 2,fontWeight:'bold',fontStyle: 'italic'}}>Apple</Text>
//    </View>
//      <View style={{borderTopWidth:3,height: 123, borderRightWidth:3, borderLeftWidth:3, borderBottomWidth:3, marginLeft: 40, borderColor: 'green', }}>

//        <Image style={{height: 90, width: 90,  marginLeft: 10, marginRight: 10, alignSelf: 'center',}} source={require("../assets/banana.jpg")}></Image>
//       <Text style={{backgroundColor:'black',fontSize: 12,color:'yellow', textAlign:'center', height: 27, fontSize: 17,  borderTopWidth: 2,borderBottomWidth: 2,  borderRightWidth: 2, borderLeftWidth: 2,fontWeight:'bold',fontStyle: 'italic'}}>Banana</Text> 

//         </View>
//        </View>
//           <View style={{flexDirection: 'row',marginTop: 12,backgroundColor: 'White', fontWeight:'bold', }}>
//               <View style={{borderTopWidth:3,height: 123, borderRightWidth:3, borderLeftWidth:3, borderBottomWidth:3, marginLeft: 40,borderColor: 'green', }}>
//        <Image style={{height: 90, width: 90,  marginLeft: 10, marginRight: 10, alignSelf: 'center',}} source={require("../assets/Orange.png")}></Image>
//       <Text style={{backgroundColor:'black',fontSize: 12,color:'yellow', textAlign:'center', height: 27, fontSize: 17,  borderTopWidth: 2,borderBottomWidth: 2,  borderRightWidth: 2, borderLeftWidth: 2,fontWeight:'bold',fontStyle: 'italic'}}>Orange</Text> 
//  </View>
//      <View style={{borderTopWidth:3,height: 123, borderRightWidth:3, borderLeftWidth:3, borderBottomWidth:3, marginLeft: 40,borderColor: 'green', }}>
//        <Image style={{height: 90, width: 90,  marginLeft: 10, marginRight: 10, alignSelf: 'center',}} source={require("../assets/lemon.jpg")}></Image>
//       <Text style={{backgroundColor:'black',fontSize: 12,color:'yellow', textAlign:'center', height: 27, fontSize: 17,  borderTopWidth: 2,borderBottomWidth: 2,  borderRightWidth: 2, borderLeftWidth: 2,fontWeight:'bold',fontStyle: 'italic'}}>Lemon</Text> 
//   </View>
//    </View>
//    <View style={{flexDirection: 'row',marginTop: 12,backgroundColor: 'White', fontWeight:'bold', }}>
//      <View style={{borderTopWidth:3,height: 123, borderRightWidth:3, borderLeftWidth:3, borderBottomWidth:3, marginLeft: 40,borderColor: 'green', }}>
//        <Image style={{height: 90, width: 90,  marginLeft: 10, marginRight: 10, alignSelf: 'center',}} source={require("../assets/cucumber.jpg"    )}></Image>
//       <Text style={{backgroundColor: 'black',borderColor:'blue',textAlign: 'center', color:'white', fontWeight:'bold',  fontSize:17, height: 27,fontStyle: 'italic', color:'yellow'} }>Cucumber</Text>
//  </View>
//    <View style={{borderTopWidth:3,height: 123, borderRightWidth:3, borderLeftWidth:3, borderBottomWidth:3, marginLeft: 40,borderColor: 'green', }}>
//        <Image style={{height: 90, width: 90,  marginLeft: 10, marginRight: 10, alignSelf: 'center',}} source={require("../assets/tomato.png")}></Image>
//       <Text style={{backgroundColor: 'black',borderColor:'blue',textAlign: 'center', color:'white', fontWeight:'bold',  fontSize:17, height: 27,fontStyle: 'italic', color:'yellow'} }>Tomato</Text> 
//       </View>
//        </View>
//          </View>
//        </ScrollView>
//     );
// };
// export default HomeScreen;
