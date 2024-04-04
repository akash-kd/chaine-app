import * as ck from "@chakra-ui/react";
import { memo } from "react";
import { useSetRecoilState } from "recoil";
import FilterState from "../../state/filterState";

const Cost = function Cost({}) {
  const setFilterState = useSetRecoilState(FilterState);

  return (
    <ck.VStack alignItems="start" w="full">
      <ck.Text fontSize="small">Cost</ck.Text>
      <ck.HStack w="full" gap="10px">
        <ck.Input
          placeholder="Min"
          type="number"
          onChange={(e) =>
            setFilterState((prev) => {
              return { ...prev, minCost: e.target.value === "" ? 0: e.target.value };
            })
          }
        ></ck.Input>
        <ck.Text>-</ck.Text>
        <ck.Input
          placeholder="Max"
          type="number"
          onChange={(e) =>
            setFilterState((prev) => {
              return { ...prev, maxCost: e.target.value === "" ? 2000: e.target.value };
            })
          }
        ></ck.Input>
      </ck.HStack>
    </ck.VStack>
  );
};

export default memo(Cost);
