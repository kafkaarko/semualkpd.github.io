let nama = "kafka";
let gaji_pokok = 10000;
let pajak;
let tunjangan;
let gajiBersih;

tunjangan = 20/100 * gaji_pokok;
pajak = 15/100 * (gaji_pokok  + tunjangan) ;
gajiBersih = gaji_pokok + tunjangan - pajak;

console.log(nama)
console.log(gaji_pokok)
console.log(tunjangan)
console.log(pajak)
console.log(gajiBersih)



let jam = 1;
let menit = 30;
let detik = 40;
let hasil;
// let cek;

// jam *= 3600;
// menit *= 60;
hasil = (jam * 3600 + menit * 60 + detik);
console.log(hasil);
// cek = detik % 3600;
// jam = detik / 3600;
// menit = cek /60;
// detik = cek %  60;

// document.write(Math.floor(jam) + ' Jam ' + Math.floor(menit) + ' Menit ' + Math.floor(detik) + ' Detik ') 
