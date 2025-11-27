import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import img1 from '../../assets/background.png';
import img2 from '../../assets/sam.png';
import img3 from '../../assets/amelie.png';
import Card from '../_cards.js'

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
                <Text style={styles.headerText}>Características</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>

                <Card
                    title="História"
                    description="Breve resumo da história do jogo"
                    image={img1}>

                    <PersonagensContainer>
                        <View style={styles.cardInterno}>
                            <Text style={styles.cardDescription}>
                                Death Stranding é um jogo de ação e aventura desenvolvido pela Kojima Productions e dirigido por Hideo Kojima. Lançado em 2019, o jogo se passa em um futuro pós-apocalíptico nos Estados Unidos, onde eventos misteriosos conhecidos como "Death Stranding" causaram a separação entre os vivos e os mortos. Os jogadores assumem o papel de Sam Porter Bridges, um entregador encarregado de reconectar cidades isoladas e reconstruir a sociedade, enfrentando criaturas sobrenaturais chamadas "Entidades Encalhadas" e lidando com temas profundos como a conexão humana, a solidão e a vida após a morte.
                            </Text>
                        </View>
                    </PersonagensContainer>

                </Card>

                <Card
                    title="Personagens"
                    description="Personagens principais"
                    image={img1}>

                    <PersonagensContainer>
                        <PersonagemCardSecundario
                            nome="Sam Porter Bridges"
                            descricao="É o protagonista do jogo e um entregador lendário (Porter). Ele é recrutado para viajar pelo que resta dos Estados Unidos (UCA) para reconectar as cidades isoladas à Rede Quiral."
                            imagem={img2}
                        />
                        <PersonagemCardSecundario
                            nome="Amelie Bridges"
                            descricao="É a irmã de Sam e a presidente eleita dos Estados Unidos. Ela é quem inicia a missão de Sam para viajar pelo país, mas está presa no litoral ocidental, na chamada 'Praia'."
                            imagem={img3}
                        />
                        <PersonagemCardSecundario
                            nome="Fragile"
                            descricao="A líder do grupo de entregas privado Fragile Express. Ela tem a habilidade de se teletransportar para diferentes 'Praias' e se torna uma importante aliada de Sam, com um passado misterioso."
                            imagem={img2}
                        />
                        <PersonagemCardSecundario
                            nome="Die-Hardman"
                            descricao="O braço direito da ex-presidente Bridget Bridges e mais tarde um dos principais líderes da organização Bridges. Ele frequentemente se comunica com Sam para orientá-lo em sua missão."
                            imagem={img2}
                        />
                        <PersonagemCardSecundario
                            nome="Higgs Monaghan"
                            descricao="O principal antagonista do jogo, líder do grupo terrorista separatista 'Homo Demens'. Ele possui habilidades DOOMS elevadas, que o permitem controlar as Entidades Encalhadas (EEs), e busca impedir a reunificação da América."
                            imagem={img2}
                        />
                    </PersonagensContainer>

                </Card>

                <Card
                    title="Mensagem"
                    description="Mensagem principal do jogo"
                    image={img1}>

                    <PersonagensContainer>
                        <View style={styles.cardInterno}>
                            <Text style={styles.cardDescription}>
                                A mensagem principal de Death Stranding gira em torno da importância da conexão humana e da superação da solidão em um mundo fragmentado. O jogo enfatiza a ideia de que, mesmo em meio a adversidades e isolamento, as pessoas podem se unir, construir pontes e criar laços que dão sentido à vida. A narrativa explora temas como empatia, cooperação e a interdependência entre os indivíduos para reconstruir a sociedade e encontrar esperança no futuro.
                            </Text>
                        </View>
                    </PersonagensContainer>

                </Card>

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

    // ... o restante dos seus estilos
    headerView: {
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 16,
        backgroundColor: '#dba100',
        padding: 10,
        borderBottomLeftRadius: Platform.OS === 'web' ? 60 : 30,
    },
    headerText: {
        fontSize: Platform.OS === 'web' ? 40 : 32,
        fontFamily: 'Orbitron_700Bold',
        margin: 16,
        color: '#0000000',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: 8,
    },
    imageCardSec: {
        width: Platform.OS === 'web' ? 180 : 150,
        height: Platform.OS === 'web' ?  180 : 150,
        borderRadius: 4,
        marginBottom: 15,
    },
    cardInterno: {
        flexDirection: 'column',
        marginLeft: 10,
        flex: 1,
        maxWidth: '100%',
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: Platform.OS === 'web' ? 30 : 22,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#ffffffff',
    },
    cardDescription: {
        fontSize: Platform.OS === 'web' ? 20 : 15,
        color: '#cfcfcfff',
        paddingRight: 10
    },
    // ...
});