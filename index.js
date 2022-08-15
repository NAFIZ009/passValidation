document.getElementById("inputfild").addEventListener("keyup", function(e) {
    let value = [...e.target.value];

    //checking for lower case characters
    if(value.some(function(v){
        return parseInt(v)!=v && v==v.toLowerCase()  ;
    })){
        document.getElementById("condition-div").children[0].style.color=`#3EF094`;
           console.log("color shouldbe green");
    }else if(!value.some(function(v){
        return parseInt(v)!=v && v==v.toLowerCase()  ;
    })){
        document.getElementById("condition-div").children[0].style.color="white";
           console.log("color shouldbe green");
    }


   //checking for upper case characters
    if(value.some(function(v){
        return parseInt(v)!=v && v==v.toUpperCase();
    })){
        document.getElementById("condition-div").children[1].style.color=`#3EF094`;
           console.log("color shouldbe green");
    }else if(!value.some(function(v){
        return parseInt(v)!=v && v==v.toUpperCase();
    })){
        document.getElementById("condition-div").children[1].style.color="white";
           console.log("color shouldbe green");
    }


   //checking for numbers
    if(value.some(function(v){
        return v==parseInt(v);
    })){
        document.getElementById("condition-div").children[2].style.color=`#3EF094`;
           console.log("color shouldbe green");
    }else if(!value.some(function(v){
        return v==parseInt(v);
    })){
        document.getElementById("condition-div").children[2].style.color="white";
           console.log("color shouldbe green");
    }


   //checking for special characters
    if(value.some(function(v){
        return v.match(/^[^a-zA-Z0-9]+$/);
    })){
        document.getElementById("condition-div").children[3].style.color=`#3EF094`;
           console.log("color shouldbe green");
    }else if(!value.some(function(v){
        return v.match(/^[^a-zA-Z0-9]+$/);
    })){
        document.getElementById("condition-div").children[3].style.color="white";
           console.log("color shouldbe green");
    }

   //checking for length
    if (value.length>=8) {
        document.getElementById("condition-div").children[4].style.color=`#3EF094`;
    }else{
        document.getElementById("condition-div").children[4].style.color="white";
    }
    
});