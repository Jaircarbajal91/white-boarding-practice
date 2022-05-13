const chai = require('chai');
const {expect, assert} = chai
const should = require('chai').should();
const spies = require('chai-spies');

chai.use(spies);

const [logBetween,logBetweenStepper,printReverse,fizzBuzz,isPrime,maxValue,myIndexOf,factorArray,oddRange,reverseHyphenString,intersect,mirrorArray,abbreviate,adults,countScores,firstNPrimes,peakFinder,divisibleByThreePairSum,zipArray,twoDimensionalTotal,countInnerElement,twoDiff,arrayDiff,valueCounter,elementCount,nextTwoPrimes,pairProduct,twoDimensionalSize,longWordCount,factorial,lcm,hipsterfyWord,hipsterfy,objectToString,shortestWord,greatestCommonFactor,isPassing,valueConcat,threeInARow,variableNameify,threeIncreasing,reverse2D,reverb,countRepeats,pairsToString,countAdjacentSums,signFlipCount,powerSequence,collapseString,oddWordsOut,mindPsAndQs,commonFactors,commonPrimeFactors,splitHalfArray,threeUniqueVowels,vowelShift,hasSymmetry,evenSumArray,numsToWords,moreDotLessDash
] = require('../problems')


describe('logBetween', function () {
  it('should return an array from lowNum to highNum', () => {
    let actual1 = logBetween(-1, 2);
    let actual2 = logBetween(14, 6);
    let actual3 = logBetween(4, 6);

    let expected1 = [-1, 0, 1, 2]
    let expected2 = []
    let expected3 = [4, 5, 6]

    expect(actual1).to.eql(expected1)
    expect(actual2).to.eql(expected2)
    expect(actual3).to.eql(expected3)
  })
});

describe('logBetweenStepper', () => {
  it('should return an array of numbers between min and max at step intervals', () => {
    let actual1 = logBetweenStepper(5, 9, 1)
    let actual2 = logBetweenStepper(-10, 15, 5)

    let expected1 = [5, 6, 7, 8, 9]
    let expected2 = [-10, -5, 0, 5, 10, 15]

    expect(actual1).to.eql(expected1)
    expect(actual2).to.eql(expected2)
  })
})

describe('printReverse', () => {
  it('should returns an array of all numbers from max to min (exclusive), in reverse order', () => {
    let actual1 = printReverse(13, 18)
    let actual2 = printReverse(90, 94)

    let expected1 = [17, 16, 15, 14]
    let expected2 = [93, 92, 91]

    expect(actual1).to.eql(expected1)
    expect(actual2).to.eql(expected2)
  })
})

describe('fizzBuzz', () => {
  it('should return an array of every number from 0 to max that is divisible by either 3 or 5, but not both.', () => {

    let actual = fizzBuzz(20);
    let expected = [3, 5, 6, 9, 10, 12, 18]

    expect(actual).to.eql(expected)

  })
})

