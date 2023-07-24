import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView >
      <View style = {styles.appBar}>
      <Text style = {{fontWeight : '500',fontSize : 18,color : "#fff"}}>Nominee Details</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.constainer}>
          <Text>Name</Text>
          <Text>Relation</Text>
          <Text>Content No.</Text>
          <Text>Date of Birth</Text>
          <Text>Document Type</Text>
          <Text>Document ID</Text>
          <Text>Address</Text>
        </View>
        <View style={styles.constainer}>
          <Text>Jone</Text>
          <Text>Father</Text>
          <Text>+91 123456789</Text>
          <Text>16/04/2000</Text>
          <Text>Adhar</Text>
          <Text>16/04/2000</Text>
          <Text>Ahmedanad</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.rowContainer}>
          {/* <Text>Image</Text> */}
        </View>
        <View style={styles.rowContainer}></View>
      </View>
      <View style={{ flexDirection: 'row', gap: 88, marginLeft: 32, }}>
        <Text>Adhar Fornt</Text>
        <Text>Adhar Back</Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'column',
    marginLeft: 25,
    marginRight: 0,
    marginTop: 30,
    marginBottom: 5,
    alignItems: 'stretch',
    backgroundColor: 'white',
    flexWrap: 'wrap'
  },

  row: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },

  rowContainer: {
    height: 90,
    width: 140,
    backgroundColor: 'white',
    borderColor: "black",
    borderWidth: 0.5,
  },
  card: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
    margin: 22,
  }
,
appBar : {
  flexDirection : 'row',
  height : 50,
  alignItems :'center',
  backgroundColor :"#ee5c53",
  justifyContent : 'space-around',
}
});

export default App;
