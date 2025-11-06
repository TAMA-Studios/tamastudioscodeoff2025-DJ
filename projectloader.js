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
            card.className = "projectscard";


            const link = document.createElement("a");
            link.href = project.url;
            link.target = "_blank";
            link.rel = "noopener norefferer";


            const title = document.createElement("h3");
            title.textContent = project.className;

            const desc = document.createElement("p");
            desc.textContent = project.description;


            link.appendChild(title);
            link.appendChild(desc);

            if (project.notice) {
                const notice = document.createElement("p");
                notice.className = "notice";
                Notic
            }
        });
    }
}