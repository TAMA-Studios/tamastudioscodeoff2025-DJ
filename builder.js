document.addEventListener("DOMContentLoaded", async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));

    const buildSpeed = 400;  // fade duration per element in ms
    const buildDelay = 120;  // delay between elements in ms

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
            el.style.transition = `opacity ${buildSpeed}ms ease-out`;
        });

        document.dispatchEvent(new Event("DOMContentLoaded"));

        for (const el of elements) {
            void el.offsetWidth;
            el.style.opacity = "1";
            await delay(buildDelay);
        }
    } catch (err) {
        console.error("Page build failed:", err);
        document.body.innerHTML = "<p>Failed to load page.</p>";
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.body.style.fontFamily = "monospace";
    }
}, { once: true });
