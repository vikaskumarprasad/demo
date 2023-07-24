import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { appStyle } from "./src/style";

const App = () => {
  const DATA = [
    {
      id: 1,
      name: "vikas",
      price: 4564,
      color: "blue",
    },
    {
      id: 2,
      name: "vikas",
      price: 4564,
      color: "blue",
    },
    {
      id: 3,
      name: "vikas",
      price: 4564,
      color: "blue",
    },
    {
      id: 4,
      name: "vikas",
      price: 4564,
      color: "blue",
    },
    {
      id: 5,
      name: "vikas",
      price: 4564,
      color: "blue",
    }
  ]
  return (

    <SafeAreaView >
      <StatusBar backgroundColor= 'black' barStyle={"light-content"}/>
      
        <View style={styles.mainContainer}>
          {DATA.map((item) =>
            <View style={appStyle.container}>
              <Text>This</Text>
              {/* <Text>{item.id}</Text> */}
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
              <Text>{item.color}</Text>
            </View>
          )}
        </View>
      </SafeAreaView>

  )
}

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor : 'lightblue',
    // height : '25%',
    // width : '100%',
  }
})