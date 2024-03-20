import Quizz from "/components/quizz.js";

const options = {
    data() {
        return {
            questions: [],
        };
    },

    mounted() {
        fetch("data/halloween.json")
            .then((response) => response.json())
            .then((data) => {
                this.questions = data;
                this.current_question = 0;
            })
            .catch((error) => {
                console.error(
                    "Une erreur s'est produite lors du chargement des données :",
                    error
                );
            });
    },

    components: {
        Quizz,
    },
};

Vue.createApp(options).mount("#app");
