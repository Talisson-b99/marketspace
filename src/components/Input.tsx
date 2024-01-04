import { Box, Input as InputNative, IInputProps } from "native-base";

type Props = IInputProps & {};

export function Input({ ...rest }: Props) {
  return (
    <Box>
      <InputNative bgColor="gray.700" borderWidth={0} {...rest} />
    </Box>
  );
}
