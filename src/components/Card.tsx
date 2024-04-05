import * as ck from "@chakra-ui/react";
import { ICarrier } from "../services/carries";
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";
import { styles as commonStyles } from "../theme/styles/button";
import { useSetRecoilState } from "recoil";
import {
  BookNowCurrentCarrier,
  BookNowModelState,
} from "../state/bookNowState";

interface ICardProps {
  details: ICarrier;
}

const styles: { [key: string]: ck.ChakraProps } = {
  box: {
    borderWidth: "1px",
    overflow: "hidden",
    p: 4,
    height: "100%",
    borderRadius: "10px",
  },

  featuresBox: {
    w: "full",
    h: "full",
    display: "flex",
    flexDir: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "10px",
    py: "20px",
  },
};

export const Card = ({ details }: ICardProps) => {
  const {
    name,
    rating,
    onTimeDeliveryPercentage,
    cost,
    specialRequirements,
    availability,
  } = details;
  const setBookNowModelState = useSetRecoilState(BookNowModelState);
  const setCurrentCarrier = useSetRecoilState(BookNowCurrentCarrier);

  const handleBookNow = () => {
    setBookNowModelState((prev) => !prev);
    setCurrentCarrier(details);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ position: "relative", bottom: "-10px", height: "100%" }}
        animate={{ bottom: "0px" }}
        exit={{ bottom: "-10px" }}
        style={{ height: "100%" }}
      >
        <ck.Box
          opacity={availability ? 1 : 0.7}
          cursor={availability ? "default" : "not-allowed"}
          {...styles.box}
        >
          <ck.HStack
            justifyContent="space-between"
            alignItems="center"
            mb="10px"
          >
            <ck.Text fontSize="larger" fontWeight="bold">
              {name}
            </ck.Text>
            <ck.Button
              onClick={handleBookNow}
              {...commonStyles.bookNow}
              colorScheme="blue"
            >
              Book Now
              <span
                className="material-symbols-rounded"
                style={{ fontSize: "16px" }}
              >
                arrow_forward
              </span>
            </ck.Button>
          </ck.HStack>

          <ck.Text fontSize="medium">
            Rating: {rating}
          </ck.Text>
          <ck.Text fontSize="medium">
            On-Time Delivery Percentage: {onTimeDeliveryPercentage * 100}%
          </ck.Text>
          <ck.Text fontSize="medium">Cost: ${cost}</ck.Text>
          {specialRequirements && (
            <ck.Flex my="10px">
              {specialRequirements.map((requirement, index) => (
                <ck.Tag
                  key={index}
                  size="smaller"
                  mr={2}
                  variant="solid"
                  backgroundColor="gray.200"
                  padding="3px 10px"
                >
                  <ck.TagLabel fontSize="smaller">{requirement}</ck.TagLabel>
                </ck.Tag>
              ))}
            </ck.Flex>
          )}

          {availability ? (
            <ck.Tag colorScheme="green">Available</ck.Tag>
          ) : (
            <ck.Tag colorScheme="red">Not Available</ck.Tag>
          )}
        </ck.Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(Card);
