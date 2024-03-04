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
          source={require("../../../../assets/math.webp")}
        />
        <Text style={styles.textPrincipal}>Matemática</Text>
        <Text style={styles.text}>
          Dentre os conteúdos mais importantes para revisar, estão: números
          inteiros, frações, números decimais, potenciação, radiciação,
          transformação de unidades, equações do 1º e 2º grau, porcentagem,
          razão, proporção e por último, mas não menos importante, a regra de
          três.
        </Text>
        <TouchableOpacity
          style={styles.navButtonExatas}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../../assets/enem-2018-logo1.jpg")}
          />
          <Text style={styles.textCategoriasCard}>
            Voltar para a página inicial
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
