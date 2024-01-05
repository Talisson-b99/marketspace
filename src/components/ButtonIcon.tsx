import { Box, Button, HStack, Icon, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";

type Props = {
  name: string;
  title: string;
};

export function ButtonIcon({ name, title }: Props) {
  return (
    <Box>
      <Button bg="gray.100">
        <HStack alignItems="center" space={2}>
          <Icon as={Entypo} name={name} color="gray.700" />
          <Text color="gray.700" fontSize="sm" fontFamily="heading">
            {title}
          </Text>
        </HStack>
      </Button>
    </Box>
  );
}
