import {AddCommentForm} from '../AddCommentForm';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('<AddCommentForm />', ()=> {
  test('should allow you to submit a comment with a username', () => {
    //arrange
    const onSubmitForm = jest.fn();
    //act
    const helpers = render (
      <AddCommentForm onSubmitForm={() => {}} />)
    )


    //fill out user field with a username
    //(fire a change event)
    const user = helpers.getByLabelText('User');
    fireEvent.change(user, {target: {value: 'Name'}
    }})
    const content = helpers.getByLabelText('Content');
    fireEvent.change(user, {
    target: { value: 'Content' }
    //click the submit button
    const button= helpers.getByText('Submit')
    fireEvent.click(button);
    //assert
    expect(onSubmitForm).toHaveBeenCalledWith({user: 'Name', content: 'Content'})

  })
})
