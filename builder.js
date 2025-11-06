document.addEventListener("DOMContentLoaded", async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));

    const buildSpeed = 200;  // fade-in speed in ms
    const buildDelay = 50;   // delay between elements in ms

    try {
        const res = await fetch("page.html");
        if (!res.ok) throw new Error("Failed to load page.html");
        const html = await res.text();

        document.body.innerHTML = html;
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.body.style.fontFamily = "DOSVGA, monospace, monospace";

        const elements = Array.from(document.body.querySelectorAll("*"));

        elements.forEach(el => {
            el.style.opacity = "0";
            el.style.transition = `opacity ${buildSpeed / 1000}s ease-out`;
        });

        for (const el of elements) {
            await delay(buildDelay);
            el.style.opacity = "1";
        }
    } catch (err) {
        console.error("Page build failed:", err);
        document.body.innerHTML = "<p>Failed to load page.</p>";
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.body.style.fontFamily = "monospace";
    }
});
