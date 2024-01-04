import { Box, Button as ButtonNative, Text, IButtonProps } from "native-base";

type Props = IButtonProps & {
  variant?: "solid" | "outline" | "black";
  title: string;
};

export function Button({ title, variant = "solid", ...rest }: Props) {
  return (
    <Box>
      <ButtonNative
        h="42"
        bg={
          variant === "solid"
            ? "blue.100"
            : variant === "black"
            ? "gray.100"
            : "gray.500"
        }
        {...rest}
      >
        <Text
          color={variant === "outline" ? "gray.200" : "gray.700"}
          fontSize="sm"
          fontFamily="heading"
        >
          {title}
        </Text>
      </ButtonNative>
    </Box>
  );
}
