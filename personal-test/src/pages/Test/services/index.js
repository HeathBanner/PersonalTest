export function handleMultiple(guess, state, questionData) {
    const answer = questionData[state.question - 1].answer;
    const isFinished = state.question >= 10;
    let reviewData = [];

    if (guess !== answer) {
        state.review.push(state.question - 1);
        state.incorrect++;
        state.checked = [];
    } else {
        state.correct++;
        state.checked = [];
    }
    if (!isFinished) state.question++;
    if (state.review.length > 0 && isFinished) {
        reviewData = processReview(state, questionData);
        state.reviewData = reviewData;
        state.finished = true;
    }

    return state;
};

export function handleCheckbox(state, questionData) {
    const answer = questionData[state.question - 1].answer;
    const isFinished = state.question >= 10;
    let reviewData = [];
    let score = 0;

    state.checked.forEach((option) => {
        if (answer.indexOf(option) >= 0) score++;
        else score--;
    });

    if (score < answer.length) {
        state.review.push(parseInt(state.question - 1));
        state.incorrect++
        state.checked = [];
    } else {
        state.correct++;
        state.checked = [];
    }
    if (state.review.length > 0 && isFinished) {
        reviewData = processReview(state, questionData);
        state.reviewData = reviewData;
        state.finished = true;
    }
    if (!isFinished) state.question++;

    return state;
};

function processReview(state, questionData) {
    const reviewData = state.review.map((question) => {
        return questionData[question];
    });

    return reviewData;
}