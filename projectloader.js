async function loadProjects() {
    const container = document.getElementById("projects");
    if (!container) return;

    try {
        const response = await fetch("projects.json");
        if (!response.ok) throw new Error("failed to uh. get the projects.");
        const projects = await response.json();

        container.innerHTML = "";

        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "projectcard";

            if (project.image) {
                card.style.backgroundImage = `url(${project.image})`;
                card.style.backgroundSize = "cover";
                card.style.backgroundPosition = "center";
                card.style.backgroundRepeat = "no-repeat";
            }

            const link = document.createElement("a");
            link.href = project.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            const inner = document.createElement("div");
            inner.className = "projectcard-inner";

            const title = document.createElement("h3");
            title.textContent = project.name;

            const desc = document.createElement("p");
            desc.textContent = project.description;

            inner.appendChild(title);
            inner.appendChild(desc);

            if (project.notice) {
                const notice = document.createElement("p");
                notice.className = "notice";
                notice.textContent = project.notice;
                inner.appendChild(notice);
            }

            link.appendChild(inner);
            card.appendChild(link);
            container.appendChild(card);
        });
    } catch (err) {
        console.error("failed somewhere along the way while loading projects. so close yet so far", err);
        container.innerHTML = "<p>failed to get the projects</p>";
    }
}

document.addEventListener("DOMContentLoaded", loadProjects);
