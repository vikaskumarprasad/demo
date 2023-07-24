import { View, Text, StatusBar } from "react-native"
import { homeStyle } from "./home.style"

const HomeView = () => {
    return (
        <View style={homeStyle.main}>
            <AppBar/>
            <Text>Dashboard</Text>
        </View>
    )
}

export default HomeView;


const AppBar = () => {
    return (
        <View style={homeStyle.header}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
            <Text style = {{
                fontSize : 24,
                fontWeight : "bold"
            }}>Dashboard</Text>
        </View>

    )
}