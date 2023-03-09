import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  Stack,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../redux/hook/redux.hook';
import { FilterSpace } from '../redux/redux.interface';
import { space } from '../redux/slice/productslice';

const PriceFilter = () => {
  const spaceFilter = useAppSelector((state) => state.product.spaceFilter);
  const dispatch = useAppDispatch();
  console.log(spaceFilter);
  // const allChecked = spaceChecked.every(Boolean);
  // const isIndeterminate = spaceChecked.some(Boolean) && !allChecked;

  const toggleCheck = (e: React.ChangeEvent<HTMLInputElement>, item: FilterSpace) => {
    dispatch(space({ target: item.space, clicked: e.target.checked }));
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        지역 선택
      </MenuButton>
      <MenuList>
        <MenuOptionGroup fontWeight="bold" title="지역">
          <Stack pl={6} spacing={1}>
            {spaceFilter.map((space, index) => (
              <Checkbox
                key={index}
                value={space.space}
                isChecked={space.clicked}
                onChange={(e) => toggleCheck(e, space)}
              >
                {space.space}
              </Checkbox>
            ))}
          </Stack>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
export default PriceFilter;
