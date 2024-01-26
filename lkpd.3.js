let berat = prompt('isi');
let harga;
let total;
let diskon;


harga = berat / 100 * 500;
diskon = harga * 5/100;
total = harga - diskon;

console.log(harga)
console.log(diskon)
console.log(total)




 let angka = 200 ;
 let s;
 let p;
 let r;

 s = angka % 10;
 p = Math.floor(angka % 100 / 10);
 r = Math.floor(angka % 1000) / 100;

 console.log(` ratusan ${r} puluhan ${p} satuan ${p} `);



let fah = 250;
let c;

c = (fah - 32) * 5/9;

if(c > 300){
    console.log('panas bjiw')
}else if( c < 250 ){
    console.log('tiriz bjaww')
}
else{
    console.log("netral")
}