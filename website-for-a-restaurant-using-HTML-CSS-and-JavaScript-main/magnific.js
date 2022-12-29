$(document).ready(function() {
    $('#gallary-center').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
            // other options
        image: {
            // options for image content type
            titleSrc: 'title'
        }
    });
});