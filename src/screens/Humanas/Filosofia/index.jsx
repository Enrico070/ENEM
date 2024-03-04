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
          source={require("../../../../assets/fil.png")}
        />
        <Text style={styles.textPrincipal}>Filosofia</Text>
        <Text style={styles.text}>
          A Filosofia no Enem possui a característica de não ser tão
          interdisciplinar como outras disciplinas; ela é bem conteudista. Se
          você não sabe por ondem começar, o Toda Matéria vai te ajudar nessa
          empreitada. Vamos juntos! Para um excelente aproveitamento na prova é
          necessário clarificar algumas ideias. Tendo em mente uma cronologia
          que tem como marco inicial o Filósofo Tales de Mileto (c.624-546 a.C.)
          até os dias de hoje, percebemos algumas mudanças nas características
          da Filosofia ao longo dos séculos que vão compor alguns de seus
          principais períodos: Filosofia Antiga Filosofia Medieval/Cristã
          Filosofia Moderna Filosofia Contemporânea
        </Text>
        <TouchableOpacity
          style={styles.navButton}
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
