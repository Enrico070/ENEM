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
          source={require("../../../assets/exatas.webp")}
        />
        <Text style={styles.textPrincipal}>Exatas</Text>
        <Text style={styles.text}>
          O Enem, é uma avaliação organizada pelo governo federal, a fim de
          auxiliar estudantes a ingressarem de maneira mais fácil e simplificada
          no ensino superior. Atualmente, ele é a principal maneira de
          estudantes brasileiros conseguirem uma vaga na universidade, seja ela
          pública ou privada. O exame possui uma relevância e importância tão
          grande que já aceito até como processo avaliativo para instituições de
          ensino superior de outros países, como em Portugal por exemplo.
        </Text>

        <Text style={styles.textCategorias}>Veja as matérias para estudo:</Text>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Matematica")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/math.webp")}
          />
          <Text style={styles.textCategoriasCard}>Matemática</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Fisica")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/fisica.webp")}
          />
          <Text style={styles.textCategoriasCard}>Física</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Quimica")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/quimica.jpg")}
          />
          <Text style={styles.textCategoriasCard}>Química</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
