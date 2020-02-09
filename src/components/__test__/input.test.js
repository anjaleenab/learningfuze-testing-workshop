import { Input } from 'src/components/Input.js';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent} from '@testing-library/react';
describe('<Input />', () => {
  test('should render the input', () => {
  //arrange

  //act
  const helpers = renders(<Input id="test label" label="Test" value="THATS IT"
  onChange ={()=> } />)

  helpers.debug()
  helpers.getByText('Test')
  const input = helpers.getByLabelText('Test');
  //assert

  expect(input).toBeInTheDocument();
  });

  test('should fire "onChange" prop when a change event happens on the input', () => {
    //arrange
    const onChange = jest.fn()
    //act
    const helpers = renders(<Input id="test label" label="Test" value="THATS IT" onChange={onChange} />)

    const input = helpers.getByLabelText('Test');
    fireEvent.change(input, {
      target: { value:'342q34'}
    })
    //assert
    expect(onChange).toHaveBeenCalled(1)
    // expect(onChange).toHaveBeenCalledWith({ target: value: '342q34'})
  })
})
