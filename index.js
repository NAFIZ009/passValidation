let lowerCheck=0;
let upperCheck=0;
let numCheck=0;
let sepCheck=0;
let lengthCheck=0;

document.getElementById("inputfild").addEventListener("keyup", function(e) {
    let value = [...e.target.value];
    //checking for lower case characters
    if(value.some(function(v){
        return parseInt(v)!=v && v==v.toLowerCase()  ;
    })){
        document.getElementById("condition-div").children[0].style.color=`#3EF094`;
        lowerCheck = 1;
    }else if(!value.some(function(v){
        return parseInt(v)!=v && v==v.toLowerCase()  ;
    })){
        document.getElementById("condition-div").children[0].style.color="white";
        lowerCheck = 0;
    }


   //checking for upper case characters
    if(value.some(function(v){
        return parseInt(v)!=v && v==v.toUpperCase();
    })){
        document.getElementById("condition-div").children[1].style.color=`#3EF094`;
        upperCheck=1;
    }else if(!value.some(function(v){
        return parseInt(v)!=v && v==v.toUpperCase();
    })){
        document.getElementById("condition-div").children[1].style.color="white";
        upperCheck=0;
    }


   //checking for numbers
    if(value.some(function(v){
        return v==parseInt(v);
    })){
        document.getElementById("condition-div").children[2].style.color=`#3EF094`;
        numCheck=1;
    }else if(!value.some(function(v){
        return v==parseInt(v);
    })){
        document.getElementById("condition-div").children[2].style.color="white";
        numCheck=0;
    }


   //checking for special characters
    if(value.some(function(v){
        return v.match(/^[^a-zA-Z0-9]+$/);
    })){
        document.getElementById("condition-div").children[3].style.color=`#3EF094`;
        sepCheck=1;
    }else if(!value.some(function(v){
        return v.match(/^[^a-zA-Z0-9]+$/);
    })){
        document.getElementById("condition-div").children[3].style.color="white";
        sepCheck=0;
    }

   //checking for length
    if (value.length>=8) {
        document.getElementById("condition-div").children[4].style.color=`#3EF094`;
        lengthCheck=1;
    }else{
        document.getElementById("condition-div").children[4].style.color="white";
        lengthCheck=0;
    }
    
});


document.getElementById("inputfild").addEventListener("keyup", function(e) {
    if(e.key=="Enter"){
        if(lowerCheck==1 && upperCheck==1 && numCheck==1 && sepCheck==1 && lengthCheck==1){
            document.getElementById("main").innerHTML=`
                <h1 class="text-center text-success mt-5">VALID PASSWORD!</h1><br /><br />
                <h2 class="text-center text-success">Your Password is <span class="text-danger">${document.getElementById("inputfild").value}</span></h2>
            `;
        }
        if (lowerCheck==0) {
            document.getElementById("condition-div").children[0].style.color=`#FF6A6A`;
            
        }
        if (upperCheck==0) {
            document.getElementById("condition-div").children[1].style.color=`#FF6A6A`;
            
        }
        if (numCheck==0) {
            document.getElementById("condition-div").children[2].style.color=`#FF6A6A`;
            
        }
        if (sepCheck==0) {
            document.getElementById("condition-div").children[3].style.color=`#FF6A6A`;
            
        }
        if (lengthCheck==0) {
            document.getElementById("condition-div").children[4].style.color=`#FF6A6A`;
            
        }

    }
});
