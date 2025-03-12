// Fungsi untuk menampilkan salam selamat datang
window.alert("Selamat Datang! Selamat menjelajah!");

// Fungsi untuk menampilkan animasi mengetik
  const text = "Halo, selamat datang di website kami!";
        let index = 0;
        
        function typeEffect() {
            if (index < text.length) {
                document.getElementById("text").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, 100); // Ubah angka untuk mengatur kecepatan ketikan
            }
        }

        typeEffect(); // Memulai animasi


