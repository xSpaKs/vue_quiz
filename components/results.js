export default {
    props: ["results"],

    methods: {
        calculateScore() {
            let score = 0;
            this.results.forEach((result) => {
                if (result.rightAnswer.title == result.selectedAnswer) {
                    score += 1;
                }
            });
            return score;
        },
    },

    template: `<div class="results">
  <h1>Results</h1>
  <h3 class="mb-4">💯 {{calculateScore()}}/{{results.length}} correct answers</h3>

  <h2 class="mb-4">👀 Your answers</h2>

  <div v-for="result in results">
      <h4>{{result.title}}</h4>
      <div>
      Your answer:
          <span class="">{{result.selectedAnswer}}</span>
      </div>
      <div v-show="result.rightAnswer.title != result.selectedAnswer" class="text-success">
          <strong>✅ &nbsp; Correct answer: {{result.rightAnswer.title}}</strong>
      </div>
      <hr>
  </div>
</div>`,
};
