async function loadProjects() {
    const container = document.getElementById("projects");
    if (!container) return;

    try {
        // get projects json file
        const response = await fetch("projects.json");
        if (!response.ok) throw new Error("failed to uh. get the projects.");
        const projects = await response.json();


        // clear div
        container.innerHTML = "";

        // build projects
        projects.forEach(project => {
            const card = document.createElement("div");
            card.className = "projectcard";


            const link = document.createElement("a");
            link.href = project.url;
            link.target = "_blank";
            link.rel = "noopener noreferer";


            const title = document.createElement("h3");
            title.textContent = project.name;

            const desc = document.createElement("p");
            desc.textContent = project.description;


            link.appendChild(title);
            link.appendChild(desc);

            if (project.notice) {
                const notice = document.createElement("p");
                notice.className = "notice";
                notice.textContent = project.notice;
                link.appendChild(notice);
            }

            card.appendChild(link);
            container.appendChild(card);
        });
    }
    catch (err) {
        console.error("failed somewhere along the way while loading projects. so close yet so far");
        container.innerHTML = '<p>failed to get the projects</p>'
    }
}

// load th projects when the page loads or whatever the hell DOm is

document.addEventListener("DOMContentLoaded", loadProjects);