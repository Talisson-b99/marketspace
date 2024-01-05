import { Header } from "@components/Header";
import {
  Box,
  Divider,
  FlatList,
  HStack,
  Icon,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "@components/Input";
import { CardItem } from "@components/CardItem";

import Item1 from "../../assets/sapato.png";
import Item2 from "../../assets/item2.png";
import Item3 from "../../assets/item3.png";
import Item4 from "../../assets/item4.png";

const itens = [
  {
    id: 1,
    name: "Tênis vermelho",
    price: "59,90",
    image: Item1,
    categoria: "usado",
  },
  {
    id: 2,
    name: "Bicicleta",
    price: "120,00",
    image: Item2,
    categoria: "novo",
  },
  { id: 3, name: "Armario", price: "159,90", image: Item3, categoria: "usado" },
  {
    id: 4,
    name: "Sofá 1,80m",
    price: "1200,00",
    image: Item4,
    categoria: "novo",
  },
];

export function Home() {
  return (
    <VStack px={6} pt={16} bg="gray.600" flex={1}>
      <Header />
      <VStack mt={6}>
        <Text color="gray.300" fontFamily="body" fontSize="sm" mb={2}>
          Seus produtos anunciados para venda
        </Text>
        <HStack
          alignItems="center"
          bg="rgba(100, 122, 199, 0.1)"
          px={4}
          py={3}
          rounded="lg"
        >
          <Icon as={Feather} name="tag" color="blue.200" size={5} />
          <VStack flex={1} ml={3}>
            <Text color="gray.200" fontSize="lg" fontFamily="heading">
              4
            </Text>
            <Text color="gray.200" fontFamily="body" fontSize="xs">
              anúncios ativos
            </Text>
          </VStack>
          <TouchableOpacity>
            <HStack alignItems="center" space={2}>
              <Text color="blue.200" fontFamily="body" fontSize="xs">
                Meus anúncios
              </Text>
              <Icon name="arrow-right" as={Feather} color="blue.200" />
            </HStack>
          </TouchableOpacity>
        </HStack>
        <VStack mt={8}>
          <Text color="gray.300" fontSize="sm" fontFamily="body" mb={2}>
            Compre produtos variados
          </Text>

          <Box position="relative">
            <Input placeholder="Buscar anúncio" />
            <Icon
              as={Feather}
              name="search"
              size={5}
              color="gray.200"
              position="absolute"
              top="30%"
              right="12%"
            />
            <Divider
              orientation="vertical"
              h={6}
              position="absolute"
              right="10%"
              top="20%"
              color="gray.400"
            />
            <Icon
              as={Ionicons}
              name="options-outline"
              position="absolute"
              size={5}
              color="gray.200"
              top="30%"
              right="3%"
            />
          </Box>
        </VStack>
      </VStack>
      <VStack mt={4}>
        <FlatList
          data={itens}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          renderItem={({ item }) => <CardItem item={item} />}
          contentContainerStyle={{}}
        />
      </VStack>
    </VStack>
  );
}
