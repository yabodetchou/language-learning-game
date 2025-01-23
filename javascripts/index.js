
var jsonFile = 
{
	"la araña":"spider",
	"dónde":"where",
	"cuál":"which",
	"la casa":"the house",
	"le capital de mon pays est ottawa":"canada",
	"el gato":"cat",
	"café":"coffee",
	"como se cide 'house' in french?":"maison",
	"j'ai 4 pattes mais je ne peux pas marcher":"tableau",
	"il __  à l'hôpitale":"est"
}



const jsonkeys = Object.keys(jsonFile);
const jsonvalues = Object.values(jsonFile)
const questions = document.getElementById("questions-text");
const answers = document.getElementById("answers-text");
const nxt = document.getElementById("flip-card")
const crd = document.getElementById("card-number")
const quizQuestion = document.getElementById("questionsquiz")
const answerchoice = [document.getElementById("option1-answer"), 
    document.getElementById("option2-answer"),
    document.getElementById("option3-answer"),
    document.getElementById("option4-answer")];
let expression = '';
const questionBank = ["fenagling","milksop","ripplers","rimers","underfeeds","wergelts","refract","hypersaline","microphysical","pearlescent","gospeler","bordering","pugginesses","jinkers","fastidiousness","hardware","fusulinids","begulf","presidios","amole","enliven","polecat","cadential","glugging","melanoblasts","preoperational","inamoratos","salesroom","unbrushed","collapses","continuants","perniciously","reinflation","truthfulnesses","mismove","housewarmings","corrupting","butchness","rebalanced","scalade","theolog","originators","spiritualities","retacked","slay","epigraphist","cadets","calotypes","rindy","bogymen","degreed","bandshells","measurer","labyrinthodonts","requesters","polka","ontologically","hunts","crepitates","grubstakes","barmen","replating","herculeses","contends","megadynes","zippers","cloxacillins","subchaser","potboys","coterminous","overexposures","gastroenteritis","taboos","redesign","soarers","proposed","shrievalties","resynthesizing","decampment","hexose","mesophyte","fished", 
    "excremental","burgers","crammers","sauerkrauts","mar","pollinate","catechus","atomizing","miscomputations","admission","doohickies","bawling","roperies","chromier","protohuman","restressing","thoroughpin","roadies","unflaggingly","whammed","piffles","medinas","gorm","detumescence","postmortems","parakeets","eyewashes","misclassed","nonpolarizable","disassemblies","coyotillo","pimpmobile","tided","mercerises","fur","bhut","sulfured","gingivae","regimentals","blacklists","letterhead","peritrich"
];
const nextbut = document.getElementById("questionnumber");
const scorebut = document.getElementById("finalscore");



function changeQuestion() {
    const randomnum = Math.floor(Math.random() * jsonkeys.length)
    questions.innerText = jsonkeys[randomnum]
    answers.innerText = jsonvalues[randomnum]
    nxt.innerText = "Next Card";


}




function randomQuizQuestion() {
    randomnum = Math.floor(Math.random() * jsonkeys.length)
    randomchoice = Math.floor(Math.random() * answerchoice.length)
    quizQuestion.innerText = jsonkeys[randomnum]
    const correctAnswer = jsonvalues[randomnum]
    return answerchoice[randomchoice].innerText = correctAnswer;


}

function otherQuestions() {
    expression = answerchoice[randomchoice].id;
    const option1 = document.getElementById('option1-answer');
    const option2 = document.getElementById('option2-answer');
    const option3 = document.getElementById('option3-answer');
    const option4 = document.getElementById('option4-answer');
    


    switch(expression) {
        case expression = 'option1-answer':
            option2.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            option3.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            option4.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            break;
        case expression = 'option2-answer':
            option1.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            option3.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            option4.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            break;
        case expression = 'option3-answer':
            option2.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            option1.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            option4.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            break;
        default:
            option2.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            option3.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];
            option1.innerText = questionBank[Math.floor(Math.floor(Math.random()* questionBank.length))];

    }



}




function displayQuestion() {
    document.getElementById.innerText = randomQuizQuestion()
    document.getElementById(answerchoice[randomchoice].id).onclick = function() {
        displayAnswer();

};
    }





function displayAnswer() {
    console.log("correct answer")
    location.reload();
}