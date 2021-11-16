$(function () {

    $('#search').click(function (e) {
        let term = $('#term').val();
        if (term == '') {
            alert('please enter value to search');
            return;
        }
        url = '/search';
        $.post(url, {
                'key': term
            })
            .done(success)
            .fail(error);
    });

});

function success(data) {
    console.log(data);
    console.log(data.length);
    $('.result ol').empty();
    for (let index = 0; index < data.length; index++) {
        $('.result ol').append('<li>(' + data[index].wordtype + ') :: ' + data[index].definition + '</li>');
    }
}
function error(error) {
    console.log(error);
}