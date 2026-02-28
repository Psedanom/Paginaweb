$(document).ready(function () {
    let control = 0;
	$("#btnCats").click(function () {
		
        if (control == 0) {
            $("#listCats").fadeOut();
            control++
        }
        else if (control == 1) {
            $("#listCats").fadeIn();  
            control = 0;
        }
	});
});
