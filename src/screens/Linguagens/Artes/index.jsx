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
          source={require("../../../../assets/artes.jpg")}
        />
        <Text style={styles.textPrincipal}>Artes</Text>
        <Text style={styles.text}>
          Artes é uma disciplina que faz parte da prova de Linguagens, códigos e
          suas tecnologias do Enem. Dominar conceitos da arte e saber
          interpretar trabalhos artísticos pode fazer a diferença e te levar a
          uma nota mais satisfatória. Segundo o Portal do Governo Federal, é
          necessário que o candidato tenha conhecimento sobre as principais
          vanguardas artísticas. Além disso, é importante saber relacionar as
          obras ao contexto histórico em que foram produzidas, levando em conta
          aspectos sociais e econômicos.
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
