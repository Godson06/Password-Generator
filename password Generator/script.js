const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btncopy');
const passwordLengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const capitalElement = document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const symbolElement = document.querySelector('#symbol');
const frm = document.querySelector('#frm');



// code to copy password when the button is clicked
btnCopy.addEventListener('click' ,async ()=>{
    const pass = outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);//await should be an async function
        alert("Copied to clipboard");
    }else{
      alert("There is no password to copy");
    }
});


function generaterandomchar(min, max){
    const limit = max-min+1; // to get all values like (90-65)+1=26 like that
    return String.fromCharCode(Math.floor(Math.random()*limit)+min)
}

function capitalvalue(){
    return generaterandomchar(65, 90);
}

function smallvalue(){
    return generaterandomchar(97, 122);
}
function numbervalue(){
    return generaterandomchar(48, 57);
}

function symbolvalue(){
    const symbols = "!@#$%^&*()_+/.<>?:;|~`";
    return symbols[Math.floor(Math.random()*symbols.length)];
}

console.log(symbolvalue());


// creating OBJECTARRAY function for that particular element

const functionArray=[
    {
        element:capitalElement,
        fun:capitalvalue
    },
    {
        element:smallElement,
        fun:smallvalue
    },
    {
        element:symbolElement,
        fun:symbolvalue
    },
    {
        element:numberElement,
        fun:numbervalue
    }
];

frm.addEventListener('submit', (e)=>{
    e.preventDefault();//prevent from going to another page and to stay in this page

    const limit =passwordLengthElement.value;
 //password changes randomly so let keyword
    let generatedPassword ="";
    const funArray = functionArray.filter(({element})=>element.checked);
// funArray IS A FILTERED ONE use funArray inside to loop the checked one

    for(i=0; i<limit; i++){
        const index = Math.floor(Math.random()*funArray.length);
        const letter = funArray[index].fun();
        generatedPassword+=letter;
    }

    outputElement.value=generatedPassword; // to store password in generatedPassword variable
});

// String.fromCharCode converts ascii number to the Values
// Math.random --> generates the random number
// Math.random()*n --> n is limit randomly display number within the limit
