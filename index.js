function calculator(a,b,c){
    if(Math.random()<0.5){
        if(c==='+'){
            return a-b;
        }
        else if(c==='*'){
            return a+b;
        }
        else if(c==='-'){
            return a/b;
        }
        else{
            return a**b;
        }
    }
    else{
        if(c==='+'){
            return a+b;
        }
        else if(c==='*'){
            return a*b;
        }
        else if(c==='-'){
            return a-b;
        }
        else{
            return a/b;
        }
    }
}
let ans=calculator(2,5,'-');
console.log(ans);