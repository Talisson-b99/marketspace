import { Box, Button as ButtonNative, Text, IButtonProps } from "native-base";

type Props = IButtonProps & {};

export function Button({ ...rest }: Props) {
  return (
    <Box>
      <ButtonNative h="42" bg="blue.100" {...rest}>
        <Text color="gray.700" fontSize="sm" fontFamily="heading">
          Entrar
        </Text>
      </ButtonNative>
    </Box>
  );
}
