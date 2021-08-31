function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42);
}
function distanceFromHqInFeet(distance){
    return Math.abs(distance - 42) * 264;
}
function distanceTravelledInFeet(distanceStart, distanceEnd){
    return Math.abs(distanceStart - distanceEnd) * 264;
}
function calculatesFarePrice(start, destination){
    let distancetraveled = Math.abs((start - destination) * 256);
    if(distancetraveled <= 400)
    return 0;
    else if(distancetraveled <= (2000 - 400))
    return 2.56;
    else if(distancetraveled > 2000 && distancetraveled < 2500)
    return 25;
    else if(distancetraveled > 2500)
    return 'cannot travel that far';
}