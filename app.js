console.log("Hello World!\n==========\n");

////////////// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    for (let i = 1; i <= count; i++){
        if (i % 2 != 0){ 
        console.log(i);
    }
  }
}
printOdds(100);




////////////// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
    let overSixteen = `Congrats ${name} ! You can drive!`; 
    let underSixteen = `Sorry ${name}, but you need to wait until you're 16.`; 
    if (age < 16) {
        console.log(overSixteen);
    } else {
        console.log(underSixteen);
    }
} 

checkAge("Gabe", 16)


//////////////Exercise 3 

function checkQuandrant( x, y){
    if (x > 0 && y > 0){
        return "Quadrant 1";
    } else if (x < 0 && y > 0){
        return "Quadrant 2";
    } else if (x < 0 && y < 0){
        return "Quadrant 3";
    } else if (x > 0 && y < 0){
        return "Quadrant 4";
    } else if (x == 0 && y == 0){
        return "Origin";
    } else if (x != 0 && y == 0){
        return "X Axis";
    } else {
        return "Y Axis";
    }
}

checkQuandrant(1,1); 
checkQuandrant(-1, 1);
checkQuandrant(-1, -1);
checkQuandrant(1,-1);


//////////////////Exercise 4 

function getTriangleType(a,b,c){
    if (!(a + b > c && a + c >  b > b && b + c > a)){
        console.log("Invalid Triangle");
    } else if (a == b && b == c && a == c){
        console.log("Equilateral Traingle");
    } else if (a == b || b == c || a == c){
        console.log("Isosceles Triangle");
    } else if (a != b && b != c && a != c){
        console.log("Scalene Triangle");     
    }   
  }



//Tests
getTriangleType(1, 1, 2);
getTriangleType(3, 4, 5);
getTriangleType(1, 2, 2); 
getTriangleType( 3, 3, 3,); 




//////Exercise 5 


function dataFeedback(dataPer30, currentDay, currentUsage){
    if (currentUsage > dataPer30) {
        return "You have run out of data. Contact us at 1-800-333-3333 to purchase additional data"; 
    }

    const expectedAvgDataPerDay = (dataPer30 / 30).toFixed(2); 
    const daysRemaining = (30 - currentDay).toFixed(2);
    const currentDailyUsage = (currentUsage / currentDay).toFixed(2);
    const projectedUsage = (currentlyDailyData * 30); 
    const exceededUsage = (projectedUsage - dataPer30).toFixed(2);
    const dataRemaining = dataPer30 - currentUsage
    const recommendedUsage = (dataRemaining / daysRemaining).toFixed(2); 

    let outputString  = "";


    if (exceededUsage > 0 ){
        outputString = 
       `${currentDay} days used, ${daysRemaining} days remaining.
        \nAverage daily use: ${expectedAvgDataPerDay} GB/day.
        \nYou are EXCEEDING your average daily use (${currentDailyUsage} GB/day),
        \nContinuing this high usage, you'll exceed your data plan by
        ${exceededUsage} GB.
        \nTo stay below your data plan, use no more than ${recommendedUsage} GB/day.`;

    } else if (exceededUsage < 0) {
        outputString = 
        `${currentDay} days used, ${daysRemaining} days remaining.
        \nAverage daily use: ${expectedAvgDataPerDay} GB/day.
        \nYou are under your average daily use (${currentDailyUsage} GB/day),
        \nContinuing this low usage, you'll have ${-exceededUsage} GB leftover. \nTo maximize your remaining data, use exactly ${recommendedUsage} GB/day`;
    } else if (exceededUsage == 0) {
        outputString = 
        `${currentDay} days used, ${daysRemaining} days remaining.
        \nAverage daily use: ${expectedAvgDataPerDay} GB/day.
        \nYou are right on track with your average daily use (${currentDailyUsage} GB/day),
        \nWell done, stay the course!`; 
    }

    return outputString; 
}

console.log(dataFeedback (100, 15, 150));