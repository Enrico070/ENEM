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
          source={require("../../../../assets/geo.jpeg")}
        />
        <Text style={styles.textPrincipal}>Geografia</Text>
        <Text style={styles.text}>
          A prova de Geografia é aplicada no primeiro dia do Enem e está dentro
          de Ciências Humanas e suas tecnologias, que engloba História,
          Sociologia e Filosofia. A disciplina de Geografia é versátil e permite
          relacionar vários conteúdos com tópicos de História e Sociologia. Além
          disso, privilegia temas da atualidade. Portanto, é preciso dominar os
          principais tópicos e estar bem informado, pois a dica para o sucesso é
          saber fazer relação entre os temas. Analisamos as provas de Geografia
          no Enem dos últimos anos, e fizemos um levantamento dos assuntos que
          mais tem caído no exame para você se preparar e conseguir uma vaga na
          universidade. Confira nossa listagem e bons estudos!
        </Text>
        <TouchableOpacity
          style={styles.navButtonHumanas}
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
