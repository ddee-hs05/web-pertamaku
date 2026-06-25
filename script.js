// 1. Mengambil elemen tombol berdasarkan ID yang sudah kita buat di HTML
const tombol = document.getElementById('tombolAksi');

// 2. Menambahkan fungsi ketika tombol tersebut diklik
tombol.addEventListener('click', function() {
    // Memunculkan pesan pop-up di browser
    alert('Halo! Terima kasih sudah mengklik tombol ini. JavaScript kamu berhasil berfungsi!');
    
    // Opsional: Mengubah warna latar belakang tombol secara acak setelah diklik
    const warnaAcak = '#' + Math.floor(Math.random()*16777215).toString(16);
    tombol.style.backgroundColor = warnaAcak;
});