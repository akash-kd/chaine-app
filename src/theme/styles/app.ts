import * as ck from "@chakra-ui/react";


export const styles: { [key: string]: ck.ChakraProps; } = {
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
    overflowY:'scroll',
    padding: "20px",
    bg: "gray.50",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontSize: "xx-large",
    fontWeight: "bolder",
    marginBottom: "20px",
    w: "full",
    textAlign: "center",
  },

  layout: {
    padding: "20px",
    gap: "20px",
    w: "full",
    h: "full",
    bg: "gray.100",
  },
};
export const grid: { [key: string]: ck.GridProps; } = {
  mainGrid: {
    w: "full",
    templateColumns: "1fr 1fr",
    gap: "10px",
  },
};
