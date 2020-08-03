export function handleMultiple(guess, answer, state) {
    if (guess !== answer) {
        Object.assign({}, state, {
            question: state.question++,
            incorrect: state.incorrect++,
            checked: []
        });
    } else {
        Object.assign({}, state, {
            question: state.question++,
            correct: state.correct++,
            checked: []
        });
    }
    return state;
};

export function handleCheckbox(answer, state) {
    let score = 0;
    state.checked.forEach((option) => {
        if (answer.indexOf(option) >= 0) score++;
        else score--;
    });
    if (score < answer.length) {
        Object.assign({}, state, {
            question: state.question++,
            incorrect: state.incorrect++,
            checked: []
        });
    } else {
        Object.assign({}, state, {
            question: state.question++,
            correct: state.correct++,
            checked: []
        });
    }
    return state;
};