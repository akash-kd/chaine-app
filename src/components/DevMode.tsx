import React, { memo } from "react";
import DevModeState from '../state/devMode.ts';

import * as recoil from 'recoil';
import * as ck from "@chakra-ui/react";

const styles: { [key: string]: ck.BoxProps } = {
  main: {
    w: "full",
    h: "10%",
    bg: "gray.50",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "base",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const DevMode = memo(function DevMode({}) {
  const setDevMode = recoil.useSetRecoilState(DevModeState);
  const devMode = recoil.useRecoilValue(DevModeState);
  return (
    <ck.Box {...styles.main}>
      <ck.HStack w="full" display="flex" justifyContent="space-between">
        <ck.Text>Developer Mode</ck.Text>
        <ck.Switch defaultChecked={devMode} onChange={e => setDevMode(e.target.checked)}/>
      </ck.HStack>
    </ck.Box>
  );
});


