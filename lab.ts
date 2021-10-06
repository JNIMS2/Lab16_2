interface Mountain{
    name: string;
    height: number;
};
let mountains:Mountain[] =[
{ name: 'Kilimanjaro', height: 19341},
{name: 'Everest', height: 29029},
{name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(mount:Mountain[]):string{
    let tallest: number = 0;
    let currentname: string = '';

    for(let i = 0; i<mount.length; i++){
        if(mount[i].height > tallest){
            tallest = mount[i].height;
            currentname = mount[i].name;
        }
    }
    return currentname;
};

let tallestmountain:string = findNameOfTallestMountain(mountains);
console.log(tallestmountain);


interface Product{
    name:string;
    price: number;
};

let products:Product[] = [
    {name: 'Apple', price: 0.69},
    {name: 'Wombat', price: 50.00},
    {name: 'Digitizer', price: 8.00}
];

function calcAverageProductPrice(theprods:Product[]):number{
    let avg: number = 0;
    let sum: number = 0;
    let currentprod: string = '';

    for(let i = 0; i<theprods.length; i++){
       sum += theprods[i].price;
       avg = sum/theprods.length;
    }
    return avg;
};
let averageprice: number = calcAverageProductPrice(products);
console.log(`The average price is: ${averageprice}`);