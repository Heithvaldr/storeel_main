$(".link").each(function () {
    text = $(this).text();
    if (text.length > 108) {
        $(this).html(text.substr(0, 150));
    }
});
