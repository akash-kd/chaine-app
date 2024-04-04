import * as ck from "@chakra-ui/react";
import { ICarrier } from "../services/carries";
import { motion, AnimatePresence } from "framer-motion";
import { memo } from "react";

interface ICardProps {
  details: ICarrier;
}

const styles: { [key: string]: ck.ChakraProps } = {
  box: {
    borderWidth: "1px",
    borderRadius: "lg",
    overflow: "hidden",
    p: 4,
    height: "100%",
    borderRadius: "10px",
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ position: "relative", bottom: "-10px", height: "100%" }}
        animate={{ bottom: "0px" }}
        exit={{bottom: "-10px"}}
        style={{ height: "100%" }}
      >
        <ck.Box
          opacity={availability ? 1 : 0.7}
          cursor={availability ? "default" : "not-allowed"}
          {...styles.box}
        >
          <ck.Text fontSize="larger" mb="10px" fontWeight="bold">
            {name}
          </ck.Text>
          
          <ck.Text fontSize="smaller">
            Rating: {rating}{" "}
            <span className="material-symbols-outlined">star</span>
          </ck.Text>
          <ck.Text fontSize="smaller">
            On-Time Delivery Percentage: {onTimeDeliveryPercentage * 100}%
          </ck.Text>
          <ck.Text fontSize="smaller">Cost: ${cost}</ck.Text>
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
