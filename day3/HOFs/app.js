// function abc()
// {
//     function inner(){}
//     return inner
// }



// let ans = abc()
// console.log(ans);



function ex(fun){
    fun()
}


function abc(){
    console.log("Hello from the arguement wala function");
}

ex(abc)