describe('isPrime', () => {
  it('should return true if number is prime. Otherwise, false.', () => {
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

describe('maxValue', () => {
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

describe('myIndexOf', () => {
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

describe('factorArray', () => {
  it('should return an array of all the factors', () => {
    let actual1 = factorArray([2,3,4,5,6],20)
    let actual2 = factorArray([2,3,4,5,6],35)
    let actual3 = factorArray([10,15,20,25],5)

    expect(actual1).to.eql([2,4,5])
    expect(actual2).to.eql([5])
    expect(actual3).to.eql([])
  })
})

describe('oddRange', () => {
  it('should return an array containing all positive odd numbers up to end', () => {
    let actual1 = oddRange(13);
    let actual2 = oddRange(6);

    expect(actual1).to.eql([1, 3, 5, 7, 9, 11, 13])
    expect(actual2).to.eql([1, 3, 5])
  })
})

describe('reverseHyphenString', () => {
  it('should return a the hyphenated string reversed', () => {
    let actual1 = reverseHyphenString("Go-to-the-store")
    let actual2 = reverseHyphenString("Jump,-jump-for-joy")

    expect(actual1).to.equal("store-the-to-Go")
    expect(actual2).to.equal("joy-for-jump-Jump")
  })
})

describe('intersect', () => {
  it('should return a new array containing the elements common to both arr1 and arr2.', () => {

    let actual1 = intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])
    let actual2 = intersect(['a', 'b', 'c'], ['x', 'y', 'z'])

    expect(actual1).to.eql([ 'b', 'd' ])
    expect(actual2).to.eql([])

  })
})

describe('mirrorArray', () => {
  it('should returns a new array "mirrored"', () => {
    let actual1 = mirrorArray([1,2,3]);
    let actual2 = mirrorArray(['a', 'b', 'c', 'd']);

    expect(actual1).to.eql([ 1, 2, 3, 3, 2, 1 ])
    expect(actual2).to.eql([ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ])

    it('should not mutate the original array', () => {
      const arr = [1,2,3]
      let actual = mirrorArray(arr)
      expect(arr).to.eql(arr);
    })
  })
})

describe('abbreviate', () => {
  it('should return a new sentence where words longer than 4 characters have their vowels removed', () => {
    let actual1 = abbreviate('the bootcamp is fun');
    let actual2 = abbreviate('programming is fantastic');
    let actual3 = abbreviate('hello world');
    let actual4 = abbreviate('how are you');

    expect(actual1).to.equal('the btcmp is fun')
    expect(actual2).to.equal('prgrmmng is fntstc')
    expect(actual3).to.equal('hll wrld')
    expect(actual4).to.equal('how are you')
  })
})

describe('adults', () => {
  it('should return an array containing the names of those who have an age of 18 or higher', () => {
    const ppl = [
      {name: 'John', age: 20},
      {name: 'Jim', age: 13},
      {name: 'Jane', age: 18},
      {name: 'Bob', age: 7}
    ];

    let actual = adults(ppl);

    expect(actual).to.eql([ 'John', 'Jane' ])
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
    const peeps = [
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 }
    ];
    let actual1 = countScores(ppl);
    let expected1 = { Anthony: 2, Fred: 10, Winnie: 12 }
    let actual2 = countScores(peeps);
    let expected2 = { Anthony: 4, Fred: 4, Winnie: 6 }

    expect(actual1).to.eql(expected1);
    expect(actual2).to.eql(expected2);
  })
})

describe('firstNPrimes', () => {
  it('should return an array of the first n prime numbers', () => {
    let actual1 = firstNPrimes(0);
    let actual2 = firstNPrimes(1);
    let actual3 = firstNPrimes(4);

    expect(actual1).to.eql([]);
    expect(actual2).to.eql([2]);
    expect(actual3).to.eql([2, 3, 5, 7]);
  })
})

describe('peakFinder', () => {
  it('should return an array containing the indices of all the peaks.', () => {
    let actual1 = peakFinder([1, 2, 3, 2, 1]);
    let actual2 = peakFinder([2, 1, 2, 3, 4, 5]);
    let actual3 = peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]);

    expect(actual1).to.eql([2]);
    expect(actual2).to.eql([0, 5]);
    expect(actual3).to.eql([2, 6, 8]);
  })
})

describe('divisibleByThreePairSum', () => {
  it('should return an array of all the pairs of indices, whose elements sum to a multiple of three', () => {
    const actual1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
    const actual2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);


    expect(actual1).to.eql([[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]);
    expect(actual2).to.eql([[1, 3]]);
  })
})

describe('zipArray', () => {
  it('should take in two arrays and "zip" them together by returning a single 2D-array', () => {
    const a1 = ['a', 'b', 'c', 'd'];
    const a2 = [10, 20, 30, 40];

    const actual1 = zipArray(a1, a2);
    expect(actual1).to.eql([['a', 10], ['b', 20], ['c', 30], ['d', 40]]);
  })
})

describe('twoDimensionalTotal', () => {
  it('takes in a 2D array of numbers and returns the total sum of all elements', () => {
    const arr1 = [
      [5, 2, 5, 3],
      [12, 13],
    ];
    const arr2 = [
      [2],
      [1, 9],
      [1, 1, 1]
    ]

    let actual1 = twoDimensionalTotal(arr1);
    let actual2 = twoDimensionalTotal(arr2);

    expect(actual1).to.equal(40)
    expect(actual2).to.equal(15)
  })
})

describe('countInnerElement', () => {
  it('should return an object that counts how many times each element in each sub array repeats.', () => {

    const arr1 = [
      [1, 2, 4, 5],
      [2, 7, 4],
      [1, 4, 5, 2, 7]
    ]
    const arr2 = [
      ['a','b','c','d'],
      ['a','b'],
      ['a','c','d','a']
    ]

    let actual1 = countInnerElement(arr1)
    let actual2 = countInnerElement(arr2)

    expect(actual1).to.eql({1: 2, 2: 3, 4: 3, 5: 2, 7: 2})
    expect(actual2).to.eql({a: 4, b: 2, c: 2, d: 2})
  })
})

describe('twoDiff', () => {
  it('return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2.', () => {
    let actual1 = twoDiff([2, 3, 4, 6, 1, 7])
    let actual2 = twoDiff([0, 2, 4, 3, 5])
    let actual3 = twoDiff([])

    expect(actual1).to.eql([[0, 2], [1, 4], [2, 3]])
    expect(actual2).to.eql([[0, 1], [1, 2], [3,4]])
    expect(actual3).to.eql([])
  })
})

describe('arrayDiff', () => {
  it('should return a new array, containing the elements of arr1 that are not also in arr2', () => {
    const array1 = [1, 23, 2, 43, 3, 4]
    const array2 = [3, 23]
    let actual1 = arrayDiff(array1, array2)

    const array3 = ['a', 'ab', 'c', 'd', 'c']
    const array4 = ['d']
    let actual2 = arrayDiff(array3, array4)

    expect(actual1).to.eql([1, 2, 43 ,4])
    expect(actual2).to.eql(['a', 'ab', 'c', 'c'])
  })
})

describe('valueCounter', () => {
  it('should return the number of times val repeats as a value in obj.', () => {

    const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
    const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
    const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }

    let actual1 = valueCounter(obj1, 'Anne')
    let actual2 = valueCounter(obj2, 88)
    let actual3 = valueCounter(pairs, 'Roman')

    expect(actual1).to.equal(3)
    expect(actual2).to.equal(0)
    expect(actual3).to.equal(2)
  })
})

describe('elementCount', () => {
  it('should return an object that counts the elements in the array', () => {
    let actual1 = elementCount(["a", "a", "b", "b"]);
    let actual2 = elementCount(['c', 'a', 'c', 'a', 'b']);

    expect(actual1).to.eql({ "a" : 2, "b" : 2 })
    expect(actual2).to.eql({ "c": 2, "a": 2, "b": 1 })
  })
})

describe('nextTwoPrimes', () => {
  it('should take a number and return the next two prime numbers greater than num.', () => {

    let actual1 = nextTwoPrimes(2);
    let actual2 = nextTwoPrimes(3);
    let actual3 = nextTwoPrimes(7);
    let actual4 = nextTwoPrimes(8);
    let actual5 = nextTwoPrimes(20);
    let actual6 = nextTwoPrimes(97);

    expect(actual1).to.eql([ 3, 5 ])
    expect(actual2).to.eql([ 5, 7 ])
    expect(actual3).to.eql([ 11, 13 ])
    expect(actual4).to.eql([ 11, 13 ])
    expect(actual5).to.eql([ 23, 29 ])
    expect(actual6).to.eql([ 101, 103 ])
  })
})

describe('pairProduct', () => {
  it('should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.', () => {
    let actual1 = pairProduct([1, 2, 3, 4, 5], 4);
    let actual2 = pairProduct([1, 2, 3, 4, 5], 8);
    let actual3 = pairProduct([1, 2, 3, 12, 8], 24);

    expect(actual1).to.eql([[0, 3]])
    expect(actual2).to.eql([[1, 3]])
    expect(actual3).to.eql([[1, 3], [2, 4]])
  })
})

describe('twoDimensionalSize', () => {
  it('should return the total number of elements in the 2D-array.', () => {
    const arr1 = [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8, 9]
    ];
    const arr2 = [
      ['a'],
      ['b', 'c', 'd', 'e']
    ];

    let actual1 = twoDimensionalSize(arr1);
    let actual2 = twoDimensionalSize(arr2);

    expect(actual1).to.equal(9)
    expect(actual2).to.equal(5)
  })
})

describe('longWordCount', () => {
  it('returns the count of words longer than 7 characters.', () => {
    let actual1 = longWordCount("");
    let actual2 = longWordCount("short words only");
    let actual3 = longWordCount("one reallylong word");
    let actual4 = longWordCount("two reallylong words inthisstring");
    let actual5 = longWordCount("allwordword longwordword wordswordword");
    let actual6 = longWordCount("seventy schfifty five");

    expect(actual1).to.equal(0)
    expect(actual2).to.equal(0)
    expect(actual3).to.equal(1)
    expect(actual4).to.equal(2)
    expect(actual5).to.equal(3)
    expect(actual6).to.equal(1)
  })
})

describe('factorial', () => {
  it('should return the factorial of the number n.', () => {
    const actual1 = factorial(1);
    const actual2 = factorial(4);
    const actual3 = factorial(5);
    const actual4 = factorial(10);

    expect(actual1).to.equal(1)
    expect(actual2).to.equal(24)
    expect(actual3).to.equal(120)
    expect(actual4).to.equal(3628800)
  })
})

describe('lcm', () => {
  it('should return the lowest number which is a multiple of both num1 and num2', () => {

    const actual1 = lcm(2, 3);
    const actual2 = lcm(6, 10);
    const actual3 = lcm(24, 26);

    expect(actual1).to.equal(6)
    expect(actual2).to.equal(30)
    expect(actual3).to.equal(312)
  })
})

describe('hipsterfyWord', () => {
  it('should return the string with the last vowel removed. \'y\' is not a vowel.', () => {
    const actual1 = hipsterfyWord('proper')
    const actual2 = hipsterfyWord('tonic')
    const actual3 = hipsterfyWord('PANTHER')
    const actual4 = hipsterfyWord('BACKWARDS')

    expect(actual1).to.equal('propr')
    expect(actual2).to.equal('tonc')
    expect(actual3).to.equal('PANTHR')
    expect(actual4).to.equal('BACKWRDS')
  })
})


describe('hipsterfy sentence', () => {
  it('should remove the last vowel from each word. \'y\' is not a vowel.', () => {

    const actual1 = hipsterfy("proper");
    const actual2 = hipsterfy("proper tonic panther");
    const actual3 = hipsterfy("towel flicker banana");
    const actual4 = hipsterfy("runner anaconda");
    const actual5 = hipsterfy("turtle cheeseburger fries");

    expect(actual1).to.equal("propr")
    expect(actual2).to.equal("propr tonc panthr")
    expect(actual3).to.equal("towl flickr banan")
    expect(actual4).to.equal("runnr anacond")
    expect(actual4).to.equal("turtl cheeseburgr fris")
  })
})

describe('objectToString', () => {
  it('should return a string representing the counts of each character.', () => {
    const actual1 = objectToString({ a : 2, b: 4, c: 1 })
    const actual2 = objectToString({ b: 1, o: 2, t: 1 })

    expect(actual1).to.equal('aabbbbc')
    expect(actual1).to.equal('boot')
  })
})

describe('shortestWord', () => {
  it('should return the shortest word of a sentence.', () => {

    const actual1 = shortestWord('app academy is cool')
    const actual2 = shortestWord('programming bootcamp')

    expect(actual1).to.equal('is')
    expect(actual2).to.equal('bootcamp')
  })
})

describe('greatestCommonFactor', () => {
  it('should return the largest number that is divides both num1 and num2.', () => {
    const actual1 = greatestCommonFactor(15, 25)
    const actual2 = greatestCommonFactor(16, 24)
    const actual3 = greatestCommonFactor(7, 11)

    expect(actual1).to.equal(5)
    expect(actual2).to.equal(8)
    expect(actual3).to.equal(1)
  })
})


describe('isPassing', () => {
  it('should should return true if the average assessment score is at least 70. It should return false otherwise.', () => {
    const assessments1 = [
      { number: 1, score: 60 },
      { number: 2, score: 90 },
      { number: 3, score: 80 },
      { number: 4, score: 100 },
      { number: 5, score: 85 }
    ];

    const assessments2 = [
      { number: 1, score: 60 },
      { number: 2, score: 20 },
      { number: 3, score: 45 }
    ];

    const actual1 = isPassing(assessments1)
    const actual2 = isPassing(assessments2)

    expect(actual1).to.be.true;
    expect(actual2).to.be.false
  })
})

describe('valueConcat', () => {
  it('should return a new array where each element is concatenated with it\'s corresponding value from the object.', () => {

    const arr = ['alex', 'maurice', 'meagan', 'ali'];
    const obj = { alex: 'bronca', ali: 'harris' }

    const actual1 = valueConcat(arr, obj)
    const actual2 = valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })

    expect(actual1).to.eql([ 'alexbronca', 'maurice', 'meagan', 'aliharris' ])
    expect(actual2).to.eql([ 'a', 'b2', 'c3' ])
  })
})

