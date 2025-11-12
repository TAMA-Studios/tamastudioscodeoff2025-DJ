    let codegegg1 = false
    function santaegg(){
        document.getElementById("copyright").innerHTML = "<p>&copy; TAMA Studios 2025. Happy hollidays!</p>";
        console.log("You found an easter egg! Many more to find. Check the copyright");
    };
    function codeguyegg() {
        if (codegegg1 === false) {
            console.error("Try again bud :]");
            return;
        };
        const codeegg = document.createElement("h1");
        const eggdiv = document.getElementById("section1");
        codeegg.innerHTML = "Wow you founf this easter egg. got some more to find tho ;]"
        eggdiv.appendChild(codeegg)
    };
