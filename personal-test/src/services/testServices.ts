export interface IState {
    question: number,
    correct: number,
    incorrect: number,
    review: number[],
    reviewData: IQuestions[],
    checked: number[],
    finished: boolean
};

export interface IQuestions {
    question: string,
    codedQuestion?: string[] | undefined,
    answer: any[],
    options: string[] | number[],
    type: string,
    explanation: string[],
    hasCodedOptions?: boolean | undefined
};

export function handleMultiple(guess: string | number, state: IState, questionData: IQuestions[]) {
    const answer: string[] | number[] = questionData[state.question - 1].answer;
    const isFinished: boolean = state.question >= 10;
    let reviewData: IQuestions[] = [];

    if (guess !== answer[0]) {
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

export function handleCheckbox(state: IState, questionData: IQuestions[]) {
    const answer: any[] = questionData[state.question - 1].answer;
    const isFinished: boolean = state.question >= 10;
    let reviewData: IQuestions[] = [];
    let score: number = 0;

    state.checked.forEach((option) => {
        let checked = answer.indexOf(option);
        if (checked !== undefined) score++;
        else score--;
    });

    if (score < answer.length) {
        state.review.push(state.question - 1);
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

function processReview(state: IState, questionData: IQuestions[]) {
    const reviewData: IQuestions[] = state.review.map((question) => {
        return questionData[question];
    });

    return reviewData;
};