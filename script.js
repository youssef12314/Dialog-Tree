window.addEventListener("load", start);

let currentScene;

const scene1A = {
    title: "Konflikten",
    text: /*html*/`<p>ser ud til du har gjort ham sur.</p>
    <p>"hvorfor vill du dog sige sådan noget??!!"</p>`,
    choices: [
        "Undskyld!!!",
        "Du sagde du ville dø"
    ]

}
const scene1B = {
    title: "Wholesome",
    text: /*html*/`<p>Han ser lettede ud</p>
    <p>"Livet er bare hårdt"</p>`,
    choices: [
        "Kan jeg godt forstå",
        "grow some nuts pussy"
    ]

}

const scene1 = {
    title: "Begyndelsen",
    text: /*html*/`<p>Du er i en situation hvor du møder en fremmed,
    der indrømmer han gerne vil dø. Derfra vælger du hvilke valgmuligheder du ønsker at foretage.</p>
    <p>"Jeg vil dø"</p>`,
    choices: [
        { name: "Så dræb dig selv",
          node: scene1A
        }, 
        {name: "Vil du tale om det?",
         node: scene1B}
    ]
}

function start() {
    console.log("JavaScript kører...");
    registerButtonClicks();
    currentScene = scene1;
    showScene(currentScene);
}

function registerButtonClicks(){
    document.querySelector("main").addEventListener("click", userClicked);
}

function userClicked(event){
    const target = event.target;
    if(target.tagName === "BUTTON"){
        buttonClicked(target);
    }
}

function buttonClicked(button){
    //knapper fjernes
    button.parentElement.remove()
    //find index for knap
    const index = Number(button.id.substring(10));
    //find choice med det index
    const choice = currentScene.choices[index];

    currentScene = choice.node;

    showScene(currentScene);

    console.log(choice);
}

function showScene(scene){
    const html = `<div class="scene">
    <h2>${scene.title}</h2>
    <div class="text">
    ${scene.text}
    </div>
    <div class="choices">
    ${scene.choices.map((choice,i) => "<button id='btn-choice"+i+"'>" + choice.name + "</button>").join(" ")}
    </div>
    </div>`;

    document.querySelector("main").insertAdjacentHTML("beforeend", html);
}