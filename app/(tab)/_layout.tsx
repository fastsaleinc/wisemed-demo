import { Tabs } from "expo-router";
import {FontAwesome } from "@expo/vector-icons";

const TabRoot = () => {
    return ( 
        <Tabs>
            <Tabs.Screen name="index" options={{title: 'Home',  tabBarIcon:({color}) => <FontAwesome size={28} name="home" color={color}/>}}/>
            <Tabs.Screen name="table" options={{title: 'Users Table', tabBarIcon:({color}) => <FontAwesome size={28} name="table" color={color}/>}}/>
            <Tabs.Screen name="error" options={{title: 'Error Tab', }}/>

        </Tabs>
     );
}
 
export default TabRoot;
