import { Image, StyleSheet, Text, View } from "react-native";
import foto from "../assets/nerd.png";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sobre mim</Text>
        <Text style={styles.subtitle}>Boom</Text>
        <View>
          <Image source={foto} style={styles.foto}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#c3bae0",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  foto: {
    width:200,
    height:200,
    borderRadius:20
  }
});
