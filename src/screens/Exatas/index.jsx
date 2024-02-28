import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Exatas() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Exatas</Text>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Matematica")}
      >
        <Text>Matematica</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Fisica")}
      >
        <Text>Fisica</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("Quimica")}
      >
        <Text>Quimica</Text>
      </TouchableOpacity>
    </View>
  );
}
