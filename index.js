const returnFirstTwoDrivers = ([Antonia, Nuru, Amari, Mo]) => [Antonia,Nuru];
const returnLastTwoDrivers = ([Antonia, Nuru, Amari, Mo]) => [Amari, Mo];
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(arg){
return (function fareQuintupler(arg){
    return arg * 5;
});
}
const fareDoubler = (arg) => arg * 2;
const fareTripler = (arg) => arg * 3;
function selectDifferentDrivers([Antonia, Nuru, Amari, Mo], driver){
    if (driver === returnFirstTwoDrivers){
        return [Antonia, Nuru];
    } else if (driver === returnLastTwoDrivers){
        return [Amari, Mo];
    }
   
}