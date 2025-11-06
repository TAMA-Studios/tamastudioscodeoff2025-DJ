document.addEventListener("DOMContentLoaded", async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));

    const buildSpeed = 400;  // how long each element takes to fade in (ms)
    const buildDelay = 120;  // how long to wait between elements (ms)

    try {
        const res = await fetch("page.html");
        if (!res.ok) throw new Error("Failed to load page.html");
        const html = await res.text();

        document.body.innerHTML = html;
        document.body.style.background = "black";
        document.body.style.color = "white";
        document.body.style.fontFamily = "DOSVGA, monospace, monospace";

        const elements = Array.from(document.body.querySelectorAll("*"));

        for (const el of elements) {
            el.style.opacity = "0";
            el.style.transition = `opacity ${buildSpeed}ms ease-out`;
        }

        for (const el of elements) {
            // force reflow before starting the transition
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
});
