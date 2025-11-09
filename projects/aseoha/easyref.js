document.addEventListener("DOMContentLoaded", function () {
  fetch("../../projects.json")
    .then(res => res.json())
    .then(data => {
      window.project = data;

      document.querySelectorAll("*").forEach(function (el) {
        if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
          var text = el.textContent.trim();
          if (text.startsWith("project.")) {
            var parts = text.split(".");
            if (parts.length >= 3) {
              var projectName = parts[1].toUpperCase();
              var field = parts[2].toLowerCase();
              if (data[projectName] && data[projectName][field]) {
                el.textContent = data[projectName][field];
              }
            }
          }
        }
      });

      document.getElementById("project.aseoha.description").textContent = project.ASEOHA.description;

      console.log("Project data loaded:", project);
    })
    .catch(() => {});
});

// document.getElementById("id").textContent = "replace";
// document.getElementById("id").href = project.ASEOHA.url;
// document.getElementById("id").src = project.ASEOHA.image;
// document.getElementById("id").alt = project.ASEOHA.description;
// document.getElementById("id").title = project.ASEOHA.notice;
// document.getElementById("id").style.backgroundImage = "url(" + project.ASEOHA.image + ")";
