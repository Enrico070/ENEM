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
          source={require("../../../assets/enem-2018-logo1.jpg")}
        />
        <Text style={styles.textPrincipal}>ENEM</Text>
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
          onPress={() => navigation.navigate("Linguagens")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/linguagem.jpg")}
          />
          <Text style={styles.textCategoriasCard}>Linguagens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Exatas")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/exatas.webp")}
          />
          <Text style={styles.textCategoriasCard}>Exatas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Humanas")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/Humanas.png")}
          />
          <Text style={styles.textCategoriasCard}>Humanas</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
