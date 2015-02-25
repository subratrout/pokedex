/**
 * Created by subratrout on 2/24/15.
 */
$(document).ready(function() {
    var path = 'http://pokeapi.co/media/img/';
    var ext = '.png';
    var htmlstr = "";
    //loop through and construct divs with pokemon images totaling 151
    for (var i = 1; i <= 151; i++) {
        htmlstr += "<div><img src=" + path + i + ext + " id=" + i + "></div>"
    }
    //insert divs and images constructed above into the pokemon container
    $('#pokemon').html(htmlstr);

    //call the bindEvent method
    bindEvent();
});

function bindEvent() {
    //bind the click event to all images
    $('img').click(function() {
        //call the makeCall method when an image is clicked and pass that the value of that images id attribute
        makeCall($(this).attr('id'));
    });
}

function makeCall(num) {
    var url = 'http://pokeapi.co/api/v1/pokemon/';
    //make the ajax call with the constructed url using the url and the value of the image id attribute
    $.get(url + num + '/', function(response) {
        //upon successful ajax response call the populate method and pass the response plus the num variable
        populate(response, num);
    }, 'json');
}

function populate(response, num) {
    //populate all the html into the various elements in the pokedex
    $('#name').html(response.name);
    $('#pokeimg').html('<img src="http://pokeapi.co/media/img/' + num + '.png">');
    $('#height').html(response.height);
    $('#weight').html(response.weight);
    //build an unordered list to display the types which are an array in the response
    var htmlstr = "<ul>";
    for (var i = 0; i < response.types.length; i++) {
        htmlstr += "<li>" + response.types[i].name + "</li>";
    }
    htmlstr += "</ul>"
    $('#types').html(htmlstr);
}