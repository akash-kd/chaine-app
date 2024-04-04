// Components
import * as ck from "@chakra-ui/react";
import Logo from "./components/Logo";
import { Filter } from "./components/filter/index";
import { DevMode } from "./components/DevMode";
import { Card } from "./components/Card";

// API & Services
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ICarrier, ICarrierResponse, getCarriers } from "./services/carries";

// State Management
import { useRecoilValue, useSetRecoilState} from "recoil";
import { DevModeState } from "./state/devMode";
import { useEffect } from "react";
import CarrierState from "./state/carrierState";
import { FilterStateSelector } from "./state/filterState";

export const styles: { [key: string]: ck.ChakraProps } = {
  logo: {
    width: "full",
    h: "10%",
    gap: "20px",
    bg: "gray.50",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "base",
    padding: "20px",
    display: "flex",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  main: {
    w: "full",
    h: "full",
    padding: "20px",
    bg: "gray.50",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title:{
    fontSize: 'xx-large',
    fontWeight: 'bolder',
    marginBottom: '20px',
  },

  layout: {
    padding: "20px",
    gap: "20px",
    w: "full",
    h: "full",
    bg: "gray.100",
  },
};

const grid: { [key: string]: ck.GridProps } = {
  mainGrid: {
    w: 'full',
    templateColumns: "1fr 1fr",
    gap: "10px",
  },
};

export default function App() {
  const devMode = useRecoilValue(DevModeState);
  const getFilteredCarriers = useRecoilValue<ICarrier[] | undefined>(FilterStateSelector);
  const setCarriers = useSetRecoilState(CarrierState);
  const { isPending, error, data } = useQuery<ICarrierResponse>({
    queryKey: ["getCarries"],
    queryFn: getCarriers,
  });

  useEffect(() => {
    setCarriers(data?.carriers);
  }, [data])

  return (
    <>
      {devMode && <ReactQueryDevtools />}
      <ck.Grid templateColumns="1.2fr 3fr" {...styles.layout}>
        <ck.VStack w="full" h="full" gap="20px">
          <Logo />
          <Filter />
          <DevMode />
        </ck.VStack>



        {/* MAIN CONTENT÷ */}
        <ck.Box {...styles.main}>
          <ck.Text {...styles.title}>Carriers</ck.Text>
          <ck.Grid {...grid.mainGrid}>
            {isPending && <ck.Spinner />}
            {!isPending &&
              !error &&
              getFilteredCarriers?.map((item, index) => (
                <ck.GridItem key={index}>
                  <Card details={item} />
                </ck.GridItem>
              ))}
          </ck.Grid>
          
        </ck.Box>
        
      </ck.Grid>
    </>
  );
}