describe('threeInARow', () => {
  it('should return true if the array contains 3 of the same number consecutively. ', () => {

    const actual1 = threeInARow([4, 3, 7, 7, 7, 13, 8]);
    const actual2 = threeInARow([10, 9, 20, 33, 3, 3]);

    expect(actual1).to.be.true;
    expect(actual2).to.be.false
  })
})

describe('variableNameify', () => {
  it('should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.', () => {
    const actual1 = variableNameify(['is', 'prime'])
    const actual2 = variableNameify(['remove', 'last', 'vowel'])
    const actual3 = variableNameify(['MaX', 'VALUE'])

    expect(actual1).to.equal('isPrime')
    expect(actual1).to.equal('removeLastVowel')
    expect(actual1).to.equal('maxValue')
  })
})

describe('threeIncreasing', () => {
  it('should return true if the array contains 3 consecutive numbers in increasing order. ', () => {
    const actual1 = threeIncreasing([3, 2, 11, 12, 13, 2, 4]);
    const actual2 = threeIncreasing([7, 2, 4, 5, 2, 1, 6]);

    expect(actual1).to.be.true
    expect(actual2).to.be.false
  })
})

describe('reverse2D', () => {
  it('should return a string representing the elements of the array in reverse order.', () => {
    const arr1 = [
      ['a', 'b', 'c', 'd'],
      ['e', 'f'],
      ['g', 'h', 'i']
    ];
    const arr2 = [
      ['Julian', 'Matt', 'Mike'],
      ['Oscar', 'Patrick']
    ];

    const actual1 = reverse2D(arr1)
    const actual2 = reverse2D(arr2)

    expect(actual1).to.equal('ihgfedcba')
    expect(actual2).to.equal('PatrickOscarMikeMattJulian')

  })
})

