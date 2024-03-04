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
          As matérias de exatas compõem boa parte da prova do Enem e requerem
          muito conhecimento e atenção por parte dos participantes. São as
          matérias que estão relacionadas à matemática, cálculos e resolução de
          problemas, utilizando a lógica. Com isso, é a área para quem gosta de
          números, de resolver fórmulas e de testar hipóteses. As matérias de
          exatas são Química, Física e Matemática, sendo que, no Enem, elas
          estão nas áreas de Matemática e Suas Tecnologias e de Ciências da
          Natureza e Suas Tecnologias — que engloba Química e Física.
        </Text>

        <Text style={styles.textCategorias}>Veja as matérias para estudo:</Text>

        <TouchableOpacity
          style={styles.navButtonExatas}
          onPress={() => navigation.navigate("Matematica")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/math.webp")}
          />
          <Text style={styles.textCategoriasCard}>Matemática</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButtonExatas}
          onPress={() => navigation.navigate("Fisica")}
        >
          <Image
            style={styles.imgLinguagens}
            source={require("../../../assets/fisica.webp")}
          />
          <Text style={styles.textCategoriasCard}>Física</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButtonExatas}
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
