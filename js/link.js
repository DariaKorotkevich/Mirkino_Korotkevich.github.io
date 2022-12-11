let links = document.querySelectorAll("a");
for (const link of links) {
    if ((link.href).includes("http"))
        link.style.color = "rgb(221, 87, 39)";    
}
