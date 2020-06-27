//While Loop faster cmpare than for loop
//for loop
// for (var a = 0; a <= 10; a++) {
//     console.log(a)
// }

//while loop
//initialize condition check then console and increament
// var b = 0;
// while (b < 10) {
//     console.log(b)
// }


//do while
// var c = 0;
// do { //do mai one time lazmi print hoga do matlab yain kero then agia barhoo
//     console.log(c)
//     c++;
// }
// while (c < 10)

//Events:---------onclick kai through event,onmouse
//vooid zero degai
//js kai under css bi apply kersaktaihai
//imp document.getelementbyid


// function message() {
//     var a = 2 + 2
//     alert("Asslamoalikum!" + a);
// }


//html sai function ko data bi desaktai hai
// function read(greet) {
//     alert(greet)
// }


// function clickButton() {
//     alert('Amazing Events')
// }

// function greetTheUser() {
//     alert("oooh")
// }


// ---------------------------------------Reading Fields Values-------
// function getName() {
//     //input value get
//     var name = document.getElementById("xyz")
//         //alert(name.value) //value get 
//     console.log(name.value)
//     name.value = "" //input sai value khalii
// }


// function getName() {
//     //input value get
//     var name = document.getElementById("xyz")
//     alert(name) //value get 
// }


// function setName() {
//     var name = document.getElementById("xyz")
//     name.value = "Enter Name" //default value
//     var pargraph = document.getElementById("para")

//     pargraph.innerHTML = "This is DocumentGetByID"

// }

// setName()


//------------Calculator------
function getNumber(num) {
    //console.log(num)
    var ans = document.getElementById("result")
    ans.value += num

}

function clearResult() {
    var ans = document.getElementById("result")
    ans.value = "" //default clear honai kaai baad
}

function getAns() {
    var ans = document.getElementById("result")
        //console.log(result.value)
    ans.value = eval(ans.value) //js function evaluate
}