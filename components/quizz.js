import Question from "/components/question.js";
import Results from "/components/results.js";

export default {
    props: ["questions"],
    components: {
        Question,
        Results,
    },

    data() {
        return {
            currentQuestionIndex: 0,
            results: [],
        };
    },

    computed: {
        showResults() {
            return this.results.length === this.questions.length;
        },
    },

    methods: {
        handleNextQuestion(answer) {
            this.results.push(answer);
            this.currentQuestionIndex++;
        },
    },

    template: `<div class="quiz">
    <div v-if="showResults">
      <results :results="results"></results>
    </div>
  <div v-for="(question, index) in questions" v-show="index == currentQuestionIndex">
      <h3>❓ Question {{question.id}}/{{questions.length}}</h3>
      <question :question_title="question.title" :answers="question.answers" v-on:nextQuestion="handleNextQuestion"></question>
  </div>
</div>`,
};
