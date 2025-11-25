import { Image, StyleSheet, Text, View, Platform, ImageBackground } from "react-native";
import foto from "../../assets/nerd.png";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import background from '../../assets/background.png';

export default function Page() {
  return (
      // <ImageBackground source={background} style={styles.background}>
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      {/* <Text style={styles.title}>Sobre mim</Text> */}
      <View style={styles.main}>
        {/* <View>
          <Image source={foto} style={styles.foto} />
        </View> */}
        <View>
          <Text style={styles.subtitle}>
            <Text style={{ fontWeight: "bold" }}>Nome: </Text> Exemplo
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
    </SafeAreaView>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    // backgroundColor: "#c3bae0",
  },
  main: {
    // flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    gap: 20,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "#38434D",
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 20
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
