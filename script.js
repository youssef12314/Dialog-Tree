window.addEventListener("load", start);

let currentScene;

// Define scenes
const scene1 = {
    title: "Begyndelsen",
    text: `<p>Du er i en situation hvor du møder en fremmed, der indrømmer han gerne vil dø. Derfra vælger du hvilke valgmuligheder du ønsker at foretage.</p>
    <p>"Jeg vil dø"</p>`,
    choices: []
};

const scene1A = {
    title: "Konflikten",
    text: `<p>Det ser ud til, at du har gjort ham sur.</p>
    <p>"Hvorfor ville du dog sige sådan noget??!!"</p>`,
    choices: []
};

const scene1B = {
    title: "Wholesome",
    text: `<p>Han ser lettede ud</p>
    <p>"Livet er bare hårdt"</p>`,
    choices: []
};

const scene1C = {
    title: "Dårlig Slutning",
    text: `<p>Game Over.</p>
    <p>"JEG DRÆBER DIG MED MIG SÅ!"</p>`,
    choices: []
};

const scene1D = {
    title: "God Slutning 1",
    text: `<p>Han ser glad ud. Du gjorde hans dag en lille smule bedre</p>
    <p>"Tak for det."</p>`,
    choices: []
};

const scene1E = {
    title: "God Slutning 2",
    text: `<p>Han er stadig lidt sur, men han var sød nok til at tilgive dig</p>
    <p>"Du er tilgivet. Vi alle har hårde dage nogengange"</p>`,
    choices: []
};

scene1.choices = [
    { name: "Så dræb dig selv", node: scene1A },
    { name: "Vil du tale om det?", node: scene1B }
];

scene1A.choices = [
    { name: "Undskyld!!!", node: scene1E },
    { name: "Du sagde du ville dø", node: scene1C }
];

scene1B.choices = [
    { name: "Kan jeg godt forstå!", node: scene1D },
    { name: "tud med dig!", node: scene1C }
];

scene1D.choices = [
    { name: "Prøv Igen", node: scene1 }
];

scene1E.choices = [
    { name: "Prøv Igen", node: scene1 }
];

scene1C.choices = [
    { name: "Prøv Igen", node: scene1 }
];

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
