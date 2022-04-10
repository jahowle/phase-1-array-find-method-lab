// code your solution here
/* function findResult(element, index, array){
    if(element.result === "W"){
    return element.year
}}


function superbowlWin(array) {
    const winningYear = array.find(findResult);
    return winningYear;


} */


   
superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }