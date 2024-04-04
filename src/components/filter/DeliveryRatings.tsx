import * as ck from "@chakra-ui/react";
import { memo, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import FilterState from "../../state/filterState";

const AvailabilityRatings = function AvailabilityRatings() {
  const { onTimeDeliveryPercentage } = useRecoilValue(FilterState);
  const [value, setValue] = useState<number>(onTimeDeliveryPercentage);
  const setFilterState = useSetRecoilState(FilterState);

  return (
    <ck.VStack alignItems="start" w="full">
      <ck.Text fontSize="small">On Time Delivery Ratings</ck.Text>
      <ck.HStack w="full" gap="10px">
        <ck.Text display="flex" justifyContent="start">
          0
        </ck.Text>
        <ck.Slider
          defaultValue={onTimeDeliveryPercentage}
          onChange={(e) => setValue(e)}
          onChangeEnd={(e) => {
            setFilterState((prev) => {
              return { ...prev, onTimeDeliveryPercentage: e };
            });
          }}
        >
          <ck.SliderTrack>
            <ck.SliderFilledTrack />
          </ck.SliderTrack>
          <ck.Tooltip label={value + "%"}>
            <ck.SliderThumb />
          </ck.Tooltip>
        </ck.Slider>
        <ck.Text display="flex" justifyContent="end">
          100
        </ck.Text>
      </ck.HStack>
    </ck.VStack>
  );
};

export default memo(AvailabilityRatings);
