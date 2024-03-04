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
          source={require("../../../assets/Humanas.png")}
        />
        <Text style={styles.textPrincipal}>Humanas</Text>
        <Text style={styles.text}>
          Considerado um dos temas cobrados no Enem e em outros concursos,
          Ciências Humanas e suas Tecnologias contemplam as disciplinas de
          História, Geografia, Sociologia e Filosofia. E não é só isso! Essa
          linha de estudos direciona ainda alguns dos cursos superiores mais
          procurados do País.
        </Text>

        <Text style={styles.textCategorias}>Veja as matérias para estudo:</Text>

        <TouchableOpacity
          style={styles.navButtonHumanas}
          onPress={() => navigation.navigate("Geografia")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/geo.jpeg")}
          />
          <Text style={styles.textCategoriasCard}>Geografia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButtonHumanas}
          onPress={() => navigation.navigate("Filosofia")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/fil.png")}
          />
          <Text style={styles.textCategoriasCard}>Filosofia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonHumanas}
          onPress={() => navigation.navigate("Historia")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/historia.jpg")}
          />
          <Text style={styles.textCategoriasCard}>História</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
