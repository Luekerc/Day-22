var expect = chai.expect;
// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
describe('max', function (){
    it('should not allow non-numeric input', function (){
        expect(function(){
            max ('a',1)
        }).to.throw('The first argument must be a number.');
        expect(function(){ max ('',1) }).to.throw('The first argument must be a number.');
        expect(function(){ max (1,'') }).to.throw('The second argument must be a number.');
        expect(function(){ max (1,'b') }).to.throw('The second argument must be a number.');
    });
    it('Should return the max', function () {
        expect(max(2,1)).to.equal(2);
        expect(max(1,2)).to.equal(2);
        expect(max(38,87)).to.equal(87);
        expect(max(-4,12)).to.equal(12);
        expect(max(-5,-17)).to.equal(-5);
        expect(max(.23,.87)).to.equal(.87);
        expect(max(2,2)).to.equal(2 + ' and ' + 2 + ' are equal');
    });
});

// function maxOfThree(){
describe('maxOfThree', function() {
	it('should not allow non-numeric input', function() {
		expect(function() {
			maxOfThree('a', 1, 2) 
		}).to.throw('The first argument must be a number.');
		expect(function() { maxOfThree(12, 'b', 2) }).to.throw('The second argument must be a number.');
		expect(function() { maxOfThree(3, 5, 'c') }).to.throw('The third argument must be a number.');
		expect(function() { maxOfThree(3, 5) }).to.throw('The third argument must be a number.');
	});
	it('should return the max', function() {
		expect(maxOfThree(1, 2, 3)).to.equal(3);
		expect(maxOfThree(-1, 6, 4)).to.equal(6);
		expect(maxOfThree(0.1, 0.2, 0)).to.equal(0.2);
		expect(maxOfThree(-1, -2, -3)).to.equal(-1);
	});
});


// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
describe('isVowel', function() {
	it('should not allow numbers', function(){
		expect(function() {
			isVowel(2) 
		}).to.throw('No numbers please.');
		expect(function() { isVowel(2) }).to.throw('No numbers please.');
	});

	it('only allow vowels', function(){
		expect(function() {
			isVowel('F') 
		}).to.throw('Vowels only please my people.');
		expect(function() { isVowel('F') }).to.throw('Vowels only please, my people.');
	});
});


