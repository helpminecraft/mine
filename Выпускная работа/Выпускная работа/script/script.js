$(document).ready(function () {
    let hiddenRow = $(".expandable");
    $(".expand-button").click(function () {
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")) {
            $(".expand-button").html("Уменьшить");
        }
        else {
            $(".expand-button").html("Расширить");
        }
    });
    $(".play-button").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
});