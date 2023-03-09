import React from 'react';
import { Stack, Checkbox, Text, Flex } from '@chakra-ui/react';

interface IProps {
  handleSelectSpace: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SpaceFilter({ handleSelectSpace }: IProps) {
  const spaceList = ['강원', '서울', '부산', '대구', '제주'];
  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <Text fontSize="lg" fontWeight="bold" minW="16">
        지역
      </Text>
      <Stack spacing={[1, 5]} direction={['column', 'row']}>
        {spaceList.map((space, i) => (
          <Checkbox
            key={i}
            value={space}
            onChange={handleSelectSpace}
            fontWeight="semibold"
            colorScheme="teal"
          >
            {space}
          </Checkbox>
        ))}
      </Stack>
    </Flex>
  );
}
