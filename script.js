const items = document.querySelectorAll(".item");

items.forEach(item => {
    const pregunta = item.querySelector(".pregunta");

    pregunta.addEventListener("click", () => {


        
        items.forEach(i => {
            if (i !== item) {
                i.classList.remove("activo");
            }
        });

        item.classList.toggle("activo");
    });
});
