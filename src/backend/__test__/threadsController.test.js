import {threadsController} from '../threadsController.js';

describe('threadsController.js', () => {
  test('should return 200 and a list of threads on a Get request', () => {
    //arrange
    const req= {
      method: 'GET'
    }

    const myMock = jest.fn();

    const res= {
      status: ()=> {
        return {
          json: myMock,  //doesn't matter what id returns as long as its a function
        }
      },
    }
    //act
    threadsController(req, res );
    //assert
    //json was called 1 time
    //json was called with list of data
    expect(myMock).toHaveBeenCalledTimes(1);
    expect(myMock).toHaveBeenCalledWith()
  })
})
