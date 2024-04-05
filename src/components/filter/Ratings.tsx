// @ts-nocheck
import * as ck from "@chakra-ui/react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import FilterState from "../../state/filterState";
import { memo, useState } from "react";
import Star from "./Star";

export const Ratings = function Ratings({}) {
  const { rating } = useRecoilValue(FilterState);
  const setFilterState = useSetRecoilState(FilterState);
  const [hover, setHover] = useState<number>(rating);

  const populate = (val: number) => {
    return {
      fill: hover >= val,
      onMouseEnter: () => setHover(val),
      onMouseLeave: () => setHover(rating),
      onClick: () =>
        setFilterState((prev) => {
          return { ...prev, rating: val };
        }),
    };
  };

  return (
    <ck.VStack alignItems="start" w="full">
      <ck.Text fontSize="small">Ratings</ck.Text>
      <ck.HStack justifyContent="center">
        <Star {...populate(1)} />
        <Star {...populate(2)}/>
        <Star {...populate(3)} />
        <Star {...populate(4)} />
        <Star {...populate(5)} />
      </ck.HStack>
    </ck.VStack>
  );
};

export default memo(Ratings);
