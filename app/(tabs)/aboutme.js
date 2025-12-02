import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, Platform } from 'react-native'; // Importar Platform
import { SafeAreaView } from 'react-native-safe-area-context';


import img1 from '../../assets/background.png';
import img2 from '../../assets/sam.png';
import img3 from '../../assets/amelie.png';
import foto from '../../assets/foto.jpeg';
import Card from '../_cards.js';


const PersonagemCardSecundario = ({ nome, descricao, imagem }) => (
    <View style={styles.personagemItem}>
        <Image source={imagem} style={styles.imageCardSec} />
        <View style={styles.cardInterno}>
            <Text style={styles.cardTitle}>{nome}</Text>
            <Text style={styles.cardDescription}>{descricao}</Text>
        </View>
    </View>
);

const PersonagensContainer = ({ children }) => {
    const webContainerStyle = Platform.OS === 'web' ? styles.webRowContainer : {};

    return (
        <View style={webContainerStyle}>
            {children}
        </View>
    );
};

export default function App() {
    return (
        <SafeAreaView style={[styles.container, { flex: 1 }]}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>Sobre mim</Text>
                </View>


                    <View style={styles.cardex}>
                        <View style={styles.main}>
                            <View> <Image source={foto} style={styles.foto} /></View>
                            <View>
                                <Text style={styles.title}>Ingrid Beatrice</Text>
                                <Text style={[styles.subtitle,]}>
                                    <Text style={{ fontFamily: 'Orbitron_700Bold' }}>Série:</Text> 2º Ano{'\n'}
                                    <Text style={{ fontFamily: 'Orbitron_700Bold' }}>Idade:</Text> 17 anos{'\n'}
                                    <Text style={{ fontFamily: 'Orbitron_700Bold' }}>Curso:</Text> Informática para Internet{'\n'}
                                    <Text style={{ fontFamily: 'Orbitron_700Bold' }}>Escola:</Text> ETEC de Presidente Venceslau{'\n'}
                                    <Text style={{ fontFamily: 'Orbitron_700Bold' }}>Hobbies:</Text> Desenhar, música e jogar.{'\n'}
                                    <Text style={{ fontFamily: 'Orbitron_700Bold' }}>Pontos fortes:</Text> Criativa, design básico, ilustração digital, rápida para {Platform.OS === 'web' ? '\n' : ''}aprender e bom trabalho em equipe.{'\n'}

                                </Text>
                            </View>
                            <StatusBar style="auto" />
                        </View>
                    </View>
                
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000ff',
    },
    headerView: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 16,
        backgroundColor: '#dba100',
        padding: 10,
        borderBottomLeftRadius: Platform.OS === 'web' ? 60 : 30,
        borderBottomRightRadius: Platform.OS === 'web' ? 60 : 30,
    },
    headerText: {
        fontSize: Platform.OS === 'web' ? 40 : 32,
        fontFamily: 'Orbitron_700Bold',
        margin: 16,
        color: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: 8,
    },
    main: {
        flex: 1,
        justifyContent: Platform.OS === 'web' ? 'flex-start' : 'center',
        maxWidth: 960,
        marginHorizontal: "auto",
        flexDirection: Platform.OS === 'web' ? 'row' : 'column',
        gap: Platform.OS === 'web' ? 30 : 10,
        alignItems: 'center',
    },
    cardex: {
        marginTop: 100,
        width: Platform.OS === 'web' ? '67%' : "90%",
        alignSelf: "center",
        padding: Platform.OS === 'web' ? 5 : 10,
        backgroundColor: "#141414ff",
        borderRadius: Platform.OS === 'web' ? 15 : 30,
        overflow: "hidden",
        borderWidth: 0.7,
        borderColor: '#ffffffff',
    },
    title: {
        fontSize: 40,
        color: "#dba100",
        fontFamily: 'Orbitron_700Bold',
    },
    subtitle: {
        fontSize: 20,
        color: "#ffffffff",
    },
    foto: {
        width: Platform.OS === 'web' ? 200 : 200,
        height: Platform.OS === 'web' ? 200 : 200,
        borderRadius: Platform.OS === 'web' ? 15 : 30,
        marginLeft: Platform.OS === 'web' ? -20 : 0,
    },
    // Você pode ter mais estilos que não foram listados aqui,
    // mas o essencial para o layout está mantido.
});