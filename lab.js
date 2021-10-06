;
var mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findNameOfTallestMountain(mount) {
    var tallest = 0;
    var currentname = '';
    for (var i = 0; i < mount.length; i++) {
        if (mount[i].height > tallest) {
            tallest = mount[i].height;
            currentname = mount[i].name;
        }
    }
    return currentname;
}
;
var tallestmountain = findNameOfTallestMountain(mountains);
console.log(tallestmountain);
;
var products = [
    { name: 'Apple', price: 0.69 },
    { name: 'Wombat', price: 50.00 },
    { name: 'Digitizer', price: 8.00 }
];
function calcAverageProductPrice(theprods) {
    var avg = 0;
    var sum = 0;
    var currentprod = '';
    for (var i = 0; i < theprods.length; i++) {
        sum += theprods[i].price;
        avg = sum / theprods.length;
    }
    return avg;
}
;
var averageprice = calcAverageProductPrice(products);
console.log("The average price is: " + averageprice);
