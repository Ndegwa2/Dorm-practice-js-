//DORM ="Single Room", Dorm ="double occupancy" , Class= "year 12", "year 13".


const studentClass= prompt("Enter Year ");  // User is prompted to enter their year so that we set prameters for dorm allocation.
const studentClassInt= parseInt(studentClass);//The user is limited to type the year in integers.
if(studentClass=12){
    function dormAllocation(dorm){ //naming the function
        if(year=12){
            return "Double Occupancy"
        }else if(year=13){
            return "Single Occupancy"
        }else{
        return "enter valid year"
    }
    const dorm= dormAllocationSystem(dorm)
    alert("you have been placed!" + dorm)

}
}