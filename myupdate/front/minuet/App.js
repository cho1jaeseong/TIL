import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import Home from "./Test/Home";
import Test from "./Test/Test";
import store from "./store/store";
// import Register from "./secreens/Register/Register";
import Start from "./secreens/Start/Start";
import Login from "./secreens/Login/Login";
import Email from "./secreens/Register/Email";
import MainPage from "./secreens/MainPage/MainPage";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import News from "./secreens/News/News";
import CountryNews from "./secreens/CountryNews.js/CountryNews";
import Setting from "./secreens/Setting/Setting";
import { GlobalColor } from "./util/colors";
import Ionicons from "react-native-vector-icons/Ionicons"; // 이 패키지를 설치해야 할 수도 있습니다.
const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="white"
      inactiveColor="gray"
      shifting={true}
      barStyle={{ backgroundColor: GlobalColor.colors.primary_black }}
      tabBarColor="white"
    >
      <Tab.Screen
        name="MainPage"
        component={MainPage}
        options={{
          tabBarLabel: "메인", // 탭 바에 표시될 라벨
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: "뉴스",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="CountryNews"
        component={CountryNews}
        options={{
          tabBarLabel: "국가뉴스",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="globe" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "설정",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tap">
          <Stack.Screen
            name="Tab"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Test" component={Test} options={{ headerShown: false  }} />
          <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} /> 
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> 
          <Stack.Screen name="Email" component={Email} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
