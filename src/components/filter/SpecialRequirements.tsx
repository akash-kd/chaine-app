import * as ck from "@chakra-ui/react";
import { memo } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import FilterState from "../../state/filterState";
import { ISpecialRequirements } from "../../services/carries";
import { styles } from "../../theme/styles/button";

const SpeacialRequirements = function SpecialRequirements() {
  const { specialRequirements } = useRecoilValue(FilterState);
  const setFilterState = useSetRecoilState(FilterState);

  const handleOnClick = (value: ISpecialRequirements) => {
    setFilterState((prev) => {
      return { ...prev, specialRequirements: value };
    });
  };

  return (
    <ck.VStack w="full" gap="8px" alignItems="start">
      <ck.Text fontSize="smaller">Special Requirements</ck.Text>
      <ck.HStack w="full" height="30px" marginBottom="3px">
        <ck.Button
          {...styles.button}
          {...(specialRequirements === "Refrigerated" && styles.currentButton)}
          onClick={() => handleOnClick("Refrigerated")}
        >
          Refrigerated
        </ck.Button>
        <ck.Button
          {...styles.button}
          {...(specialRequirements === "Eco-Friendly" && styles.currentButton)}
          onClick={() => handleOnClick("Eco-Friendly")}
        >
          Eco-Friendly
        </ck.Button>
      </ck.HStack>
      <ck.HStack w="full" height="30px">
        <ck.Button
          {...styles.button}
          {...(specialRequirements === "Hazardous Materials" &&
            styles.currentButton)}
          onClick={() => handleOnClick("Hazardous Materials")}
        >
          Hazardous Materials
        </ck.Button>
        <ck.Button
          {...styles.button}
          {...(specialRequirements === "Oversized Loads" &&
            styles.currentButton)}
          onClick={() => handleOnClick("Oversized Loads")}
        >
          Oversized Loads
        </ck.Button>
      </ck.HStack>
      <ck.HStack w="full" height="30px">
        <ck.Button
          {...styles.button}
          {...(specialRequirements === "Budget Haulers" &&
            styles.currentButton)}
          onClick={() => handleOnClick("Budget Haulers")}
        >
          Budget Haulers
        </ck.Button>
      </ck.HStack>
    </ck.VStack>
  );
};

export default memo(SpeacialRequirements);
