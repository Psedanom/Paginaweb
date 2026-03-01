$(document).ready(function () {
    let control1 = 0;
    let control2 = 0;
    $("#btnCats").click(function () {
		
        if (control1 == 0) {
            $("#listCats").fadeOut();
            control1++
        }
        else if (control1 == 1) {
            $("#listCats").fadeIn();  
            control1 = 0;
        }
	});
    $("#btnMenu").click(function () {
		
        if (control2 == 0) {
            $("#listmenu").fadeOut();
            control2++
        }
        else if (control2 == 1) {
            $("#listmenu").fadeIn();  
            control2 = 0;
        }
	});
});