describe('reverb', () => {
  it('should return the word with all characters after the last vowel repeated.', () => {
    const actual1 = reverb('running');
    const actual2 = reverb('wild');
    const actual3 = reverb('debugged');
    const actual4 = reverb('my');

    expect(actual1).to.equal('runninging')
    expect(actual2).to.equal('wildild')
    expect(actual3).to.equal('debuggeded')
    expect(actual4).to.equal('my')
  })
})

describe('countRepeats', () => {
  it('returns the number of letters that appear more than once in the string.', () => {
    const actual1 = countRepeats('calvin');
    const actual2 = countRepeats('caaaalvin');
    const actual3 = countRepeats('pops');
    const actual4 = countRepeats('mississippi');
    const actual5 = countRepeats('hellobootcampprep');

    expect(actual1).to.equal(0)
    expect(actual2).to.equal(1)
    expect(actual3).to.equal(1)
    expect(actual4).to.equal(3)
    expect(actual5).to.equal(4)
  })
})

describe('pairsToString', () => {
  it('should return a string corresponding to the pairs.', () => {
    const array1 = [
      ['a', 3],
      ['b', 1],
      ['c', 2]
    ];
    const array2 = [
      ['f', 1],
      ['o', 2],
      ['d', 1],
      ['!', 1]
    ];

    const actual1 = pairsToString(array1);
    const actual2 = pairsToString(array2);

    expect(actual1).to.equal('aaabcc')
    expect(actual2).to.equal('food!')
  })
})

