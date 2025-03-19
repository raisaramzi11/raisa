// Fungsi untuk menampilkan salam selamat datang
window.alert("Selamat Datang! Selamat menjelajah!");

// Fungsi untuk menampilkan animasi mengetik
  const text = "Ilmu itu dimulai dari rasa ingin tahu";
        let index = 0;
        
        function typeEffect() {
            if (index < text.length) {
                document.getElementById("text").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeEffect, 150); 
            }
        }

        typeEffect(); // Memulai animasi
