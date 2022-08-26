var array = [2, 15, 7, 9, 45]

var avalia = 0 

for(let i = 0; i < array.length; i += 1) {
    
    var compara = array[i]

    if(compara % 3 === 0) {
        console.log("fizz")
    }

    else if( compara % 5 === 0 ) {
        console.log("buzz")
    }

    else if(compara % 3 === 0 & compara % 5 === 0) {
        console.log("fizz buzz")
    }
    else {
        console.log("bug")
    }
    
}