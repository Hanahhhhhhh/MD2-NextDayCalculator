import {NextDayCalculator} from "../app";

describe('BasicCalculator Testing', () => {

    test('should return an instance of a basic calculator', () => {
        let nextDay: NextDayCalculator = new NextDayCalculator("2018", "1", "1");
        expect(nextDay.nextDate()).toEqual("1/2/2018");
    });

    test('should return an instance of a basic calculator', () => {
        let nextDay: NextDayCalculator = new NextDayCalculator("2018", "1", "31");
        expect(nextDay.nextDate()).toEqual("2/1/2018");
    });

    test('should return an instance of a basic calculator', () => {
        let nextDay: NextDayCalculator = new NextDayCalculator("2018", "4", "30");
        expect(nextDay.nextDate()).toEqual("5/1/2018");
    });

    test('should return an instance of a basic calculator', () => {
        let nextDay: NextDayCalculator = new NextDayCalculator("2018", "2", "28");
        expect(nextDay.nextDate()).toEqual("3/1/2018");
    });

    test('should return an instance of a basic calculator', () => {
        let nextDay: NextDayCalculator = new NextDayCalculator("2020", "2", "29");
        expect(nextDay.nextDate()).toEqual("3/1/2020");
    });

    test('should return an instance of a basic calculator', () => {
        let nextDay: NextDayCalculator = new NextDayCalculator("2018", "12", "31");
        expect(nextDay.nextDate()).toEqual("1/1/2019");
    });

});