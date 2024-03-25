<script lang="ts">

  let arr1 = [
        {id:'A',value:'A1ccessibility'},
        {id:'B',value:'HT2ML'},
        {id:'C',value:'C3SS'},
        {id:'D',value:'Jav4aScript'}
    ];

	import dataQuestions from '$lib/data/data.json';


    // const responseData = await fetch('$lib/data/data.json').then((data) => data.json());


</script>


<section class="questions">
q---q


{dataQuestions.quizzes[2].title}

    <div class="detail"> 
        <div class="title">HTML</div>
        <div class="num">question 1 of 10</div>
        <div class="question">What does HTML stand for?</div>
        <div class="progressBar"></div>
    </div>

    <div class="questions_list"> 


{dataQuestions.quizzes[2].questions.length}
{dataQuestions.quizzes[2].questions[1].question}
{dataQuestions.quizzes[2].questions[1].options[0]}

{#each arr1 as item }

        <button class="" >
        <span class="">
            {item.id}
        </span> 
            {item.value}
        </button>
{/each}

    </div>

    <div class="question_btn_box"> 
        <button class="" >
            Submit Answer
        </button>
    </div>


</section>


<style>
	

</style>
