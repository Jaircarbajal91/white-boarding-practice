const chai = require('chai');
const {expect, assert} = chai
const should = require('chai').should();
const spies = require('chai-spies');

chai.use(spies);

const [logBetween, logBetweenStepper, printReverse, fizzBuzz, isPrime, myIndexOf, maxValue, factorArray, oddRange, reverseHyphenString, intersect, mirrorArray] = require('../problems')

describe('logBetween function', function () {
  it('should return an array from lowNum to highNum', () => {
    let actual1 = logBetween(-1, 2);
    let actual2 = logBetween(14, 6);
    let actual3 = logBetween(4, 6);

    let expected1 = [-1, 0, 1, 2]
    let expected2 = []
    let expected3 = [4, 5, 6]

    expect(actual1).to.have.ordered.members(expected1)
    expect(actual2).to.have.ordered.members(expected2)
    expect(actual3).to.have.ordered.members(expected3)
  })
});

describe('logBetweenStepper function', () => {
  it('should return an array of numbers between min and max at step intervals', () => {
    let actual1 = logBetweenStepper(5, 9, 1)
    let actual2 = logBetweenStepper(-10, 15, 5)

    let expected1 = [5, 6, 7, 8, 9]
    let expected2 = [-10, -5, 0, 5, 10, 15]

    expect(actual1).to.have.ordered.members(expected1)
    expect(actual2).to.have.ordered.members(expected2)
  })
})

describe('printReverse function', () => {
  it('should returns an array of all numbers from max to min (exclusive), in reverse order', () => {
    let actual1 = printReverse(13, 18)
    let actual2 = printReverse(90, 94)

    let expected1 = [17, 16, 15, 14]
    let expected2 = [93, 92, 91]

    expect(actual1).to.have.ordered.members(expected1)
    expect(actual2).to.have.ordered.members(expected2)
  })
})

describe('fizzBuzz function', () => {
  it('should return an array of every number from 0 to max that is divisible by either 3 or 5, but not both.', () => {

    let actual = fizzBuzz(20);
    let expected = [3, 5, 6, 9, 10, 12, 18]

    expect(actual).to.have.ordered.members(expected)

  })
})

describe('isPrime function', () => {
  it(' should return true if number is prime. Otherwise, false.', () => {
    let actual1 = isPrime(2);
    let actual2 = isPrime(10);
    let actual3 = isPrime(11);
    let actual4 = isPrime(9);
    let actual5 = isPrime(2017);

    expect(actual1).to.be.true
    expect(actual2).to.be.false
    expect(actual3).to.be.true
    expect(actual4).to.be.false
    expect(actual5).to.be.true

  })
})

describe('maxValue function', () => {
  it('should return the largest value in array', () => {
    let actual1 = maxValue([12, 6, 43, 2]);
    let actual2 = maxValue([]);
    let actual3 = maxValue([-4, -10, 0.43]);

    let expected1 = 43
    let expected2 = 0.43

    expect(actual1).to.equal(expected1)
    expect(actual2).to.be.null;
    expect(actual3).to.equal(expected2)
  })
})

describe('myIndexOf function', () => {
  it('should return the index value of the target if it is present in the array or -1 if it is not present', () => {
    let actual1 = myIndexOf([1,2,3,4],4);
    let actual2 = myIndexOf([5,6,7,8],2);

    expect(actual1).to.equal(3)
    expect(actual2).to.equal(-1)
  })

  it('should not use built in indexOf method', () => {
    const arr = [100, 25, 81, 64]
    const indexOfSpy = chai.spy.on(arr, "indexOf");

    myIndexOf(arr, 81);

    expect(indexOfSpy).to.have.been.called.exactly(0);
  })
})

describe('factorArray function', () => {
  it('should return an array of all the factors', () => {
    let actual1 = factorArray([2,3,4,5,6],20) // => [2,4,5]
    let actual2 = factorArray([2,3,4,5,6],35) // => [5]
    let actual3 = factorArray([10,15,20,25],5) // => []

    expect(actual1).to.have.ordered.members([2,4,5])
    expect(actual2).to.have.ordered.members([5])
    expect(actual3).to.have.ordered.members([])
  })
})

