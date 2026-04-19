// =======================
// 1. SCROLL ANIMATION
// =======================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});


// =======================
// 2. NAVBAR ACTIVE LINK
// =======================
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (scrollY >= top) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// =======================
// 3. NAVBAR AUTO HIDE
// =======================
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let current = window.pageYOffset;

  if (current > lastScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = current;
});


// =======================
// 4. FORM VALIDATION PRO
// =======================
const form = document.getElementById("form");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  // VALIDASI
  if (!nama || !email || !pesan) {
    showNotif("Semua field wajib diisi!", "error");
    return;
  }

  if (!email.includes("@")) {
    showNotif("Format email tidak valid!", "error");
    return;
  }

  // SIMPAN DATA (SIMULASI DATABASE)
  const data = { nama, email, pesan };
  localStorage.setItem("contact", JSON.stringify(data));

  // OUTPUT
  hasil.innerHTML = `
    <div class="card">
      <h3>Berhasil ✅</h3>
      <p><b>Nama:</b> ${nama}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Pesan:</b> ${pesan}</p>
    </div>
  `;

  showNotif("Pesan berhasil dikirim!", "success");

  form.reset();
});


// =======================
// 5. NOTIFICATION SYSTEM 🔥
// =======================
function showNotif(message, type) {
  const notif = document.createElement("div");
  notif.innerText = message;
  notif.className = `notif ${type}`;

  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}


// =======================
// 6. SCROLL TO TOP BUTTON 🔥
// =======================
const btnTop = document.createElement("button");
btnTop.innerText = "↑";
btnTop.className = "toTop";
document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// =======================
// 7. TYPING EFFECT (HERO) 🔥
// =======================
const text = "Frontend Developer yang fokus pada UI cepat, bersih, dan user-friendly";
let index = 0;
const heroText = document.querySelector(".hero p");

function typing() {
  if (index < text.length) {
    heroText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typing, 30);
  }
}

heroText.innerHTML = "";
typing();