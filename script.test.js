import{
    filterNegativeNumbers,
    functionalfilterNegativeNumbers,
    functionalMapNumbersIntoStrings,
    mapNumbersIntoStrings,
    generateRandomColor,
    isPalindrome,   
    printType
} from './functions.js';

describe(filterNegativeNumbers, () =>{
    it('Should return a new array without negative numbers', () => {
        const arrayNumber = [-4, -6, -5, 0, 34, 54, -7];
        expect(filterNegativeNumbers(arrayNumber)).toEqual([0, 34, 54]);
        expect(functionalfilterNegativeNumbers(arrayNumber)).toEqual([0, 34, 54]);
        expect(filterNegativeNumbers([])).toEqual([]);
        expect(functionalfilterNegativeNumbers([])).toEqual([]);
    });
});

describe(mapNumbersIntoStrings, () =>{
    it('Should return a new array with string', () => {
        const arrayNumber = [-4, -6, -5, 0, 34, 54, -7];
        expect(mapNumbersIntoStrings(arrayNumber)).toEqual(['-4', '-6', '-5', '0', '34', '54', '-7']);
        expect(functionalMapNumbersIntoStrings(arrayNumber)).toEqual(['-4', '-6', '-5', '0', '34', '54', '-7']);
        expect(mapNumbersIntoStrings([])).toEqual([]);
        expect(functionalMapNumbersIntoStrings([])).toEqual([]);
        expect(mapNumbersIntoStrings(['string'])).toEqual(['string']);
        expect(functionalMapNumbersIntoStrings(['string'])).toEqual(['string']);
    });
});

describe(isPalindrome, () =>{
    it('Should return true with a palindrome word', () => {
        expect(isPalindrome('madam')).toBeTruthy();
        expect(isPalindrome('esternocleidomastoideos')).toBeFalsy();
    });

    it('Should return true with a palindrome phrase', () => {
        expect(isPalindrome('A Bali su flan anal fusilaba')).toBeTruthy();
        expect(isPalindrome('Si te gusta esto')).toBeFalsy();
    });
});

describe(printType, () =>{
    beforeEach(() => {
        global.console = {
            log: jest.fn()
        }
    });

    it('PrintType', () => {
        printType('datos');
        expect(global.console.log).toHaveBeenCalledWith('string');
    });
});