describe('countAdjacentSums', () => {
  it('should count the number of times that two adjacent numbers in an array add up to n.', () => {
    const actual1 = countAdjacentSums([1, 5, 1], 6)
    const actual2 = countAdjacentSums([7, 2, 4, 6], 7)
    const actual3 = countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)

    expect(actual1).to.equal(2)
    expect(actual2).to.equal(0)
    expect(actual3).to.equal(3)
  })
})

describe('signFlipCount', () => {
  it('hould return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa.', () => {
    const actual1 = signFlipCount([5, 6, 10, 3]);
    const actual2 = signFlipCount([-12, 0, -3, -5]);
    const actual3 = signFlipCount([-12, 10, -3, -5]);
    const actual4 = signFlipCount([1, -2, -3, -4]);
    const actual5 = signFlipCount([-1, 11.3, -3, 100]);

    expect(actual1).to.equal(0)
    expect(actual2).to.equal(0)
    expect(actual3).to.equal(2)
    expect(actual4).to.equal(1)
    expect(actual5).to.equal(3)
  })
})


describe('powerSequence', () => {
  it('should return an array containing a power sequence with the given length', () => {
    const actual1 = powerSequence(3, 4);
    const actual2 = powerSequence(2, 6);
    const actual3 = powerSequence(8, 3);

    expect(actual1).to.eql([ 3, 9, 27, 81 ])
    expect(actual2).to.eql([ 2, 4, 8, 16, 32, 64 ])
    expect(actual3).to.eql([ 8, 64, 512 ])
  })
})

