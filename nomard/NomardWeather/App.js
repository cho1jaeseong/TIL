import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
const SCREEN_WIDTH = Dimensions.get("window").width;
const API_KEY = "4a9ae5b499253790fbe145a039b9600b";
const icons = {
  Clear: "day-sunny",
  Clouds: "cloudy",
  Rain: "rain",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Drizzle: "day-rain",
  Thunderstorm: "lightning",
};
export default function App() {
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(1);
  };
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { longitude, latitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const { list } = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&unistse=metric`
      )
    ).json();
    const filteredList = list.filter(({ dt_txt }) =>
      dt_txt.endsWith("00:00:00")
    );
    setDays(filteredList);
  };
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-GB"); // 변경 가능한 다른 포맷 사용 가능
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
        <View
          style={{
            width: SCREEN_WIDTH - 100,
            marginTop: 20,
            borderBottomColor: "black",
            borderBottomWidth: 3,
          }}
        ></View>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        contentContainerStyle={styles.weather}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator color="white" />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <Text style={styles.tiny}>{formatDate(day.dt)}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text style={styles.temp}>
                  {kelvinToCelsius(day.main.temp)}
                </Text>
                <Fontisto name={icons[day.weather[0].main]} size={68} />
              </View>

              <Text style={styles.descriptions}>{day.weather[0].main}</Text>
              <View
                style={{
                  width: SCREEN_WIDTH - 100,
                  marginTop: 20,
                  borderBottomColor: "black",
                  borderBottomWidth: 3,
                }}
              ></View>
            </View>
          ))
        )}
        1
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "rgb(236,192,4)" },
  city: {
    flex: 0.5,
    justifyContent: "center",
    paddingHorizontal: 50,
    marginTop: 50,
    alignItems: "center",
  },
  cityName: {
    fontSize: 48,
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "flex-start",
    paddingHorizontal: 50,
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 100,
  },
  descriptions: {
    marginTop: -10,
    fontSize: 30,
    fontWeight: "500",
  },
  tiny: {
    fontSize: 30,
  },
});
