let dpk = 50;
let mtk = 65;
let agama= 56;
let rata;

rata = [dpk + mtk + agama] / 3
rata = Math.round(rata)
console.log(rata)

if(rata > 80 && rata <= 100){
    console.log('a')
}else if( rata > 75 && rata <= 80){
    console.log('b')
}else if(rata > 65 && rata <= 75){
    console.log('c')
}else if (rata > 45 && rata <= 65){
    console.log('d')
}else if(rata > 0 && rata <= 45){
    console.log("E")
}else{
    console.log("kamu gagal bjir")
}

  

// const month = [01,02,03,04,05,06,07,08,09,10,11,12];
// let k = new Date()
// let g = (Math.random() * 10) + 1; 
// g = Math.round(g)
// const dd = new Date().getDate(); // mengambil hari saat ini
// let mm = Math.random(month[k.getMonth()] )  ; 
// mm = Math.round(mm);
// const yyyy = new Date().getFullYear(); // mengambil tahun saat ini
// let nn =(Math.random() * 10) + 1 ; 
// nn = Math.round(nn)
// const gddmmyyynn = `${g}${dd}${mm}${yyyy}${nn}`;

// console.log(gddmmyyynn);


  
//   var angkaBulan = 4; // Ganti angka bulan sesuai keinginan Anda
//   var namaBulan = tentukanBulan(angkaBulan);
//   console.log(namaBulan); // Output: "Maret"
  
//   var data = [
//     { bulan: "Januari", tahun: 2022 },
//     { bulan: "Februari", tahun: 2022 },
//     { bulan: "Maret", tahun: 2022 },
//     // tambahkan data bulan dan tahun lainnya sesuai kebutuhan
//   ];
  
//   var bulan = data.map(function(item) {
//     return item.bulan;
//   });
  
//   var tahun = data.map(function(item) {
//     return item.tahun;
//   });
  
//   console.log("Bulan: " + bulan.join(", "));
//   console.log("Tahun: " + tahun.join(", "));   
  
  
//   const nama = [
//     {golongan : 2}
//     {lahir : 25}
//     {bulan : 05}
//     {tahun : 1978}
//     {urut  : 3}
//   ];

//   let golo = nama.map(function(iten){
//     return item.golangan;
//   });
//   let lah = nama.map(function(iten){
//     return item.lahir;
//   });
//   let bul = nama.map(function(iten){
//     return item.bulan;
//   });
//   let tah = nama.map(function(iten){
//     return item.tahun;
//   });
//   let  uru= nama.map(function(iten){
//     return item.urut;
//   });


let kodeDigit = 22509197803;
let g = Math.floor((kodeDigit % 100000000000)/ 10000000000);
let dd = Math.floor((kodeDigit % 10000000000)/100000000);
let mm = Math.floor((kodeDigit % 100000000)/1000000);
let yyy = Math.floor((kodeDigit % 1000000)/100);
let nn = Math.floor((kodeDigit % 100));

    switch (mm) {
      case 1:
        bulan = "Januari";
        break;
      case 2:
        bulan = "Februari";
        break;
      case 3:
        bulan = "Maret";
        break;
      case 4:
        bulan = "April";
        break;
      case 5:
        bulan = "Mei";
        break;
      case 6:
        bulan = "Juni";
        break;
      case 7:
        bulan = "Juli";
        break;
      case 8:
        bulan = "Agustus";
        break;
      case 9:
        bulan = "September";
        break;
      case 10:
        bulan = "Oktober";
        break;
      case 11:
        bulan = "November";
        break;
      case 12:
        bulan = "Desember";
        break;
      default:
        bulan = "Bulan tidak valid";
        break;
    }
  

console.log(g ,dd ,bulan , yyy , nn)


  

let hh = 6; //input
let m = 48; //input
let ss = 10; //input


//pull banyu
if (ss + 1 == 60) {
    ss = 0;
    m++;

    if (m == 60) {
        m = 0;
        hh++;
}
    if(hh = 24){
        hh = 0
        m= 0
        hh = 0
    }
} else {
    ss++;
}
 
console.log(`Jam ${hh}, Menit ${m}, Detik ${ss}`);




const buah = ['pisang', 'mangga', 'apel'];

for (let elemen of buah) {
  elemen += ' enak sekali.';
  console.log(elemen);
}