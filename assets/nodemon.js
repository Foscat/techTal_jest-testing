
var functions = {
    add: function(num1,num2){
        return num1 + num2;
    },
    subtract: function(num1,num2){
        return num1 - num2;
    },
    multiply: function(num1,num2){
        return num1 * num2;
    },
    divide: function(num1, num2){
        return num1 / num2;
    },
    stringafy: function(string1, string2){
        return string1+string2;
    },
    needHelp: function(heavy, large){
        if(heavy === "yeah"){heavy=2}
        if(heavy === "kinda"){heavy=1}
        if(heavy === "naw"){heavy=0}
        if(large === "yeah"){large=2}
        if(large === "kinda"){large=1}
        if(large === "naw"){large=0}
        var needIt = heavy + large;
        if(needIt <= 3){needIt = false}
        if(needIt >= 3){needIt = true}
        // console.log(needIt);
        return needIt;
    }

}
// functions.needHelp("kinda", "yeah");
module.exports = functions;