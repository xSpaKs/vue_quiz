export default {
    props: ["answer_title"],
    template: `<div class="answer">
      <label> {{answer_title}} </label>
      <input type="radio" name="answer" @change="$emit('select', answer_title)">    
    </div>`,
};
