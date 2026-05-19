async function loadSection(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            console.error("Không load được:", file);
            return;
        }
        const html = await response.text();
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error("Lỗi khi tải phần mục:", error);
    }
}

async function initWebsite() {
    await loadSection("hero", "sections/hero.html");
    await loadSection("problem", "sections/vandelanda.html");
    await loadSection("solution", "sections/giaiphaphoachingu.html");
    await loadSection("technology", "sections/congngheantoan.html");
    await loadSection("before-after", "sections/BEFOREAFTER.html");
    await loadSection("testimonials", "sections/FEEDBACK.html");
    await loadSection("howto", "sections/quytrinhsudung.html");
    await loadSection("cta", "sections/thongtin.html");
    await loadSection("footer", "sections/thongtin2.html");

    // Xóa thẻ footer2 thừa
    const footer2 = document.getElementById("footer2");
    if (footer2) footer2.remove();

    const script = document.createElement("script");
    script.src = "js/main.js";
    document.body.appendChild(script);
}

initWebsite();