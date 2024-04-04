import * as ck from "@chakra-ui/react";
import { Cost, Ratings, Availability, AvailabilityRatings, SpecialRequirements} from "./index";
import { buttonStyles } from "../../theme/styles/button";

const styles:{ [key: string]: ck.BoxProps } = {
  main: {
    w:"full",
    h:"90%",
    bg:"gray.50",
    border:"1px solid",
    borderColor:"gray.200",
    borderRadius:"base",
  },
  vStack: {
    h:"full",
    w:"full",
    alignItems:"start",
    padding:"20px",
    gap:"5px"
  },

}



export default function Filter({}) {
  return (
    <ck.Box {...styles.main}>
      <ck.VStack {...styles.vStack}>
        <ck.Text color="gray.800" marginBottom="20px" fontWeight='bold'>
          Filters
        </ck.Text>

        <ck.VStack h="full" w="full" alignItems="start" gap="20px">
          <Cost />
          <Ratings />
          <Availability />
          <AvailabilityRatings />
          <SpecialRequirements />
        </ck.VStack>
        {/* <ck.HStack w="full" gap="20px">
          <ck.Button {...buttonStyles.secondaryButton}>
            <span className="material-symbols-rounded">restart_alt</span>
          </ck.Button>
          <ck.Button {...buttonStyles.primaryButton}>
            Apply
            <span className="material-symbols-rounded">arrow_right_alt</span>
          </ck.Button>
        </ck.HStack> */}
      </ck.VStack>
    </ck.Box>
  );
}
