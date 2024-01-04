import { Heading, Image, VStack, Text, Icon, Box } from "native-base";
import { Feather } from "@expo/vector-icons";

import { UserPhoto } from "@components/UsePhoto";

import logoImg from "../../assets/logo.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  return (
    <VStack px={12} pt="120" alignItems="center" bg="gray.600" flex={1}>
      <Image source={logoImg} alt="logo marca" w="60px" h="40px" />
      <Heading color="gray.100" fontSize="lg" fontFamily="heading">
        Boas vindas!
      </Heading>
      <Text
        textAlign="center"
        color="gray.200"
        fontSize="sm"
        fontFamily="body"
        lineHeight="md"
        mt={2}
      >
        Crie sua conta e use o espaço para comprar {"\n"} itens variados e
        vender seus produtos
      </Text>
      <VStack position="relative" mt={8}>
        <UserPhoto />
        <Box
          w={10}
          h={10}
          bg="blue.100"
          alignItems="center"
          justifyContent="center"
          rounded="full"
          position="absolute"
          bottom="0"
          right="-5"
        >
          <Icon as={Feather} name="edit-3" size={5} color="gray.600" />
        </Box>
      </VStack>
      <VStack w="full" space={3} mt={5}>
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Telefone" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirmar senha" />
        <Button title="Criar" variant="black" mt={3} />
      </VStack>
      <VStack w="full" mt={6}>
        <Text
          textAlign="center"
          color="gray.200"
          fontSize="sm"
          fontFamily="body"
        >
          Já tem uma conta?
        </Text>
        <Button mt={2} title="Ir para o login" variant="outline" />
      </VStack>
    </VStack>
  );
}
