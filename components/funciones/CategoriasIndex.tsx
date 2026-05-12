import { router } from "expo-router"
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native"
import estilos from "../styles/estilosCategoriasIndex"

interface Categoria {
    id: string
    titulo: string
    imagen: string
}

const categorias: Categoria[] = [
    {
        id: "1",
        titulo: "Gaming",
        imagen: "https://cdn-icons-png.flaticon.com/512/686/686589.png"
    },
    {
        id: "2",
        titulo: "Componentes",
        imagen: "https://cdn-icons-png.flaticon.com/512/3659/3659899.png"
    },
    {
        id: "3",
        titulo: "Perifericos",
        imagen: "https://cdn-icons-png.flaticon.com/512/3474/3474360.png"
    },
    {
        id: "4",
        titulo: "Software",
        imagen: "https://cdn-icons-png.flaticon.com/512/2721/2721291.png"
    },
    {
        id: "5",
        titulo: "Audifonos",
        imagen: "https://cdn-icons-png.flaticon.com/512/5842/5842600.png"
    },
    {
        id: "6",
        titulo: "Procesadores",
        imagen: "https://cdn-icons-png.flaticon.com/512/1086/1086611.png"
    },
    {
        id: "7",
        titulo: "Teclados",
        imagen: "https://cdn-icons-png.flaticon.com/512/2527/2527693.png",
    },
    {
        id: "8",
        titulo: "Ratones",
        imagen: "https://cdn-icons-png.flaticon.com/512/9380/9380745.png"
    }
]

export default function CategoriasIndex() {
    const { width } = useWindowDimensions()


  const columnas =
    width < 700 ? 2 :
    width < 1100 ? 3 :
    4;

  const cardWidth =
    columnas === 2 ? "47%" :
    columnas === 3 ? "31%" :
    "23%";    

    return (
        <View style={estilos.vistaCategorias}>
            <View style={estilos.vistaCategorias2}>
                {categorias.map((item) => (
                    <TouchableOpacity
                    style={[
                        estilos.ContainerInfo,
                        {
                            width: cardWidth,
                        }
                    ]}
                    key={item.id}
                    activeOpacity={0.8}
                    onPress={() => {
                        router.push("/tienda")
                    }}>
                        <Image
                        style={estilos.imgCardInfo}
                        source = {{ uri: item.imagen }}
                        resizeMode="contain" 
                        />

                        <Text style={estilos.tituloTarjeta}>{item.titulo}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}