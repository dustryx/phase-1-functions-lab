function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation =42;
    return Math.abs(pickupLocation-hqLocation);
}
//function to calculate the distance in feet 
const feetperblock = 264;

function distanceFromHqInFeet (pickupLocation) {
    const blocks =distanceFromHqInBlocks(pickupLocation);
    const feet = blocks * feetperblock
    return feet;
}
function distanceTravelledInFeet (startblock, endblock) {
    return maths.abs(endblock - startblock) npm *264;
}
