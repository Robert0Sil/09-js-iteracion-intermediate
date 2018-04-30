var expect = chai.expect;

describe('sumPositives()', function() {
  it('should be a function', function() {
    return expect(sumPositives).to.be.a('function');
  });

  it('should return 12 for [3, -1, 4, 5, -3, -4]', function() {
    return expect(sumPositives([3, -1, 4, 5, -3, -4])).to.equal(12);
  });

  it('should return 170 for [-11, 30,-20, 40, 100]', function() {
    return expect(sumPositives([-11, 30,-20, 40, 100])).to.equal(170);
  });

  it('should return 205 for [4 ,-10,-30, -4, 201]', function() {
    return expect(sumPositives([4 ,-10,-30, -4, 201])).to.equal(205);
  });
});

describe('hasDoubleLetters()', function() {
  it('should be a function', function() {
    return expect(hasDoubleLetters).to.be.a('function');
  });

  it('should return true for "stutter"', function() {
    return expect(hasDoubleLetters('stutter')).to.be.true;
  });

  it('should return false for "prospect"', function() {
    return expect(hasDoubleLetters('prospect')).to.be.false;
  });

  it('should return false for "shoehorn', function() {
    return expect(hasDoubleLetters('shoehorn')).to.be.false;
  });

  it('should return true for "Aardvark"', function() {
    return expect(hasDoubleLetters('Aardvark')).to.be.true;
  });
});

describe('maxOfArray()', function() {
  it('should be a function', function() {
    return expect(maxOfArray).to.be.a('function');
  });

  it('should return 21 for [2, 7, 3, 4, 21, 0]', function() {
    return expect(maxOfArray([2,7,3,4,21,0])).to.equal(21);
  });

  it('should return 100 for [100, 9, 8, 7, 6, 10]', function() {
    return expect(maxOfArray([100,9,8,7,6,10])).to.equal(100);
  });

  it('should return 201 for [84, 32, 11, 31, 12, 201]', function() {
    return expect(maxOfArray([84,32,11,31,12,201])).to.equal(201);
  });
});

describe('findLongestWord()', function() {
  it('should be a function', function() {
    return expect(findLongestWord).to.be.a('function');
  });

  it('should return "baskets" from "i have baskets full of lemons"', function() {
    return expect(findLongestWord('i have baskets full of lemons')).to.equal('baskets');
  });

  it('should return "Alexander" from "Alexander shouldn’t talk anymore"', function() {
    return expect(findLongestWord('Alexander shouldn’t talk anymore')).to.equal('Alexander');
  });

  it('should return "Texas" from "don’t mess with Texas"', function() {
    return expect(findLongestWord('don’t mess with Texas')).to.equal('Texas');
  });

  it('should return "time" from "a time to act."', function() {
    return expect(findLongestWord('a time to act.')).to.equal('time');
  });
});

describe('sumDigits()', function() {
  it('should be a function', function() {
    return expect(sumDigits).to.be.a('function');
  });

  it('should return 6 for "123"', function() {
    return expect(sumDigits(123)).to.equal(6);
  });

  it('should return 11 for "911"', function() {
    return expect(sumDigits(911)).to.equal(11);
  });

  it('should return 12 for "8040"', function() {
    return expect(sumDigits(8040)).to.equal(12);
  });

  it('should return 15 for "173220"', function() {
    return expect(sumDigits(173220)).to.equal(15);
  });
});

describe('hasComplements()', function() {
  before(function() {
    this.oddsArray = [1, 3, 5, 7, 9, 11, 13];
  });

  it('should be a function', function() {
    return expect(hasComplements).to.be.a('function');
  });

  it('should return true for 6', function() {
    return expect(hasComplements(6, oddsArray)).to.be.true;
  });
    

  it('should return false for 7', function() {
    return expect(hasComplements(7, oddsArray)).to.be.false;
  });

  it('should return true for 14', function() {
    return expect(hasComplements(14, oddsArray)).to.be.true;
  });

  it('should return false for 17', function() {
    return expect(hasComplements(17, oddsArray)).to.be.false;
  });

  it('Should return true for 7', function() {
    return expect(hasComplements(7, anotherArray)).to.be.true;
  });

  it('should return false for 9', function() {
    return expect(hasComplements(9,  anotherArray)).to.be.false;
  });

  it('Should return true for 14', function() {
    return expect(hasComplements(14, anotherArray)).to.be.true;
  });

  it('Should return false for 15', function() {
    return expect(hasComplements(15, anotherArray)).to.be.false;
  });
});
