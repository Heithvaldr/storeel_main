$(".link").each(function () {
    text = $(this).text();
    if (text.length > 150) {
        $(this).html(text.substr(0, 150));
    }
});
