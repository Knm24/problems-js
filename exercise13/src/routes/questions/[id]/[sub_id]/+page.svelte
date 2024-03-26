<script lang="ts">
  import { page } from '$app/stores';
  import dataQuestions from '$lib/data/data.json';
  import { goto } from '$app/navigation';

  let id = Number($page.params.id);
  let sub_id = Number($page.params.sub_id);
  let score = 0;
  let validAnswers = [];

  function checkAnswer(ev, answerID) {
    const selectedOption = dataQuestions.quizzes[id].questions[sub_id].options[answerID];
    const correctAnswer = dataQuestions.quizzes[id].questions[sub_id].answer;

    if (selectedOption === correctAnswer) {
      score++;
      validAnswers.push({ question: dataQuestions.quizzes[id].questions[sub_id].question, answer: correctAnswer });
    }
    
    localStorage.setItem('validAnswers', JSON.stringify(validAnswers));
  }

  function goNextQuestion() {
    sub_id++;
    if (sub_id < dataQuestions.quizzes[id].questions.length) {
      goto(`/questions/${id}/${sub_id}`);
    } else {
      goto(`/finish/${score}`);
    }
  }
</script>

<section class="questions">
  <div class="detail"> 
    <div class="title">{dataQuestions.quizzes[id].title}</div>
    <div class="num">Question {sub_id + 1} of {dataQuestions.quizzes[id].questions.length}</div>
    <div class="question">{dataQuestions.quizzes[id].questions[sub_id].question}</div>
    <div class="progressBar"></div>
  </div>

  <div class="questions_list"> 
    <ul>
      {#each dataQuestions.quizzes[id].questions[sub_id].options as option, index}
        <li>
          <button class="btn_question" on:click={(ev) => checkAnswer(ev, index)}>
            <span class="">{String.fromCharCode(65 + index)}:</span> {option}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  <div class="question_btn_box"> 
    <button class="btn_answer" on:click={goNextQuestion}>
      Submit Answer
    </button>
  </div>
</section>

<style>
</style>
