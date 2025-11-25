import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, Animated, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';
import img1 from '../../assets/background.png';
import img2 from '../../assets/sam.png';
import Card from './cards.js'

export default function App() {
    return (
        <SafeAreaView style={[styles.container, { flex: 1 }]}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Sobre o Jogo</Text>
            </View>
            <ScrollView style={{ flex: 1 }}>

                <Card
                    title="Personagens"
                    description="Personagens principais"
                    image={img1}>
                    <View style={styles.row}>
                        <Image source={img2} style={styles.imageCardSec} />
                        <View style={styles.cardInterno}>
                            <Text style={styles.cardTitle}>Sam</Text>
                            <Text style={styles.cardDescription}>Conteúdo extra do Card 1.</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Image source={img2} style={styles.imageCardSec} />
                        <View style={styles.cardInterno}>
                            <Text style={styles.cardTitle}>Sam</Text>
                            <Text style={styles.cardDescription}>Conteúdo extra do Card 1.</Text>
                        </View>
                    </View>
                </Card>
                <Card
                    title="História"
                    // description="Descrição"
                    image={img1}
                >
                    <View style={styles.row}>
                        {/* <Image source={img2} style={styles.imageCardSec} /> */}
                        <View style={styles.cardInterno}>
                            <Text style={styles.cardTitle}>Sam</Text>
                            <Text style={styles.cardDescription}>Conteúdo extra do Card 1.</Text>
                        </View>
                    </View>
                </Card>

            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        padding: 10,
    },
    headerView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    headerText: {
        fontSize: 24,
        // fontWeight: 'bold',
        fontFamily: 'Orbitron_700Bold',
        margin: 16,
        color: '#ffffffff',
    },
    cardView: {
        // flexDirection: 'row',
        // padding: 12,
        // backgroundColor: '#ffffffff',
        // borderRadius: 8,
        // alignItems: 'center',
        // shadowColor: '#000000ff',
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 6,
        // shadowOpacity: 0.3,
        // margin: 16,
    },
    imageCardPrincipal: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        // marginRight: 16,
    },
    imageCardSec: {
        width: 100,
        height: 100,
        borderRadius: 8,
        // marginRight: 16,
    },
    textCardContainer: {
        flex: 1,
    },
    cardInterno: {
        flexDirection: 'column',
        gap: 4,
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
    content: {
        overflow: 'hidden',
        // marginTop: 8,
    },
    innerContent: {
        paddingVertical: 8,
    },

});
