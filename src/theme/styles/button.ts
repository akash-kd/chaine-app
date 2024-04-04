import * as ck from "@chakra-ui/react";

export const buttonStyles: { [key: string]: ck.ButtonProps } = {
  secondaryButton: {
    backgroundColor: "gray.100",
    border: "1px solid",
    borderColor: "gray.200",
    borderRadius: "10px",
    color: "gray.900",
  },

  primaryButton: {
    w: "full",
    backgroundColor: "blue.400",
    border: "1px solid",
    borderColor: "blue.600",
    borderRadius: "10px",
    color: "blue.900",
    _disabled: {
      opacity: 0.5
    }
  },
};

export const styles: { [key: string]: ck.ButtonProps } = {
  button: {
    height: "32px",
    fontSize: "14px",
    border: "1px solid",
    borderColor: "gray.300",
  },
  currentButton: {
    borderColor: "gray.500",
    _before: {
      content: '""',
      height: '6px',
      width: '6px',
      backgroundColor: 'gray.800', 
      borderRadius: '99px',
      marginRight: '6px'
    }
  },
  bookNow: {
    height: "32px",
    fontSize: "14px",
    borderColor: "gray.300",
    backgroundColor: "blue.500",

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
};
