// 1. Fitur Scroll To Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}); 

// 2. Validasi Form & Alert
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        Swal.fire({
  title: "Berhasil",
  text: "Pesan Anda Berhasil Dikirim",
  icon: "success"
});
        contactForm.reset(); // Kosongkan form setelah kirim
    } else {
        alert("Mohon lengkapi semua data!");
    }
});

// 3. Fitur Gallery (Modal untuk melihat gambar lebih besar)
function openModal(src) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
    modal.style.display = "block";
    modalImg.src = src;
}

// tombol close
var modal = document.getElementById("myModal");
var span = document.getElementById("closeBtn");

// Ketika user klik tombol silang (x), tutup modal
span.onclick = function() {
  modal.style.display = "none";
}
// opsional klik di luar foto juga menutup modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}