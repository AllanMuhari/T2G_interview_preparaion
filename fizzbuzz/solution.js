function fizzbuzz(){
    for(i=1 ; i<=100 ; i++){
        
        if(i % 3 === 0){
            console.log(`${i} - FIzz`)
        } else if (i %5===0){
            console.log(`${i} - Buzz`)
        }else if (i % 3 ===0 && 1 %5 ===0){
            console.log(`${i} - FizzBuzz`)
        }else{
            console.log(i)
        }
     }

} 

console.log(fizzbuzz())

