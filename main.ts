// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size="L",message="I love Typescript"):void{
    console.log(`.'I am making a ${size} T-shirt with the massage '${message}'.`)
} 
// make_shirt1() 
make_shirt("Large") 
make_shirt("Medium","I love Javascript")
make_shirt("Small","I love coding")