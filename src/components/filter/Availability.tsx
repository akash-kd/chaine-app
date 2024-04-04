import * as ck from "@chakra-ui/react";
import { memo } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import FilterState from "../../state/filterState";
import { styles } from "../../theme/styles/button";

const Availability = function AvailabilityRatings({}) {
  const { availability } = useRecoilValue(FilterState);
  const setFilterState = useSetRecoilState(FilterState);

  const handleOnClick = (value?: boolean) => {
    setFilterState((prev) => {
      return { ...prev, availability: value };
    });
  };

  return (
    <ck.VStack alignItems="start" w="full" justifyContent="space-between">
      <ck.Text fontSize="smaller">Availability</ck.Text>
      <ck.ButtonGroup w="full">
        <ck.Button
          onClick={() => handleOnClick(true)}
          {...styles.button}
          {...(availability === true && styles.currentButton)}
          w="max-content"
        >
          Available
        </ck.Button>
        <ck.Button
          onClick={() => handleOnClick(false)}
          {...styles.button}
          {...(availability === false && styles.currentButton)}
          w="max-content"
        >
          Not Available
        </ck.Button>
        <ck.Button
          onClick={() => handleOnClick()}
          {...styles.button}
          {...(availability === undefined && styles.currentButton)}
          w="max-content"
        >
          Both
        </ck.Button>
      </ck.ButtonGroup>
    </ck.VStack>
  );
};

export default memo(Availability);
