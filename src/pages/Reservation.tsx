import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import ReservationList from 'components/reservation/ReservationList'

export default function Reservation() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={3} px={{ base: 2, sm: 12, md: 17 }}>
      <Text textAlign={'center'} fontSize={'3xl'} py={10} fontWeight={'bold'}>
        Reservations
      </Text>
      <VStack spacing={{ base: 5, lg: 8 }}>
        <ReservationList />
      </VStack>
    </Box>
  );
}
