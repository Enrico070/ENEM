import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";

import Home from "./src/screens/Home";
import Humanas from "./src/screens/Humanas";
import Exatas from "./src/screens/Exatas";
import Linguagens from "./src/screens/Linguagens";
import Sobre from "./src/screens/Sobre";
import Fisica from "./src/screens/Exatas/Fisica";
import Quimica from "./src/screens/Exatas/Quimica";
import Matematica from "./src/screens/Exatas/Matematica";
import Geografia from "./src/screens/Humanas/Geografia";
import Historia from "./src/screens/Humanas/Historia";
import Filosofia from "./src/screens/Humanas/Filosofia";
import Portugues from "./src/screens/Linguagens/Portugues";
import Ingles from "./src/screens/Linguagens/Ingles";
import Artes from "./src/screens/Linguagens/Artes";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela Inicial",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Humanas"
          component={Humanas}
          options={{
            title: "Humanas",

            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Exatas"
          component={Exatas}
          options={{
            title: "Exatas",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Linguagens"
          component={Linguagens}
          options={{
            title: "Linguagens",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: "Sobre mim",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="Fisica"
          component={Fisica}
          options={{
            title: "Física",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Quimica"
          component={Quimica}
          options={{
            title: "Química",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Matematica"
          component={Matematica}
          options={{
            title: "Matemática",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Geografia"
          component={Geografia}
          options={{
            title: "Geografia",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Historia"
          component={Historia}
          options={{
            title: "História",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Filosofia"
          component={Filosofia}
          options={{
            title: "Filosofia",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Artes"
          component={Artes}
          options={{
            title: "Artes",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Portugues"
          component={Portugues}
          options={{
            title: "Português",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Ingles"
          component={Ingles}
          options={{
            title: "Inglês",
            headerStyle: {
              backgroundColor: "#002147",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
