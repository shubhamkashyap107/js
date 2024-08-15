const obj = {
    name : "Shubham",
    age : 33,
    saysHi : function(){
        console.log(this.name + " Says Hi!");
        
    },
    example : {
        exName : "hehe",
        middleSaysHi : function () {
            console.log(this.name + " Says Hi!");
            console.log(this.exName);
            
            
        },
        example2 : {
            exName2 : "dog",
            innerSaysHi : function() {
                console.log(this.name + " Says Hi!");
                console.log(this.exName2);
            }
        }
    }
}


// obj.saysHi()
// console.log(obj.example.exName);
// console.log(obj.example.example2.exName2);
// obj.example.example2.innerSaysHi()
// obj.example.middleSaysHi()

const{name, age, saysHi} = obj //destructure
console.log(name);
console.log(age);
console.log(saysHi);
// name = "xyz"
console.log(obj.name);


