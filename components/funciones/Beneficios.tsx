import { Text, View } from "react-native"
import estilos from "../styles/estilosBeneficios"

const beneficios = [
  "Garantía en todos los productos",
  "Soporte técnico especializado",
  "Componentes originales",
  "Atención rápida y personalizada"    
]

export default function Beneficios() {
    return (
        <View style={estilos.vistaBeneficio}>
            {beneficios.map((item) => (
                <View
                key={item}
                style={estilos.cardBeneficio}>
                    <Text style={estilos.textoBeneficio}>{item}</Text>
                </View>
            ))}
        </View>
    )
}