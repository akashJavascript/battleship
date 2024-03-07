import Ship from './ship';

const shipInstance = new Ship(4);
describe('Ship is an object that returns length, number of times hit', () => {
    test('Ship is an object', () => {
        expect(typeof shipInstance === 'object').toBeTruthy();
    });
    test('Ship has a length', () => {
        expect(shipInstance.length).toBe(4);
    });
    test('Ship has a hits number', () => {
        expect(shipInstance.hitCount).toBe(0);
    });
});