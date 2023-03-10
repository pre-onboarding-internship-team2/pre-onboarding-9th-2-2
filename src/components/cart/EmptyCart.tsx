import { Button, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function EmptyCart() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Flex flexDir="column" justifyContent={'center'} alignItems={'center'} marginTop="10">
      <Button onClick={goBack} position={'absolute'} left={60} top={0.5}>
        돌아가기
      </Button>
      <Heading>예약 내역</Heading>
      <Heading size={'md'} my="10">
        장바구니가 비어있습니다.
      </Heading>
    </Flex>
  );
}

export default EmptyCart;
