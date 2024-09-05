$(document).ready(function() {
    var modal = $("#myModal");
    var btn = $("#orderCallBtn");
    var span = $(".close");

    btn.click(function() {
        modal.show();
    });

    span.click(function() {
        modal.hide();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });

    $("#callbackForm").submit(function(e) {
        e.preventDefault();
        alert("Форма отправлена!");
        modal.hide();
    });
});