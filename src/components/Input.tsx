import { Box, Input as InputNative, IInputProps } from "native-base";

type Props = IInputProps & {};

export function Input({ ...rest }: Props) {
  return (
    <Box>
      <InputNative
        bgColor="gray.700"
        borderWidth={0}
        {...rest}
        placeholderTextColor="gray.400"
        _focus={{
          borderWidth: "1",
          borderColor: "gray.300",
          color: "gray.300",
        }}
      />
    </Box>
  );
}
