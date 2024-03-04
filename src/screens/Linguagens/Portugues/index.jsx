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
          source={require("../../../../assets/port.webp")}
        />
        <Text style={styles.textPrincipal}>Português</Text>
        <Text style={styles.text}>
          A disciplina de Língua Portuguesa está inserida na área de
          conhecimento de Linguagens, códigos e suas tecnologias, cuja prova é
          realizada no primeiro dia do Enem. Dentro dessa área entram também
          Literatura, Língua Estrangeira (Inglês ou Espanhol), Artes, Educação
          Física e Tecnologias da Informação e Comunicação, mas as questões de
          português são as mais numerosas, representando cerca de 60% da prova.
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
