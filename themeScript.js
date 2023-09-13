const theme = document.querySelector("#theme");

      theme.addEventListener("change", (event) => {
        if (event.target.value === "default") {
          console.log("Page default theme");
          document.body.style.backgroundColor = "white";
        } else if (event.target.value === "light") {
          console.log("Light theme");
          document.body.style.backgroundColor = "darkgrey";
        } else if (event.target.value === "mild") {
          console.log("Mild theme");
          document.body.style.backgroundColor = "#a89999";
        } else {
          console.log("Dark theme");
          document.body.style.backgroundColor = "black";
        }
      });