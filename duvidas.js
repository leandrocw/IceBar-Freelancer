window.sr = ScrollReveal({ reset: true });

sr.reveal(".ticketpurchases", { duration: 1000 })

const elements = document.querySelectorAll(".ticketpurchases");

elements.forEach(function (duvida) {
    duvida.addEventListener("click", function () {
        duvida.classList.toggle("ativa");
    });
});

const ElementHidden = document.querySelectorAll(".ticketpurchases");

ElementHidden.forEach(function (purchases) {
    purchases.addEventListener("click", function () {
        purchases.classList.toggle("some");
    });
});
