import { sumValues } from 'src/utils/sumValues.js';

describe('sumValues', () => {
  test('should return sum of an adding an array of numbers', () => {
    //arrange (do not need this step because nothing is dependent on the time)
    //act
    const sum = sumValues([1, 2, 3, 4, 5])
    //assert
    // expect(actual).toEqual(expected) -this is one of many assertions listed on jestjs.io
    expect(sum).toEqual(15)
  })
})

describe('sumValues', () => {
  test('should return sum of an adding an array of numbers', () => {
    //arrange (do not need this step because nothing is dependent on the time)
    //act
    const sum = sumValues([1, 2, '3', 4, 5])
    //assert
    // expect(actual).toEqual(expected) -this is one of many assertions listed on jestjs.io
    expect(sum).toEqual(15)
  })
})

describe('sumValues', () => {
  test('should return sum of an adding an array of numbers', () => {
    //arrange (do not need this step because nothing is dependent on the time)
    //act
    const sum = sumValues([1, 2, 3, 4, 5abc])
    //assert
    // expect(actual).toEqual(expected) -this is one of many assertions listed on jestjs.io
    expect(sum).toEqual(10)
  })
})
