function censored(text , str){

    let censored = '*'.repeat(str.length);
    let result = text;
    while( result.includes(str)){
        result = result.replace(str, censored);
    }
    console.log(result);
    
    

}
censored('A small sentence with some words', 'small')
censored('A small sentence with some small', 'small')