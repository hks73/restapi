    document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        hitApi(form.url.value,form.method.value,form.body.value);
    });
});