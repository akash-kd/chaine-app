// Components
import * as ck from "@chakra-ui/react";
import Logo from "./components/Logo";
import { Filter } from "./components/filter/index";
import { DevMode } from "./components/DevMode";
import { Card } from "./components/Card";
import BookNowModel from "./components/BookNow";
import { styles, grid } from "./theme/styles/app";

// API & Services
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ICarrier, ICarrierResponse, getCarriers } from "./services/carries";

// State Management
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DevModeState } from "./state/devMode";
import { useEffect } from "react";
import CarrierState from "./state/carrierState";
import { BestMatch, FilterStateSelector } from "./state/filterState";
import { BookNowCurrentCarrier } from "./state/bookNowState";


export default function App() {
  const devMode = useRecoilValue(DevModeState);
  const getFilteredCarriers = useRecoilValue<ICarrier[] | undefined>(
    FilterStateSelector
  );
  const getBestMatchCarrier = useRecoilValue<ICarrier[] | undefined>(BestMatch);
  const setCarriers = useSetRecoilState(CarrierState);
  const { isPending, error, data } = useQuery<ICarrierResponse>({
    queryKey: ["getCarries"],
    queryFn: getCarriers,
  });

  useEffect(() => {
    setCarriers(data?.carriers);
  }, [data]);

  const getExactMatches = () => {
    if (isPending || error) return <></>;
    if (getFilteredCarriers && getFilteredCarriers.length > 0) {
      return (
        <>
          <ck.Text {...styles.title} mt="30px">
            Carriers
          </ck.Text>
          <ck.Grid {...grid.mainGrid}>
            {getFilteredCarriers?.map((item, index) => (
              <ck.GridItem key={index}>
                <Card details={item} />
              </ck.GridItem>
            ))}
          </ck.Grid>
        </>
      );
    } else {
      return (
        <ck.Text {...styles.title}>{"(>_<) No Carriers Found!, Try for Other Options"}</ck.Text>
      );
    }
  };

  const getBestMatches = () => {
    if (isPending || error) return <></>;

    if (getBestMatchCarrier && getBestMatchCarrier.length > 0) {
      return (
        <>
          <ck.Text {...styles.title} mt="30px">
            Best Matches
          </ck.Text>
          <ck.Grid {...grid.mainGrid}>
            {getBestMatchCarrier?.map((item, index) => (
              <ck.GridItem key={index}>
                <Card details={item} />
              </ck.GridItem>
            ))}
          </ck.Grid>
        </>
      );
    }
  };
  return (
    <>
      {devMode && <ReactQueryDevtools />}
      <BookNowModel />
      <ck.Grid templateColumns="1.2fr 3fr" {...styles.layout}>
        <ck.VStack w="full" h="full" gap="20px">
          <Logo />
          <Filter />
          <DevMode />
        </ck.VStack>

        {/* MAIN CONTENT÷ */}
        <ck.Box {...styles.main}>
          {isPending && <ck.Spinner />}
          {getExactMatches()}
          {getBestMatches()}
        </ck.Box>
      </ck.Grid>
    </>
  );
}