describe('oddRange function', () => {
  it('should return an array containing all positive odd numbers up to end', () => {
    let actual1 = oddRange(13);  // => [ 1, 3, 5, 7, 9, 11, 13 ]
    let actual2 = oddRange(6);  // => [ 1, 3, 5 ]

    expect(actual1).to.have.ordered.members([1, 3, 5, 7, 9, 11, 13])
    expect(actual2).to.have.ordered.members([1, 3, 5])
  })
})

describe('reverseHyphenString function', () => {
  it('should return a the hyphenated string reversed', () => {
    let actual1 = reverseHyphenString("Go-to-the-store") // =>
    let actual2 = reverseHyphenString("Jump,-jump-for-joy") // =>

    expect(actual1).to.equal("store-the-to-Go")
    expect(actual2).to.equal("joy-for-jump-Jump")
  })
})

describe('intersect function', () => {
  it('should return a new array containing the elements common to both arr1 and arr2.', () => {

    let actual1 = intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])
    let actual2 = intersect(['a', 'b', 'c'], ['x', 'y', 'z'])

    expect(actual1).to.have.ordered.members([ 'b', 'd' ])
    expect(actual2).to.have.ordered.members([])

  })
})

describe('mirrorArray function', () => {
  it('should returns a new array "mirrored"', () => {
    let actual1 = mirrorArray([1,2,3]);
    let actual2 = mirrorArray(['a', 'b', 'c', 'd']);

    expect(actual1).to.have.ordered.members([ 1, 2, 3, 3, 2, 1 ])
    expect(actual2).to.have.ordered.members([ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ])

    it('should not mutate the original array', () => {
      const arr = [1,2,3]
      let actual = mirrorArray(arr)
      expect(arr).to.eql(arr);
    })
  })
})

describe('abbreviate function', () => {
  it('should return a new sentence where words longer than 4 characters have their vowels removed', () => {
    let actual1 = abbreviate('the bootcamp is fun'); // =>
    let actual2 = abbreviate('programming is fantastic'); // =>
    let actual3 = abbreviate('hello world'); // =>
    let actual4 = abbreviate('how are you'); // =>

    expect(actual1).to.equal('the btcmp is fun')
    expect(actual2).to.equal('prgrmmng is fntstc')
    expect(actual3).to.equal('hll wrld')
    expect(actual4).to.equal('how are you')
  })
})

describe('adults function', () => {
  it('should return an array containing the names of those who have an age of 18 or higher', () => {
    const ppl = [
      {name: 'John', age: 20},
      {name: 'Jim', age: 13},
      {name: 'Jane', age: 18},
      {name: 'Bob', age: 7}
    ];

    let actual = adults(ppl); // => [ 'John', 'Jane' ]

    expect(actual).to.have.ordered.members([ 'John', 'Jane' ])
  })
})

describe('countScores', () => {
  it('should return an object that has key-value pairs where each name is a key and the value is their total score', () => {
    const ppl = [
      { name: "Anthony", score: 10 },
      { name: "Fred", score : 10 },
      { name: "Anthony", score: -8 },
      { name: "Winnie", score: 12 }
    ];
    let actual1 = countScores(ppl);
    let expected1 = { Anthony: 2, Fred: 10, Winnie: 12 }

    expect(actual1).to.eql(expected1);


    const peeps = [
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 }
    ];

    let actual2 = countScores(peeps);
    let expected2 = { Anthony: 4, Fred: 4, Winnie: 6 }

    expect(actual2).to.eql(expected2);
  })
})

describe('logBetweenStepper', () => {
  it('', () => {

  })
})

// describe('logBetweenStepper', () => {
//   it('', () => {

//   })
// })

// describe('logBetweenStepper', () => {
//   it('', () => {

//   })
// })

// describe('logBetweenStepper', () => {
//   it('', () => {

//   })
// })

// describe('logBetweenStepper', () => {
//   it('', () => {

//   })
// })

// describe('logBetweenStepper', () => {
//   it('', () => {

//   })
// })

// describe('logBetweenStepper', () => {
//   it('', () => {

//   })
// })
