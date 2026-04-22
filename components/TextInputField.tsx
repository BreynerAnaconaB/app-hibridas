import { Text, TextInput, View } from "react-native";
import { styles } from "./styles/estilosTextInputField";

type Props<T> = {
    label: string
    name: keyof T
    value: string
    onChange: (
        name: keyof T,
        value: string
    ) => void
    secureTextEntry?: boolean
}

export const TextInputField = <T extends {}> ({
    label,
    name,
    value,
    onChange,
    secureTextEntry = false,
}: Props<T>) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput 
            style={styles.input}
            value={value}
            secureTextEntry={secureTextEntry}
            onChangeText={(text) => onChange(name, text)}
            />
        </View>
    )
}