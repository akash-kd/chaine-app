import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(switchAnatomy.keys);
const baseStyle = definePartsStyle({
  container: {
    bg: 'transparent',
  },
  thumb: {},
  track: {
    bg: 'gray.200',
    border: '1px solid',
    borderColor: 'gray.300',
    _checked: {
      bg: 'blue.500',
      borderColor: 'blue.600'
    }
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
export default switchTheme