import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
import estilos from "../styles/estilosBanner";

interface Props {
    title: string,
    text: string
}

export default function Banner({ title, text }: Props){
    return (
        <View>
            <Image
            style={estilos.imgCard} 
            source={require("@/app/(tabs)/assets/indexiImagen.jpg")}
            resizeMode="cover"
            />

            <LinearGradient 
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={estilos.gradientLayer}
            >
            <Text style={estilos.Tituloindex}>{title}</Text>
            <Text style={estilos.textIndex}>{text}</Text>

            </LinearGradient>
        </View>
    )
}