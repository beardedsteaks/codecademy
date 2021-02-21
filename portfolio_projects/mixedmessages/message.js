/* This file is to contain the message object for the
mixed messages project */

export const name = 'message';

export function getPhrase (startnum, tasknum, focusnum) {
    const starter = {
        1: `Today is not a good day to `,
        2: `Today is a good day to `,
        3: `Next week would be better to `,
        4: `Tomorrow might be a better day to `,
        5: `You may want to wait until next week to `,

    };

    const task = {
        1: `plan a trip `,
        2: `get a workout in `,
        3: `go for a run `,
        4: `catch up on sleep `,
        5: `go to the beach `,
        6: `cross some items off of your to-do list `,
        7: `get your shopping done `,
        8: `make a budget `,
        9: `clean your place `,
        10: `run those errands `,
        11: `read a book `,
        12: `study a new language `,

    };

    const focus = {

        1: `for yourself.`,
        2: `for work.`,
        3: `with your family.`,
        4: `with a friend.`,
        5: `with a group of friends.`,

    };

    let partA = starter[startnum];
    let partB = task[tasknum];
    let partC = focus[focusnum];

    return `${partA}${partB}${partC}`;

};

export {name, getPhrase};

//console.log(getPhrase(5, 10, 4));
