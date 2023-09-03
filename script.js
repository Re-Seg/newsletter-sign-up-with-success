var email = document.querySelector('#email');
var submit = document.querySelector('#submit');
var span = document.querySelector('#span');
submit.addEventListener('click', validated);
function validated(e) {
    var test = /[A-ZÀÂÁÃÄÅÆĀĂĄÉÈÊËĒĖĘĚĔÛÙÚÜŲŰŮŪÎÏÌÍĪĮİÔŒÒÓÕÖØŌŐÇĆČŹŹŽÝŔŘĢĞĎĐŚŠŞŤȚŢĹĻĽŁÑŃŅŇa-zàâáãäåæāăąéèêëēėęěĕûùúüųűůūîïìíīįiôœòóõöøōőçćčźźžýŕřģğďđśšşťțţĺļľłñńņň0-9](?=@)/
    if (test.test(email.value)==false) {
        e.preventDefault();
        span.innerHTML = 'Valid email required'
        email.style.borderColor = 'RGBa(175, 0, 0, 1)';
        email.style.color = 'RGBa(175, 0, 0, 1)';
        email.style.background = 'RGBa(175, 0, 0, 0.2)'
        span.style.color = 'RGBa(175, 0, 0, 1)';
    }else{
        location.assign('success.html');
    }
}
