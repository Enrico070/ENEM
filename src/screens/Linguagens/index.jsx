import { View, Text, TouchableOpacity, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Image
          style={styles.imgPrincipal}
          source={require("../../../assets/linguagem.jpg")}
        />
        <Text style={styles.textPrincipal}>Linguagens</Text>
        <Text style={styles.text}>
          A prova de linguagens, códigos e suas tecnologias avalia conhecimentos
          sobre língua portuguesa, literatura e língua estrangeira. Também cobra
          conteúdos de artes, educação física e tecnologias da informação e
          comunicação.
        </Text>

        <Text style={styles.textCategorias}>Veja as matérias para estudo:</Text>

        <TouchableOpacity
          style={styles.navButtonLinguagens}
          onPress={() => navigation.navigate("Artes")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/artes.jpg")}
          />
          <Text style={styles.textCategoriasCard}>Artes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButtonLinguagens}
          onPress={() => navigation.navigate("Portugues")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/port.webp")}
          />
          <Text style={styles.textCategoriasCard}>Português</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonLinguagens}
          onPress={() => navigation.navigate("Ingles")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/ingles.png")}
          />
          <Text style={styles.textCategoriasCard}>Inglês</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
