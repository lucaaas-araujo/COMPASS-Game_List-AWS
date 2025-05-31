import { useEffect } from 'react';
import {
  Select,
  SelectGroup,
  SelectItem,
} from '../components/ui/select/Select';
import { gameServices } from '../services';

export function Games() {
  const games = async () => {
    const getAll = await gameServices.getAll();
    console.log(getAll);
  };

  useEffect(() => {
    games();
  }, []);

  return (
    <main style={{ paddingInline: '8rem', width: '700px' }}>
      <h3>Games</h3>
      <Select
        defaultValue={''}
        variant='modal'
        onChange={(e) => console.log(e.target.value)}>
        <SelectItem value=''>select a fruit</SelectItem>
        <SelectGroup>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
      </Select>
      <Select defaultValue={''}>
        <SelectItem value='' disabled>
          select a fruit
        </SelectItem>
        <SelectGroup>
          <SelectItem value='apple'>Apple</SelectItem>
          <SelectItem value='banana'>Banana</SelectItem>
          <SelectItem value='blueberry'>Blueberry</SelectItem>
          <SelectItem value='grapes'>Grapes</SelectItem>
          <SelectItem value='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
      </Select>
    </main>
  );
}
