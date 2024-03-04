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
          source={require("../../../../assets/ingles.png")}
        />
        <Text style={styles.textPrincipal}>Inglês</Text>
        <Text style={styles.text}>
          Ela contém 5 questões de múltipla escolha. As questões são de
          interpretação de diferentes gêneros textuais (poemas, cartoons,
          notícias, romance etc.) e raramente de aspecto gramatical isolado. A
          prova de Inglês apresenta tanto a linguagem verbal quanto a não verbal
          — textos sincréticos.
        </Text>
        <TouchableOpacity
          style={styles.navButtonLinguagens}
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
