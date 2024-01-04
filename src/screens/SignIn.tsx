import { Center, Heading, Image, Text, VStack } from "native-base";

import logoImg from "../../assets/logo.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <VStack w="full">
      <VStack
        w="full"
        pt="24"
        pb="68"
        alignItems="center"
        px={12}
        bg="gray.600"
        roundedBottomLeft="3xl"
        roundedBottomRight="3xl"
      >
        <Image source={logoImg} alt="brand" />
        <Heading color="gray.100" fontSize="xl" fontWeight="bold" mt={2}>
          marketspace
        </Heading>
        <Text fontFamily="mono" color="gray.300" fontSize="sm">
          Seu espaço de compra e venda
        </Text>
        <VStack mt="76px" w="full" space={4}>
          <Text
            color="gray.200"
            fontSize="sm"
            fontFamily="body"
            textAlign="center"
          >
            Acesse sua conta
          </Text>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" />
          <Button mt={4} title="Entrar" />
        </VStack>
      </VStack>
      <VStack px={12} mt="76px">
        <Text textAlign="center">Ainda não tem acesso?</Text>
        <Button mt={4} variant="outline" title="Criar uma conta" />
      </VStack>
    </VStack>
  );
}
