$(document).ready(function () {
    $('#new_test').click(function () {
        $.getJSON("https://randomuser.me/api/?results=4", function (data) {
        $(".Testi .Testi-item").remove(); // Elimina las tarjetas anteriores
        $.each(data.results, function (index, usuario) {
            const testimonios = [
                "Gracias a este equipo de abogados, logré resolver mi caso laboral rápidamente y con excelentes resultados.",
                "Me sentí acompañado y bien informado durante todo el proceso. Profesionales serios y comprometidos.",
                "Nunca pensé que encontraría un abogado tan honesto y eficaz. Los recomiendo sin dudar.",
                "Su atención fue impecable desde el primer contacto. Me explicaron todo con claridad y logramos un acuerdo justo.",
                "Mi familia y yo estamos profundamente agradecidos por su ayuda en nuestro caso de herencia. Todo fue transparente y rápido.",
                "Recibí un trato humano, empático y profesional. En momentos difíciles, fueron un verdadero apoyo.",
                "Increíble servicio. No solo ganamos el caso, sino que también aprendí mucho sobre mis derechos.",
                "Respondieron todas mis dudas y siempre estuvieron disponibles. Muy confiables.",
                "Tenía miedo de enfrentar un proceso legal, pero gracias a ellos todo fue más sencillo de lo que imaginaba.",
                "Lograron lo que otros abogados me dijeron que era imposible. Eternamente agradecido.",
                "Se notó que dominaban el tema desde el primer minuto. ¡Una defensa impecable!",
                "No solo solucionaron mi problema legal, sino que me dieron tranquilidad durante todo el proceso.",
            ];
            const mensaje = testimonios[Math.floor(Math.random() * testimonios.length)];
            const nombre = `${usuario.name.first} ${usuario.name.last}`;
            const imagen = usuario.picture.medium;
            
            const tarjeta = `
                <div class="Testi-item">
                    <img src="${imagen}" alt="${nombre}">
                    <h3>${nombre}</h3>
                    <p>${mensaje}</p>
                </div>`;
            $(".Testi").append(tarjeta);
        });
    }).fail(function () {
        const mensaje = $("<div>").addClass("temporal").text("Error al cargar datos")
        .css({
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            "background-color": "#323232",
            color: "white",
            padding: "10px 20px",
            "border-radius": "5px",
            "z-index": "1000",
            "box-shadow": "0 2px 10px rgba(0,0,0,0.2)",
        });
    
        $("body").append(mensaje);
        setTimeout(function () {
            mensaje.fadeOut(300, function () {
                $(this).remove();
            });
        }, 3000);
    });
  });
});