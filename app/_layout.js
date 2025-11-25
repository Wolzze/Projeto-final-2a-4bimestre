import { Slot, SplashScreen } from "expo-router";
import { useFonts, Orbitron_400Regular, Orbitron_700Bold } from "@expo-google-fonts/orbitron";
import { Audiowide_400Regular} from "@expo-google-fonts/audiowide";
import { Aldrich_400Regular } from "@expo-google-fonts/aldrich"
import { Text, View } from "react-native";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function rootLayout() {
    const [fontsLoaded, fontError] = useFonts({
        Orbitron_400Regular,
        Orbitron_700Bold,
        Audiowide_400Regular,
        Aldrich_400Regular,
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        } 
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading Fonts...</Text>
            </View>
        );
    }
    return <Slot />;
}