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
          source={require("../../../../assets/historia.jpg")}
        />
        <Text style={styles.textPrincipal}>História</Text>
        <Text style={styles.text}>
          O foco principal das provas de História do Exame Nacional do Ensino
          Médio (Enem) é o Brasil. A disciplina aparece dentro das "Ciências
          Humanas e suas Tecnologias" que englobam Geografia, Sociologia,
          Filosofia e Artes. Portanto, o que você aprender na aula de Sociologia
          vai servir para responder uma questão de História e vice-versa. Apesar
          do Brasil ser o tema mais cobrado, não convém esquecer-se de revisar
          temas como Revolução Francesa, Revolução Industrial, ideologias como o
          fascismo e o comunismo, pois também costumam cair no Enem. Igualmente,
          tópicos de História da África bem como de história e historiografia
          têm aparecido nos exames.
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
