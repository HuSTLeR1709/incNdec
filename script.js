const v= document.querySelector('#value');

const increment= () => {
    let value = parseInt(v.innerText);
    value=value+1;
    v.innerText=value;

}

const decrement= () => {
    let value = parseInt(v.innerText);
    value=value-1;
    v.innerText=value;
}   

const reset=()=>{
    let value =parseInt(v.innerText);
    value=0;
    v.innerText=value;
}