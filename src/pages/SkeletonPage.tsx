import { Stack, Skeleton, Box, Flex } from "@chakra-ui/react";

const SkeletonPage = () => {
  return (
    <Stack>
      <Skeleton>
        <Box w="100vw" h="2xs">
          Header + FilterBox
        </Box>
      </Skeleton>
      <Flex justify="space-between" my="4" p="4" flexWrap="wrap">
        <Skeleton w="xs" h="sm" borderRadius="2xl" margin="3">
          <Box>Box 1</Box>
        </Skeleton>
        <Skeleton w="xs" minH="sm" borderRadius="2xl" margin="3">
          <Box>Box 2</Box>
        </Skeleton>
        <Skeleton w="xs" minH="sm" borderRadius="2xl" margin="3">
          <Box>Box 3</Box>
        </Skeleton>
        <Skeleton w="xs" minH="sm" borderRadius="2xl" margin="3">
          <Box>Box 4</Box>
        </Skeleton>
      </Flex>
    </Stack>
  );
};

export default SkeletonPage;
