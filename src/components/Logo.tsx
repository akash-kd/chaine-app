import * as ck from "@chakra-ui/react";
import { styles } from "../App";

export default function Logo() {
  return <ck.Box {...styles.logo}>
    <ck.Image src="/iconWithText.svg" borderRadius="20px" />
  </ck.Box>;
}
