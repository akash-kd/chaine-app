import * as ck from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  BookNowCurrentCarrier,
  BookNowModelState,
} from "../state/bookNowState";
import { ICarrier } from "../services/carries";

const styles: { [key: string]: ck.ChakraProps } = {
  box: {
    w: "full",
    h: "full",
    display: "flex",
    gap: "10px",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "10px",
    py: "20px",
  },
};

function BookNowModel() {
  const isBookNowOpen = useRecoilValue<boolean>(BookNowModelState);
  const [confirm, setConfirm] = useState<boolean>(isBookNowOpen);
  const currentCarrier = useRecoilValue<ICarrier>(BookNowCurrentCarrier);
  const setBookNowModelState = useSetRecoilState<boolean>(BookNowModelState);
  const onClose = () => setBookNowModelState(false);

  useEffect(() => {
    if(isBookNowOpen === false) setConfirm(false);
  }, [isBookNowOpen])

  const handleOnConfirm = () => {
    setConfirm(true);
  };

  const mainModelBody = (
    <ck.ModalBody px="24px">
      <ck.Heading textAlign="center" mb="24px">
        {currentCarrier.name}
      </ck.Heading>
      <ck.Grid templateColumns="1fr 1fr" gap="10px">
        <ck.GridItem>
          <ck.Box {...styles.box}>
            <ck.Heading>$ {currentCarrier?.cost}</ck.Heading>
            <ck.Text>Cost</ck.Text>
          </ck.Box>
        </ck.GridItem>
        <ck.GridItem>
          <ck.Box {...styles.box}>
            <ck.Heading>{currentCarrier?.rating}</ck.Heading>
            <ck.Text>Rating</ck.Text>
          </ck.Box>
        </ck.GridItem>
        <ck.GridItem>
          <ck.Box {...styles.box}>
            <ck.Heading>
              {currentCarrier?.onTimeDeliveryPercentage * 100}%
            </ck.Heading>
            <ck.Text>On Time Delivery</ck.Text>
          </ck.Box>
        </ck.GridItem>
        <ck.GridItem>
          <ck.Box
            {...styles.box}
            backgroundColor={
              currentCarrier.availability ? "green.100" : "red.100"
            }
          >
            {currentCarrier.availability ? (
              <span
                className="material-symbols-rounded"
                style={{ fontSize: "30px" }}
              >
                check_circle
              </span>
            ) : (
              <span
                className="material-symbols-rounded"
                style={{ fontSize: "30px" }}
              >
                dangerous
              </span>
            )}
            <ck.Text>Availabilty</ck.Text>
          </ck.Box>
        </ck.GridItem>
      </ck.Grid>
    </ck.ModalBody>
  );

  const loadingContent = (
    <ck.Center w="full" h="300px">
      <ck.Spinner />
    </ck.Center>
  );

  const confirmContent = (
    <ck.Center w="full" h="300px" display="flex" flexDir="column" gap="20px">
      <ck.Image src="/icons/confirm.svg" height="80px" />
      <ck.Heading>Confirmed</ck.Heading>
    </ck.Center>
  );

  return (
    <ck.Modal
      isCentered
      onClose={onClose}
      isOpen={isBookNowOpen}
      motionPreset="slideInBottom"
    >
      <ck.ModalOverlay />
      <ck.ModalContent maxH="600px" maxW="500px">
        <ck.ModalHeader px="24px" textAlign="center">
          Confirm Booking
        </ck.ModalHeader>
        {confirm ? confirmContent : mainModelBody}
        <ck.ModalFooter px="24px">
          <ck.Button variant="ghost" onClick={onClose}>
            Cancel
          </ck.Button>
          <ck.Button colorScheme="blue" onClick={handleOnConfirm}>
            Confirm
          </ck.Button>
        </ck.ModalFooter>
      </ck.ModalContent>
    </ck.Modal>
  );
}

export default memo(BookNowModel);
