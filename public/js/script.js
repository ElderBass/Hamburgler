//set all of the code inside a function so that once the page fully loads we will have maximum functionality
$(function() {
    //grab both the list of devoured burgers and the 'filler' text in the 'devour' menu
    let list = $('#devouredList')
    let filler = $('#fillerMessage');
    //if our list of devoured burgers is populated at all, we will hide the filler message
    if (list.children().length > 0) {
        
        filler.addClass('hide');
    }
    //add on-click function to the 'devour' button
    $('.devourBtn').on('click', function(event) {
        event.preventDefault(); //prevent default just in case

        //declare an 'id' variable that's equal to the 'data-id' value for the clicked devour btn, which is also the id of the burger for that button
        var id = $(this).data("id");

        //I'm honestly not sure if we need this but this is the data we'll pass in to the ajax query below
        var devoured = {
                devoured: 1
            }
            //ajax query for the specific burger we've targeted, sent to the server
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function() {
                // Reload the page to get the updated list
                location.assign("/");
            }
        );
    })
})