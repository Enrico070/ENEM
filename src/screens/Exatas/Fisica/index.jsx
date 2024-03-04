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
          source={require("../../../../assets/fisica.webp")}
        />
        <Text style={styles.textPrincipal}>Física</Text>
        <Text style={styles.text}>
          Eletrodinâmica, Termologia, Ondulatória, Cinemática. Eis os assuntos
          mais pedidos nas provas do Enem. Energia, trabalho, potência,
          calorimetria, refração, gravitação. São tantos os conceitos de Física,
          e tantas as suas fórmulas correspondentes, que é comum que o aluno se
          perca no meio de tanto conteúdo para assimilar.
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
