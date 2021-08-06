const questions = document.querySelectorAll(".question");
// console.log(questions);

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);

    btn.addEventListener("click", function() {
        // console.log(question);
        let questiontext = question.querySelector(".question-text");
        let btnmain = question.querySelector(".question-btn");

        questions.forEach(function(item) {
            let questiontxt = item.querySelector(".question-text");
            let rbtn = item.querySelector(".question-btn");

            // console.log(item);
            if (question !== item) {
                console.log("True");
                questiontxt.classList.remove("showcase");
                rbtn.classList.remove("rotate");
            }
        });

        questiontext.classList.toggle("showcase");
        btnmain.classList.toggle("rotate");

    });
});


/*const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const question = e.currentTarget.parentElement.parentElement.lastElementChild;
        console.log(question);

        question.classList.toggle("showcase");
    });
});*/