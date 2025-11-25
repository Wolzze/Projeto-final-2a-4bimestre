import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View, Animated, TouchableOpacity,  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useState } from 'react';

export default function Card({ title, description, image, children }) {

    const [expanded, setExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    const toggleExpand = () => {
        Animated.timing(animation, {
            toValue: expanded ? 0 : 1,
            duration: 250,
            useNativeDriver: false,
        }).start();

        setExpanded(!expanded);
    };

    const heightInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, contentHeight]
    });

    return (
        <View style={styles.cardView}>

            <TouchableOpacity onPress={toggleExpand}>
                <Image source={image} style={styles.imageCardPrincipal} />

                <View style={styles.textCardContainer}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardDescription}>{description}</Text>
                </View>
            </TouchableOpacity>

            <Animated.View style={[styles.content, { height: heightInterpolate }]}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0}}
                    onLayout={event => {
                        setContentHeight(event.nativeEvent.layout.height);
                    }}
                >
                    {children}
                </View>
            </Animated.View>

        </View>
    );
    
}
<StatusBar style="auto" />

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "#fff",
        borderRadius: 8,
        margin: 16,
        overflow: "hidden",
    },
    imageCardPrincipal: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        resizeMode: 'cover',
        // marginRight: 16,
    },
    imageCardSec: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 16,
    },
    textCardContainer: {
        flex: 1,
        padding: 12,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
    content: {
        overflow: 'hidden',
        marginTop: 8,
    },
    innerContent: {
        paddingVertical: 8,
    },

});