describe('collapseString', () => {
  it('should return the string where \'streaks\' of consecutive characters are collapsed to a single character.', () => {
    const actual1 = collapseString('apple');
    const actual2 = collapseString('AAAaalviiiiin!!!');
    const actual3 = collapseString('hello   app academy');

    expect(actual1).to.equal('aple')
    expect(actual2).to.equal('Aalvin!')
    expect(actual3).to.equal('helo ap academy')
  })
})

describe('oddWordsOut', () => {
  it('should return the sentence where words with an odd number of characters are removed.', () => {
    const actual1 = oddWordsOut('go to the store and buy milk');
    const actual2 = oddWordsOut('what is the answer');

    expect(actual1).to.equal('go to milk')
    expect(actual2).to.equal('what is answer')
  })
})

describe('mindPsAndQs', () => {
  it('should return the length of the longest consecutive streak of the letters \'P\' and \'Q\'.', () => {

    const actual1 = mindPsAndQs('BOOTCAMP');
    const actual2 = mindPsAndQs('APCDQQPPC');
    const actual3 = mindPsAndQs('PQPQ');
    const actual4 = mindPsAndQs('PPPXQPPPQ');

    expect(actual1).to.equal(1)
    expect(actual1).to.equal(4)
    expect(actual1).to.equal(4)
    expect(actual1).to.equal(5)
  })
})

