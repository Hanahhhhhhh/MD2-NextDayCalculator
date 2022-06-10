export class NextDayCalculator {
    year: string
    month: string
    day: string
    date: string
    static MONTH_HAS_31_DAYS = 31
    static MONTH_HAS_30_DAYS = 30
    constructor(year: string, month: string, day: string) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.date = month + "/" + day + "/" + year
    };


    nextDate() {
        if(this.checkDate()){
            let today = new Date(this.date);
            today.setDate(today.getDate() + 1);
            return today.toLocaleDateString();
        } else {
            return "wrong date"
        }
    }

    checkleapYear() {
        return  Number(this.year) % 400 == 0 ||
            Number(this.year) % 100 == 0 ||
            Number(this.year) % 4 == 0
    }

    checkMonth() {
        return Number(this.month) < 13 && Number(this.month) > 0;
    }

    checkDay() {
        let month = Number(this.month)
        let day = Number(this.day)
        if (day < 0) return false;
        this.checkFebruaryDateValidate()
        if (this.checkMonthsHave31days() && day > NextDayCalculator.MONTH_HAS_31_DAYS) {
            return false;
        }
        if (day > NextDayCalculator.MONTH_HAS_30_DAYS && this.checkMonthsHave30days()){
            return false;
        }
        return true
    }

    checkDate(){
        return this.checkMonth() && this.checkDay()
    }

    checkMonthsHave31days(){
        let month = Number(this.month)
        return  month == 12 ||
            month == 1  ||
            month == 3  ||
            month == 5  ||
            month == 7  ||
            month == 8  ||
            month == 10;
    }

    checkMonthsHave30days(){
        let month = Number(this.month)
        return month == 4 || month == 6 || month == 9 || month == 11
    }

    checkFebruaryDateValidate(){
        let month = Number(this.month)
        let day = Number(this.day)
        if (this.checkleapYear() && month == 2 && day > 29) {
            return false;
        }
        if (day > 28 && month == 2 && !this.checkleapYear()) {
            return false;
        }
    }
}

// let a = new NextDayCalculator("2020", "2", "29")
// console.log(a.nextDate());