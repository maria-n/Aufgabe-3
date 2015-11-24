var myProjects;
function getProjects(evt) {
    $.get("http://127.0.0.1:1337/", function (data) {
        var myObj = JSON.parse(data);
        
        $('.projects').empty();
        
        for (var i = 0; i < myObj.length; i++) {
            $('.projects').append('<p>' + 'Title: ' + myObj[i].title + '</p>' + '<p>' + 'Descritpion: ' + myObj[i].description + '</p>');
        }
        
    });
}