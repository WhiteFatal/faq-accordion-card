let arrow = document.querySelectorAll('.arrow');
let question = [];
let answer = [];
for (let i = 1; i < 6; i++) {
    question.push(document.querySelector(`.q${i}`));
    answer.push(document.querySelector(`.a${i}`));
}
// hide answer elements
answer.forEach(element => element.style.display ="none")
// underline questions
question.forEach (element => { 
    element.style.borderBottom ='solid 1px var(--background-white)';
});

// let question #2 be bold at screen loading, answer #2 open, arrow pointing up and remove question underline;
question[1].style.fontWeight = '700';
question[1].style.borderBottom ='none';
answer[1].style.display = "flex";
arrow[1].style.transform = 'rotateX(180deg)';


// add event listener
for (let i = 0; i < 5; i++ ) {
    question[i].addEventListener ('click', e => {        
        if (answer[i].style.display === "none") {

            answer.forEach(element => {
                element.style.display = "none";
            });
            question.forEach(element => {
                element.style.fontWeight = "400";
                element.style.borderBottom ='solid 1px var(--background-white)';
            });
            arrow.forEach(element => {
                element.style.transform = 'none';
            });

            answer[i].style.display = "flex";
            
            e.target.style.fontWeight = '700';    
            e.target.style.borderBottom = 'none';
            arrow[i].style.transform = 'rotateX(180deg)';
            
        } else { 
            return;
            closeAnswer(i);  
        };
      }
    );
}

function closeAnswer (num) {
    answer[num].style.display = "none"
    //question[num].style.fontWeight = '400'
}