describe('commonFactors', () => {
  it('should return an array that contains the common factors between both numbers.', () => {
    const actual1 = commonFactors(12, 50);  // =>
    const actual2 = commonFactors(6, 24);  // =>
    const actual3 = commonFactors(11, 22);  // =>
    const actual4 = commonFactors(45, 60);  // =>

    expect(actual1).to.eql([1, 2])
    expect(actual2).to.eql([1, 2, 3, 6])
    expect(actual3).to.eql([1, 11])
    expect(actual4).to.eql([1, 3, 5, 15])
  })
})

describe('commonPrimeFactors', () => {
  it('should return an array of all prime factors that are common between the two numbers', () => {
    const actual1 = commonPrimeFactors(12, 50);
    const actual2 = commonPrimeFactors(6, 24);
    const actual3 = commonPrimeFactors(11,22);
    const actual4 = commonPrimeFactors(45, 60);

    expect(actual1).to.eql([2])
    expect(actual2).to.eql([2, 3])
    expect(actual3).to.eql([11])
    expect(actual4).to.eql([3, 5])
  })
})

describe('splitHalfArray', () => {
  it('should returns two halves of that array split in the middle.', () => {
    const actual1 = splitHalfArray([1, 2, 3, 4, 5]);
    const actual2 = splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);

    expect(actual1).to.eql([[ 1, 2], [4, 5 ]])
    expect(actual2).to.eql([[ 'a', 'b', 'c'], ['d', 'e', 'f' ]])
  })
})

describe('threeUniqueVowels', () => {
  it('should returns true if the string contains at least three different vowels.', () => {
    const actual1 = threeUniqueVowels('delicious');
    const actual2 = threeUniqueVowels('the bootcamp');
    const actual3 = threeUniqueVowels('bootcamp');
    const actual4 = threeUniqueVowels('dog');
    const actual5 = threeUniqueVowels('go home');

    expect(actual1).to.be.true
    expect(actual2).to.be.true
    expect(actual3).to.be.false
    expect(actual4).to.be.false
    expect(actual5).to.be.false
  })
})

describe('vowelShift', () => {
  it('should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.', () => {
    const actual1 = vowelShift('bootcamp');
    const actual2 = vowelShift('hello world');
    const actual3 = vowelShift('on the hunt');

    expect(actual1).to.equal('buutcemp')
    expect(actual2).to.equal('hillu wurld')
    expect(actual3).to.equal('un thi hant')
  })
})

describe('hasSymmetry', () => {
  it('should return true if the array has symmetry, false otherwise.', () => {
    const actual1 = hasSymmetry([1, 2, 3, 3, 2, 1])
    const actual2 = hasSymmetry([1, 2, 3, 3, 4, 1])
    const actual3 = hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])
    const actual4 = hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])

    expect(actual1).to.be.true
    expect(actual2).to.be.false
    expect(actual3).to.be.true
    expect(actual4).to.be.false
  })
})

describe('evenSumArray', () => {
  it('should returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.', () => {
    const actual1 = evenSumArray([6, 7, 5])
    const actual2 = evenSumArray([2, 8, 3, 5])

    expect(actual1).to.eql([ 12, 12, 6 ])
    expect(actual2).to.eql([ 2, 20, 2, 6 ])
  })
})

describe('numsToWords', () => {
  it('should return a new string where each digit character is replaced with it\'s "word" representation.', () => {
    const actaul1 = numsToWords('42')
    const actaul2 = numsToWords('123')
    const actaul3 = numsToWords('159598')

    expect(actaul1).to.equal('FourTwo')
    expect(actaul1).to.equal('OneTwoThree')
    expect(actaul1).to.equal('OneFiveNineFiveNineEight')
  })
})

describe('moreDotLessDash', () => {
  it('returns the true if the string contains more dots (\'.\') than dashes (\'-\'), false otherwise.', () => {
    const actual1 = moreDotLessDash('2-D arrays are fun. I think.');
    const actual2 = moreDotLessDash('.-.-.');
    const actual3 = moreDotLessDash('.-');
    const actual4 = moreDotLessDash('..--');

    expect(actual1).to.be.true
    expect(actual2).to.be.true
    expect(actual3).to.be.false
    expect(actual4).to.be.false

  })
})
