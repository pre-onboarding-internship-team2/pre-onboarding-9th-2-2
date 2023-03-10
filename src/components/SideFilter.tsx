import { Flex } from '@chakra-ui/react';

import LocationFilter from './filters/Location';
import PriceFilter from './filters/Price';

function SideFilter() {
  return (
    <Flex flexDir={'row'} width="full" mb={8}>
      <LocationFilter />
      <PriceFilter />
    </Flex>
  );
}

export default SideFilter;
