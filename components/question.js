import Answer from "/components/answers.js";

export default {
    props: ["question_title", "answers"],
    components: { Answer },

    created() {
        this.rightAnswer = this.answers.find((answer) => answer.correct);
    },

    data() {
        return {
            rightAnswer: null,
            selectedAnswer: null,
        };
    },

    methods: {
        handleSelectAnswer(isCorrect) {
            this.selectedAnswer = isCorrect;
        },

        emitNextQuestion() {
            if (this.selectedAnswer == "false") {
                this.selectedAnswer = "Faux";
            } else {
                this.selectedAnswer = "Vrai";
            }

            this.$emit("nextQuestion", {
                title: this.question_title,
                rightAnswer: this.rightAnswer,
                selectedAnswer: this.selectedAnswer,
            });
        },
    },

    template: `<div class="question">
    <h1>{{question_title}}</h1>
    <div v-for="answer in answers" >
        <answer :answer_title="answer.title" :answer_status="answer.correct" @select="handleSelectAnswer"></answer>
    </div>
    <button v-if="selectedAnswer !== null" v-on:click="emitNextQuestion" class="mt-3 btn btn-primary btn-block">Next</button>
</div>`,
};
