$(function() {

    let list = $('#devouredList')
    var filler = $('#fillerMessage');

    if (list.children().length > 0) {
        console.log("this fuck has children")
        filler.addClass('hide');
    }

    $('.devourBtn').on('click', function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        console.log(id)
        console.log("This.value: " + $(this).val());

        var devoured = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function() {
                console.log(`devoured the burger`);
                // Reload the page to get the updated list
                location.assign("/");
            }
        );
    })
})