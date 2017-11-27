$(document).ready(function() {
    $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(500);
    }); //end slide toggle

    $(window).resize(function() {
        if ($(window).width() > 500) {
            $('nav ul').removeAttr('style');
        }
    });
});

$(function() {
    $('form input[type=submit]').click(function(e) {
        const form = $('form')[0];
        if (!form.checkValidity()) {
            return;
        }
        e.preventDefault();
        $.ajax({
            url: 'https://formspree.io/v.doomich@gmail.com',
            method: 'POST',
            data: {
                personName: $('#name').val(),
                personEmail: $('#email').val(),
                message: $('#message').val()
            },
            dataType: 'json'
        }).done(function() {
            form.reset();
            $('#message-box').html('Дякуємо, ми зв&#39;яжемось з вами найближчим часом!');
        }).fail(function() {
            $('#message-box').html('Error');
        });
    });


});
