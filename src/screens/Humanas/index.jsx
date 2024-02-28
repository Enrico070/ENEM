import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Humanas() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Humanas</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Filosofia")}
      >
        <Text>Filosofia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Geografia")}
      >
        <Text>Geografia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Historia")}
      >
        <Text>Historia</Text>
      </TouchableOpacity>
    </View>
  );
}
