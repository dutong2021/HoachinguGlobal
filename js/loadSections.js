async function loadSection(id, file) {
    const response = await fetch(file);

    if (!response.ok) {
        console.error("Không load được:", file);
        return;
    }

    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

async function initWebsite() {

    await loadSection("hero", "sections/hero.html");

    await loadSection("problem", "sections/vandelanda.html");

    await loadSection("solution", "sections/giaiphaphoachingu.html");

    await loadSection("technology", "sections/bo3sanpham.html");

    await loadSection("before-after", "sections/congngheantoan.html");

    await loadSection("testimonials", "sections/BEFOREAFTER.html");

    await loadSection("howto", "sections/FEEDBACK.html");

    await loadSection("cta", "sections/quytrinhsudung.html");

    await loadSection("footer", "sections/thongtin.html");

    await loadSection("footer2", "sections/thongtin2.html");

    const script = document.createElement("script");

    script.src = "js/main.js";

    document.body.appendChild(script);
}

initWebsite();