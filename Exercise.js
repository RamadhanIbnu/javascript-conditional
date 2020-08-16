/*
Soal no.1
Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.

Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru */
let divisi = prompt("masukan nama divisi: ");

if (divisi =="CEO"){
    alert("tugas " + divisi + " adalah sebagai penjaga visi dan pencipta budaya perusahaan.");
}
    else if(divisi =="CFO"){
        alert("tugas " + divisi + " adalah sebagai penjaga keuangan perusahaan." )
    }
        else if(divisi =="CTO"){
            alert("tugas " + divisi + " adalah untuk mengontrol perubahan atau perbaikan fitur dan memastikan bahwa semuanya berfungsi." )
        }
            else if(divisi =="COO"){
                alert("tugas " + divisi + " adalah untuk mengelola aset perusahaan, fasilitas, peralatan dan, SDM dan sistem pendukung tim.")
            }
                else if(divisi =="CMO"){
                    alert("tugas " + divisi + " adalah untuk mendapatkan pelanggan, memberikan sebuah penawaran yang menarik agar mereka mempertimbangkan membeli atau menggunakan produk perusahaan.")
                }
                    else if(divisi =="CSO"){
                        alert("tugas " + divisi + " adalah membuat hubungan yang baik antara perusahaan dan pelanggan lama, membuat mereka nyaman dan loyal dalam menggunakan produk dari perusahaan.")
                    }
else{
    alert("maaf " + divisi + " bukan termasuk dalam divisi STARTUP!");
}

/* 
soal no.2

Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih
besar dari b, a lebih kecil dari b, dan a sama dengan b. */

let nilaiPertama = parseInt(prompt("masukan nilai pertama: "));
let nilaiKedua = parseInt(prompt("masukan nilai kedua: "));

if(nilaiPertama === nilaiKedua){
    alert("nilai " +nilaiPertama+ " sama dengan nilai " +nilaiKedua);
}
    else if (nilaiPertama >= nilaiKedua){
        alert("nilai " +nilaiPertama+ " lebih besar dari nilai " +nilaiKedua);
    }
else{
    alert("nilai " +nilaiPertama+ " lebih kecil dari nilai " +nilaiKedua);
}

/*
soal no.3

Gunakan switch case untuk mengetahui nama hari berdasarkan angka.

Hari minggu dimulai dari angka 1 dan seterusnya */

let nomerHari = parseInt(prompt(" masukan nomer hari yang ingin anda ketahui? "));

switch (nomerHari){
    case 1: {
        alert("hari nomer " + nomerHari + " adalah hari MINGGU.");
        break;
    }
    case 2: {
        alert("hari nomer " + nomerHari + " adalah hari SENIN.");
        break;
    }
    case 3: {
        alert("hari nomer " + nomerHari + " adalah hari SELASA.");
        break;
    }
    case 4: {
        alert("hari nomer " + nomerHari + " adalah hari RABU.");
        break;
    }
    case 5: {
        alert("hari nomer " + nomerHari + " adalah hari KAMIS.");
        break;
    }
    case 6: {
        alert("hari nomer " + nomerHari + " adalah hari JUMAT.");
        break;
    }
    case 7: {
        alert("hari nomer " + nomerHari + " adalah hari SABTU.");
        break;
    }
    default: {
        alert("maaf data " +nomerHari+ " yang anda masukan tidak termasuk dalam nomer hari!")
    }
}

/*
soal no.4

Gunakan switch case untuk membuat sebuah game sederhana.

UP -> Karakter berjalan keatas

RIGHT -> Karakter berjalan kekanan

BOTTOM -> Karakter berjalan kebawah

LEFT -> Karakter berjalan kekiri */

let arahKarakter = prompt("masukan arah tujuan karakter anda: ");

switch (arahKarakter){
    case "UP": {
        alert("Karakter anda berjalan keatas");
        break;
    }
    case "RIGHT": {
        alert("Karakter anda berjalan kekanan");
        break;
    }
    case "BOTTOM": {
        alert("Karakter anda berjalan kebawah");
        break;
    }
    case "LEFT": {
        alert("Karakter anda berjalan kekiri");
        break;
    }
    default: {
        alert("maaf perintah yang anda masukan salah!");
    }
}









