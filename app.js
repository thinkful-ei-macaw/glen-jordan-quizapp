/* eslint-disable no-undef */
/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: ['red', 'orange', 'pink', 'green'],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: ['1970', '2015', '2019', '2005'],
      correctAnswer: '2019'
    }
  ],
  questionNumber: 0,
  score: 0,
  quizStart: false
};

function clickMe() {
  $('#js-start-btn').click(function() {
    $(location).attr('href', renderQuestion);
  });
}

function questions() {
  const questionArr = store['questions'];
  console.log(questionArr);
  let currentQuestion = questionArr[store.questionNumber];
  console.log(currentQuestion);
  return currentQuestion;
}

function renderQuestion() {
  let data = questions();
  $('main').html(
    `<section>${data.question}</section>
      
      ${data.answers
        .map(e => {
          return `<ul>
          <li class="choose">${e}</li>  
        </ul>`;
        })
        .join('')}`
  );
}

function liClick() {
  $('.choose').on('click', function() {
    alert('HEY');
  });
}

function renderFirstPage() {
  $('main').html(`

<header id="rick-intro">

<h1>THE RICK AND MORTY QUIZ</h1>

</header>

<div id="intro-page">

<img class="circle" src=https://media0.giphy.com/media/OFbrZqxNMu7Ic/giphy.webp?cid=790b7611ebb9f60c4e01f9c285354c380cf85dadcbefabed&rid=giphy.webp />

</div>

<div id="intro-info">
<h3>
It’s time to do some Rick and Morty trivia and only the Rickest of Ricks will be able to pass.
</h3>
</div>

<div id="schwift">

<button id="js-start-btn">GET SCHWIFTY</button>

</div>

`);
}

$(renderFirstPage);
$(clickMe);
$(liClick);

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */
// {
//   <section class='questionScreen'>
//     <form class='questionForm'>
//       <fieldset class='radio'>
//         <legend>${data.question}</legend>$
//         {data.answers
//           .map(answer => {
//             return `<label>
// 				<input type="radio" value="${answer}" name="answer" required>
// 				${answer}
//       </label>`;
//           })
//           .join('')}
//       </fieldset>
//       <button type='submit'>Submit</button>
//     </form>
//   </section>;

// $('form').submit(function(e) {
//   e.preventDefault();
//   nextQuestion();
// });
// }
