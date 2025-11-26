import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, Platform } from 'react-native'; // Importar Platform
import { SafeAreaView } from 'react-native-safe-area-context';


import img1 from '../../assets/background.png'; 
import img2 from '../../assets/sam.png';      
import img3 from '../../assets/amelie.png'; 
import Card from '../_cards.js';
import CardNoImage from '../cardnoimage.js';


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
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Futuro Tecnológico</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>

                <CardNoImage
                    title="Tecnologia Pós-Apocalíptica"
                    description="A relação entre tecnologia e reconexão em Death Stranding"
                    >

                    <PersonagensContainer>
                        <View style={styles.cardInterno}>
                            <Text style={styles.cardDescription}>
                                Death Stranding projeta um futuro onde a tecnologia é tanto a causa quanto a solução para a fragmentação humana. O jogo apresenta conceitos que, embora fantásticos, ressoam com a ciência moderna em áreas como inteligência artificial, robótica vestível (exoesqueletos) e a necessidade de infraestrutura de comunicação radicalmente avançada para superar o isolamento geográfico e social.
                            </Text>
                        </View>
                    </PersonagensContainer>

                </CardNoImage>

                <CardNoImage
                    title="Pilares da Inovação"
                    description="Tecnologias centrais para o gameplay e narrativa"
                    image={img1}>

                    <PersonagensContainer>
                        <Text style={styles.cardDescription}>
                            1. Rede Quiral: Uma rede de comunicação avançada que permite a transferência instantânea de dados e até mesmo a materialização de objetos através do espaço, simbolizando a importância da conectividade.<br/><br/>
                            2. Exoesqueletos e Equipamentos Avançados: Ferramentas que aumentam as capacidades humanas, refletindo a tendência atual de integração homem-máquina para superar limitações físicas.<br/><br/>
                            3. Inteligência Artificial e Drones: Utilizados para assistência em entregas e exploração, antecipando o papel crescente da IA e da automação na vida cotidiana.<br/><br/>
                        </Text>
                    </PersonagensContainer>

                </CardNoImage>

                <CardNoImage
                    title="Impacto e Reflexão"
                    description="O futuro é construído, não herdado"
                    image={img1}>

                    <PersonagensContainer>
                        <View style={styles.cardInterno}>
                            <Text style={styles.cardDescription}>
                                A principal mensagem tecnológica do jogo é que a inovação só tem valor quando serve para a reconexão. O futuro não é definido pelas máquinas ou redes, mas pela capacidade humana de usar essas ferramentas para construir laços, superar a solidão e manter a esperança em um mundo em constante mudança.
                            </Text>
                        </View>
                    </PersonagensContainer>

                </CardNoImage>

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
    webRowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        paddingLeft: 10,
    },
    personagemItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        ...Platform.select({
            web: {
                width: 'calc(50% - 8px)', // 50% da largura menos metade do gap
            },
            default: {
                paddingLeft: 10, // Mantém o padding no App para alinhamento
            }
        })
    },
    headerView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    headerText: {
        fontSize: 34,
        fontFamily: 'Orbitron_700Bold',
        margin: 16,
        color: '#ffffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffffff',
        paddingBottom: 8,
    },
    imageCardSec: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    cardInterno: {
        flexDirection: 'column',
        marginLeft: 10,
        flex: 1,
        maxWidth: '100%',
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#ffffffff',
    },
    cardDescription: {
        fontSize: 14,
        color: '#cfcfcfff',
        paddingRight: 10
    },
    // Você pode ter mais estilos que não foram listados aqui,
    // mas o essencial para o layout está mantido.
});