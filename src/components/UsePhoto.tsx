import { VStack, Icon } from "native-base";

import { Feather } from "@expo/vector-icons";

export function UserPhoto() {
  return (
    <VStack
      borderWidth="3px"
      borderColor="blue.100"
      rounded="full"
      p={2}
      alignItems="center"
      justifyContent="center"
      bg="gray.500"
    >
      <Icon as={Feather} name="user" size={70} color="#bebebe" />
    </VStack>
  );
}
