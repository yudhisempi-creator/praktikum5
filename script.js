const formoutput = document.getElementById('formPendaftaran');
const hasil = document.getElementById('hasilPendaftaran');

if (formoutput) {
    formoutput.addEventListener('submit', function(event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const nohp = document.getElementById('nohp').value.trim();
        const kategori = document.getElementById('kategori').value.trim();
        const pesan = document.getElementById('pesan').value.trim();

        if (!nama || !email || !nohp || !kategori || !pesan) {
            alert("Form tidak boleh kosong! Mohon isi semua data terlebih dahulu!");
        } else {

            // OUTPUT MENGIKUTI STYLE CSS KAMU (ARTICLE CARD)
            hasil.innerHTML = `
                <article>
                    <h3>Data Berhasil Dikirim ✅</h3>
                    <p><strong>Nama:</strong> ${nama}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>No HP:</strong> ${nohp}</p>
                    <p><strong>Kategori:</strong> ${kategori}</p>
                    <p><strong>Pesan:</strong> ${pesan}</p>
                </article>
            `;

            alert(
                "Terima kasih, " + nama +
                "! Data kamu sudah kami terima sebagai " + kategori +
                ". Gunakan email " + email +
                " atau No. HP " + nohp +
                " untuk melanjutkan registrasi!"
            );

            formoutput.reset();
        }
    });
} else {
    console.error("Elemen dengan ID 'formPendaftaran' tidak ditemukan!");
}