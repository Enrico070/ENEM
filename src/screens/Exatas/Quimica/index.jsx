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
          source={require("../../../../assets/quimica.jpg")}
        />
        <Text style={styles.textPrincipal}>Química</Text>
        <Text style={styles.text}>
          A Química, junto com Biologia e Física, faz parte da área de Ciências
          da Natureza e suas Tecnologias. Ao todo são 45 questões, divididas
          entre as três disciplinas, que são aplicadas no segundo dia de prova
          junto com Matemática e suas Tecnologias. Os ramos da Química que mais
          são explorados no Enem são: Química Geral, Físico-química, Química
          Orgânica e Química Ambiental. Os enunciados das questões são
          contextualizados como forma de interligar as áreas do conhecimento com
          assuntos do cotidiano.
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
