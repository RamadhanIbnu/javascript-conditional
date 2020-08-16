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