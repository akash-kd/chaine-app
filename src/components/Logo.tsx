import * as ck from "@chakra-ui/react";
import { styles } from "../theme/styles/app";

export default function Logo() {
  return <ck.Box {...styles.logo}>
    <ck.Image src="/iconWithText.svg" borderRadius="20px" />
  </ck.Box>;
}
