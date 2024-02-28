import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Linguagens() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Linguagens</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Portugues")}
      >
        <Text>Portugues</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Ingles")}
      >
        <Text>Ingles</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Artes")}
      >
        <Text>Artes</Text>
      </TouchableOpacity>
    </View>
  );
}
