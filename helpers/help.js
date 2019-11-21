export const getExclamationMarks = function(numChars){
    return Array(numChars + 1).join('!');
}
export const clearTag = (str) =>{
    let reg = /<[^<>]+>/g
    let res = str.replace(reg,'')
    return res
  }
export const  debounce = function(method,context, delay){
    let timer = null;
    console.log(method)
    // let args = method.arguments
    return function() {
    let self = context;
    clearTimeout(timer);
        timer = setTimeout(function() {
            method.apply(self);
        }, delay);
    }
}
  