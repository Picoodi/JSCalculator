const MainDisplay = document.getElementById("MainDisplay")
const SecondDisplay = document.getElementById("SecondDisplay")


function ShowOnMainDisplay(input){
    MainDisplay.value += input;
}


function calculate(){
    try{
        MainDisplay.value = eval(MainDisplay.value);
    }
    catch(error){
        MainDisplay.value = "Error";
    }

}

function clearDisplay(){
    MainDisplay.value = "";
}


function removelastobjectMainDisplay(){
    MainDisplay.value = MainDisplay.value.slice(0,-1)
}