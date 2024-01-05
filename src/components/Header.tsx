import { HStack, Text, VStack } from "native-base";
import { UserPhoto } from "./UsePhoto";
import { ButtonIcon } from "./ButtonIcon";

export function Header() {
  return (
    <HStack alignItems="center" space={2}>
      <UserPhoto size={10} />
      <VStack flex={1}>
        <Text color="gray.100" fontFamily="body" fontSize="md">
          Boas vindas,
        </Text>
        <Text color="gray.100" fontFamily="heading" fontSize="md">
          Talisson!
        </Text>
      </VStack>
      <ButtonIcon name="plus" title="Criar anúncio" />
    </HStack>
  );
}
