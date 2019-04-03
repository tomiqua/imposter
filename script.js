

function survey() {
    let firstName = prompt('Please enter your first name');
    let question1 = prompt('Do you feel like other people always understand new coding concepts faster or better than you? (yes/no)');
    let question2 = prompt('Are you smart enough to be a developer? (yes/no)');
    let question3 = prompt('Do other people think you\'re a bad coder? (yes/no)');
    let question4 = prompt('Has your code failed? (yes/no)');
    let encouragement = ' Hi ' + firstName + ' , you are already a web developer.';




    let questionB = `<p> No one is ever an expert in software development.There will always be more to learn, 
    which means there will always be someone who knows something you don’t. 
    Instead of thinking about what <em>they</em> know, focus on your own skills and knowledge. 
    You will never know everything; instead, try to get comfortable with being uncomfortable. 
    Go after what you don\'t know. Use it to fuel your growth, not your self-doubt. </p>`;

    if (question1 === 'yes') {
        encouragement += questionB;
    }

    let questionC = '<p> In her book, <em> The New Psychology of Success</em>, author Carol Dweck theorizes that some people have a <em>fixed mindset</em>, believing that intelligence is fixed at birth. These people think that the smarter you are, the easier you understand things. But Dweck believes that intelligence is directly tied to effort and challenge.By adopting a < em > growth mindset</em >, you can view obstacles as opportunities to learn, to help you improve. If you\'re feeling inadequate, it\'s a signal that you’re being challenged. This is an opportunity to learn, to become better, and to grow. </p>';

    if (question2 === 'no') {
        encouragement += questionC;
    }

    let questionD = '<p> Impostor syndrome thrives when all you do is think. Ask your boss, or a colleague or mentor who you trust, what they think you’re doing well. Then ask if there is anything specific they feel you need to work on in the short-term, and what measurable goals you might set to judge if you improved. Try setting some longer-term (3-6 months), measurable goals with them as well." </p>';

    if (question3 === 'yes'){
        encouragement += questionD;
    }
    let questionE = '<p> You might be thinking about a project, or some code you wrote, that failed. Instead, try spending 20 minutes reflecting on your successes so far, and remind yourself of how far you’ve come. This will help balance the scales of positive vs negative self-talk that is at the heart of impostor syndrome."
   
    if (question4 === 'yes'){
        encouragement += questionE;

    }

    document.getElementById("advice").innerHTML = encouragement;
    



}