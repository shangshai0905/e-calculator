let calculator = document.getElementById(`calculator`);
calculator.style.display = `none`;
let btnShow = document.getElementById(`show`);
let btnHide = document.getElementById(`hide`);
btnHide.style.display = `none`;

function showCalc ()
{

    if (calculator.style.display == `none` )
        {
            calculator.style.display = `block`;
            btnHide.style.display = `block`;
            btnShow.style.display = `none`;
        }
}

function hideCalc()
{
    if (btnShow.style.display == `none`)
        {
            calculator.style.display = `none`;
            btnHide.style.display = `none`;
        }
        btnShow.style.display = `block`;
}

let arr = [] //array of all inputs
let inputbox = document.getElementById(`inputBox`);
inputData = ''; // all data/numbers that is entered
let storage  = []; //array of the answer
let storageData = ''; // current answer

function display(btn)
{

    inputbox.value += btn; 
    inputData += btn;
    arr.push(inputData);
    console.log(`The value of inputData is ${inputData}`)
    console.log(`Memory ${arr}`);

    for (i = 0; i <= arr.length; i++)
    {

        if (arr[i] == operation[0])
            {
                let ttl = Number(arr[i-1]) + Number(inputData);
                storage.push(ttl);
                arr.push(ttl)
                storageData = ttl;
                console.log(ttl);
                console.log(storage);
                console.log(`The value of storageData is ${storageData}`)
                console.log(arr);
                console.log(`---------------`)
            }
        else if (arr[i] == operation[1])
        {
            let ttl = Number(arr[i-1]) - Number(inputData);
            storage.push(ttl);
            arr.push(ttl)
            storageData = ttl;
            console.log(ttl);
            console.log(storage);
            console.log(arr);
            console.log(`---------------`)
        }
        else if (arr[i] == operation[2])
        {
            let ttl = Number(arr[i-1]) * Number(inputData);
            storage.push(ttl);
            arr.push(ttl)
            storageData = ttl;
            console.log(ttl);
            console.log(storage);
            console.log(arr);
            console.log(`---------------`)
        }
        else if (arr[i] == operation[3])
        {
            let ttl = Number(arr[i-1]) / Number(inputData);
            storage.push(ttl);
            arr.push(ttl)
            storageData = ttl;
            console.log(ttl);
            console.log(storage);
            console.log(arr);
            console.log(`---------------`)
        } 
    }

}

function clr()
{
    inputbox.value = "";
    inputData = ''; //to clear all the data/numbers
    arr = [];//to clear the stored arrays
}

let operation = [`+`, `-`, `*`, `/`, `=`]


function operator(symbol)
{
    inputbox.value += symbol; 
    arr.push(symbol); //the operator will push in the array as well
    inputData = ``; // after clicking the symbol it will clear the previous data/numbers that entered after the symbol
    console.log(`inputData now ${inputData}`);
    console.log(`Memory ${arr}`);
}



function total()
{
    inputbox.value = storageData;
}




