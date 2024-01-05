import { Box, Image } from "native-base";

import User from "../../assets/User.png";

export function UserPhotoCard() {
  return (
    <Box w={6} h={6}>
      <Image source={User} alt="foto do usuário" />
    </Box>
  );
}
