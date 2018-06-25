var testA = function(arg){
    // if(arg) console.log('A');
    // else console.log('B');

    // console.log(arguments.length);

    var result = 0;
    for(var ix in arguments) {
        result += arguments[ix];
    }

    console.log(result);
}

testA(10,20,30);