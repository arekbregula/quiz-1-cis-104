/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.1
 *   @summary Code demonstration: Looping logic :: created: 05.16.2017
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

const MAX_GRADE = 8, MAX_MONTH = 9, MAX_CLASSROOM = 3;
let continueResponse;
let currentGrade, currentClassroom, monthNum;

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setContinueResponse();
    while (continueResponse === 1) {
        setMonthNum();
        setCurrentGrade();
        setCurrentClassroom();
        processPaymentCoupons();
        setContinueResponse();
    }
    for (let i = 0; i < MAX_CLASSROOM; i++) {
        printGoodbye();
    }
}

main();

/**
 * @method
 * @desc continueResponse mutator
 * @returns {null}
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc monthNum mutator
 * @returns {null}
 */
function setMonthNum() {
    if (monthNum !== null && monthNum <= MAX_MONTH) {
        monthNum++;
    } else {
        monthNum = 1;
    }
}

/**
 * @method
 * @desc currentMonth mutator
 * @returns {string}
 */
function setCurrentMonth() {
    //How could you re-factor this method to eliminate the need for a local variable?
    let currentMonth = '';
    switch (monthNum) {
        case 1: currentMonth = 'September';
            break;
        case 2: currentMonth = 'October';
            break;
        case 3: currentMonth = 'November';
            break;
        case 4: currentMonth = 'December';
            break;
        case 5: currentMonth = 'January';
            break;
        case 6: currentMonth = 'February';
            break;
        case 7: currentMonth = 'March';
            break;
        case 8: currentMonth = 'April';
            break;
        case 9: currentMonth = 'May';
            break;
        default: console.log(`Invalid Month`);
    }
    console.log(`\nCurrent Month: ${currentMonth} & ${typeof currentMonth}`);
    return currentMonth;
}

/**
 * @method
 * @desc currentGrade mutator
 * @returns {null}
 */
function setCurrentGrade() {
    if (currentGrade !== null && currentGrade <= MAX_GRADE) {
        currentGrade++;
    } else {
        currentGrade = 0;
    }
    console.log(`\nCurrent Grade: ${currentGrade} & ${typeof currentGrade}`);
}

/**
 * @method
 * @desc currentClassroom mutator
 * @returns {null}
 */
function setCurrentClassroom() {
    if (currentClassroom !== null && currentClassroom <= MAX_CLASSROOM) {
        currentClassroom++;
    } else {
        currentClassroom = 1;
    }
    console.log(`\nCurrent Classroom: ${currentClassroom} & ${typeof currentClassroom}`);
}

/**
 * @method
 * @desc Upper-grade tuition calculator utility method
 * @returns {number}
 */
function setUpperTuition() {
    const BASE_TUITION = 60;
    return BASE_TUITION * currentGrade; //Notice: no local variable needed
}

/**
 * @method
 * @desc Payment coupon utility method
 * @returns {null}
 */
function processPaymentCoupons() {
    const KDG_TUITION = 80;
    while (currentGrade <= MAX_GRADE) {
        while (currentClassroom <= MAX_CLASSROOM) {
            while (monthNum <= MAX_MONTH) {
                if (currentGrade === 0) {
                    console.log(`\n\tThe tuition for month: ${setCurrentMonth()}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`);
                } else {
                    console.log(`\n\tThe tuition for month: ${setCurrentMonth()}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${setUpperTuition()}.`);
                }
                setMonthNum();
            }
            setCurrentClassroom();
            setMonthNum();
        }
        setCurrentGrade();
        setCurrentClassroom();
    }
}

/**
 * @method
 * @desc Print goodbye utility method
 * @returns {null}
 */
function printGoodbye() {
    console.log(`\tGoodbye.`);
}

/*
 The "Hurr Durr, Make 'em Smarter Everyday" private school has contracted you to write software that prints the monthly
 payment coupons for each month, grade, & classroom. The school is in session for 9 months (September - May), goes from
 kindergarten to  grade 8, & has 3 classrooms per grade-level. The monthly base cost for kindergarten is $80. All other
 grades are $60 monthly, multiplied by the current grade.

 Topics:  Loops (while, C-style for), nesting logic, typeof, validation++
 */