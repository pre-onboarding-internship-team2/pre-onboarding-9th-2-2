import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';

import { useAppDispatch } from '../../redux/hook/redux.hook';
import { ILocationFilter } from '../../redux/redux.interface';
import { locationInit } from '../../redux/redux.interface';
import { setLocation } from '../../redux/slice/productslice';

const LocationFilter = () => {
  const [locationFilter, setLocationFilter] = useState<ILocationFilter[]>(locationInit);
  const dispatch = useAppDispatch();

  const updateLocation = (e: React.ChangeEvent<HTMLInputElement>, location: string) => {
    setLocationFilter((prev) => {
      const result = prev.map((product) =>
        product.location == location ? { ...product, clicked: e.target.checked } : product
      );
      return result;
    });
  };

  const filteredLocation = locationFilter
    .filter((location) => location.clicked)
    .map((location) => location.location);

  useEffect(() => {
    dispatch(setLocation(filteredLocation));
  }, [locationFilter]);

  console.log(locationFilter);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        지역 선택
      </MenuButton>
      <MenuList>
        <MenuOptionGroup fontWeight="bold">
          <Stack pl={6} spacing={1}>
            {locationFilter.map((location, index) => (
              <Checkbox
                key={index}
                value={location.location}
                isChecked={location.clicked}
                onChange={(e) => updateLocation(e, location.location)}
              >
                {location.location}
              </Checkbox>
            ))}
          </Stack>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
export default LocationFilter;
