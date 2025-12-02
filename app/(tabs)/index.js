import { Platform, StyleSheet, Text, View, } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Death Stranding</Text>
        <Text style={styles.subtitle}>E o Futuro Tecnológico</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#000000ff",
  },
  main: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    maxWidth: "100%",
    // marginHorizontal: "auto",
  },
  title: {
    fontSize: Platform.OS === 'web' ? 76 : 48,
    color: "#ffffffff",
    fontFamily: "Orbitron_700Bold",
    textAlign: "left",
  },
  subtitle: {
    fontSize: Platform.OS === 'web' ? 36 : 26,
    color: "#9e9e9eff",
    fontFamily: "Aldrich_400Regular",
  },
});
