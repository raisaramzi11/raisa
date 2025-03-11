// Fungsi untuk menampilkan salam berdasarkan waktu
function setGreeting() {
    let greetingText = "";
    let hour = new Date().getHours();
    if (hour < 12) {
        greetingText = "Selamat Pagi, Selamat Datang di Perpustakaan Raisa Muriza Ramzi!";
    } else if (hour < 18) {
        greetingText = "Selamat Siang, Selamat Datang di Perpustakaan Raisa Muriza Ramzi!";
    } else {
        greetingText = "Selamat Malam, Selamat Datang di Perpustakaan Raisa Muriza Ramzi!";
    }
    document.getElementById("greeting").innerText = greetingText;
}

// Fungsi untuk mengaktifkan mode gelap
document.getElementById("toggle-mode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Panggil fungsi salam saat halaman dimuat
setGreeting();
