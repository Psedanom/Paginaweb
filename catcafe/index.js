$(document).ready(function () {
    function updateButtonText(buttonSelector, listSelector) {
        if ($(listSelector).is(":visible")) {
            $(buttonSelector).text("Ocultar");
        } else {
            $(buttonSelector).text("Mostrar");
        }
    }

    updateButtonText("#btnCats", "#listCats");
    updateButtonText("#btnMenu", "#listmenu");

    $("#btnCats").click(function () {
        if ($("#listCats").is(":visible")) {
            $("#listCats").fadeOut();
            $(this).text("Mostrar");
        } else {
            $("#listCats").fadeIn();
            $(this).text("Ocultar");
        }
    });

    $("#btnMenu").click(function () {
        if ($("#listmenu").is(":visible")) {
            $("#listmenu").fadeOut();
            $(this).text("Mostrar");
        } else {
            $("#listmenu").fadeIn();
            $(this).text("Ocultar");
        }
    });
});
