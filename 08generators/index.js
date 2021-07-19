/* function* simpleGenerator(){
    console.log('start');
    yield
    console.log('end');
}

const gen = simpleGenerator()
 */
/* function* idmaker(){
    let id =1;
    while(id <=2){
        yield id
        id = id +1;
    }
}
const gen =idmaker(); */
function* ejemplo(){
    let a =1;
    let b =1;
    while(true){
        const nextNumber = a+b;
        a = b;
        b= nextNumber;
        yield nextNumber;

    }
}