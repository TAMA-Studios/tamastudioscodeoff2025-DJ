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
                var value = data[projectName][field];
                if (field === "image") el.src = value;
                else if (field === "url") el.href = value;
                else el.textContent = value;
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

