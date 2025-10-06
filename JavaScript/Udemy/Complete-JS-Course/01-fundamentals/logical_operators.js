const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision);
console.log(hasDrivingLicense || hasGoodVision);
console.log(!hasDrivingLicense);

const shouldDrive = hasDrivingLicense && hasGoodVision;

if (shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true;
console.log(hasDrivingLicense && hasGoodVision && isTired);