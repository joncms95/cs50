// Run script once DOM
document.addEventListener('DOMContentLoaded', function () {

    // When copy button is clicked, copy link to clipboard
    document.getElementById('blue_copy').addEventListener('click', function () {
        let getLink = document.getElementById('blue_link');
        getLink.select();
        navigator.clipboard.writeText(getLink.value);
    });

    document.getElementById('red_copy').addEventListener('click', function () {
        let getLink = document.getElementById('red_link');
        getLink.select();
        navigator.clipboard.writeText(getLink.value);
    });

    document.getElementById('spec_copy').addEventListener('click', function () {
        let getLink = document.getElementById('spec_link');
        getLink.select();
        navigator.clipboard.writeText(getLink.value);
    });
});