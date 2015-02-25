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