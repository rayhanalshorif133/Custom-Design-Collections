$(document).ready(function () {
    var mainHref = window.location.href;
    var isMatch = mainHref.match(/Custom-Design-Collections/g) ? true : false;
    var hrefs = $('a[href]');
    for (var i = 0; i < hrefs.length; i++) {
        var href = $(hrefs[i]).attr('href');
        if (href == '/') {
            if (isMatch) {
                $(hrefs[i]).attr('href', 'https://rayhan133.github.io/Custom-Design-Collections/');
            }
        }
    }
});