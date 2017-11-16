import{
    filterNegativeNumbers,
    functionalfilterNegativeNumbers,
    functionalMapNumbersIntoStrings,
    mapNumbersIntoStrings,
    generateRandomColor,
    isPalindrome,   
    printType,
    Person,
    printOutPersonAge
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
    let spy;
    beforeEach(() => {
        spy = jest.spyOn(console, 'log');
    });

    it('PrintType', () => {
        printType('datos');
        expect(spy).toHaveBeenCalledWith('string');
        printType(2);
        expect(spy).toHaveBeenCalledWith('number');
    });
});

describe(Person, () => {
    let student;
    let spy;

    beforeAll(() => {
        student = new Person('John', 25);
        spy = jest.spyOn(console, 'log');
    });

    it('Should show name person', () => {
        student.printName();
        expect(spy).toHaveBeenCalledWith('John');
    });

    it('Should show age person', () => {
        printOutPersonAge(student);
        expect(spy).toHaveBeenCalledWith(25);
    }

    )
});

describe(generateRandomColor, () => {
    it('Should return object random RGB color object', () => {
        expect(generateRandomColor()).toMatchObject(
            {
                r: expect.any(Number),
                g: expect.any(Number),
                b: expect.any(Number)
            }
        );
    });
});




