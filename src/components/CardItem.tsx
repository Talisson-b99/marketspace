import { Box, Image, Text, VStack } from "native-base";

import { UserPhotoCard } from "./UserPhotoCard";

type Props = {
  item: {
    id: number;
    name: string;
    price: string;
    image: any;
    categoria: string;
  };
};

export function CardItem({ item }: Props) {
  return (
    <VStack position="relative" w="150px">
      <Box
        position="absolute"
        bg={item.categoria === "usado" ? "gray.200" : "blue.200"}
        top="3%"
        right="3%"
        zIndex={2}
        px={2}
        rounded="full"
        alignItems="center"
        justifyContent="center"
        w="45%"
      >
        <Text color="#fff" fontSize="10px" fontFamily="heading">
          {item.categoria}
        </Text>
      </Box>

      <Box position="absolute" zIndex={1} top="3%" left="3%">
        <UserPhotoCard />
      </Box>

      <Image
        source={item.image}
        w="150px"
        h="100px"
        alt="imagem do produto"
        rounded="md"
        resizeMode="contain"
      />
      <Text color="gray.200" fontSize="sm" fontFamily="body" my={1}>
        {item.name}
      </Text>
      <Text fontSize="xs" fontFamily="heading" color="gray.100">
        R$
        <Text fontSize="lg" fontFamily="heading" color="gray.100">
          59,90
        </Text>
      </Text>
    </VStack>
  );
}
