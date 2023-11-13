import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./components/MealList/MealsOverview";
import SpecificMeal from "./components/MealList/SpecificMeal";
import Favorites from "./screens/Favorites";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ffdcc6" },
        sceneContainerStyle: { backgroundColor: "#ffe9dd" },
        drawerContentStyle: { backgroundColor: "#ffdcc6" },
        drawerActiveTintColor: "#c41616",
        drawerInactiveTintColor: "#c41616",
        drawerActiveBackgroundColor: "#c416164c",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Favorite meals",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#ffdcc6" },
              contentStyle: { backgroundColor: "#ffe9dd" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNav}
              options={{
                title: "Meal Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverview} />
            <Stack.Screen
              name="SpecificMeal"
              component={SpecificMeal}
              options={{ title: "About the meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
