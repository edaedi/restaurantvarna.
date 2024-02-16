document.addEventListener("DOMContentLoaded", function() {

    var stage = document.querySelector('.slideshow-stage');
    var thumbnails = document.querySelectorAll('.slideshow-thumbs li');
    var caption = stage.querySelector('.caption');
    var counter = stage.querySelector('.slideshow-counter');
    var currentIndex = 0;

    function showImage(index) {
        var image = thumbnails[index].querySelector('img');
        var imageSrc = image.getAttribute('src');
        var imageAlt = image.getAttribute('alt');
        stage.querySelector('img').setAttribute('src', imageSrc);
        caption.textContent = imageAlt;
        counter.textContent = (index + 1) + ' / ' + thumbnails.length;
        currentIndex = index;
    }

    showImage(0);

    thumbnails.forEach(function(thumb, index) {
        thumb.addEventListener('click', function() {
            showImage(index);
        });
    });

    
    var prevButton = document.querySelector('.slideshow-imgnav a.previous');
    var nextButton = document.querySelector('.slideshow-imgnav a.next');

    prevButton.addEventListener('click', function() {
        var newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = thumbnails.length - 1;
        }
        showImage(newIndex);
    });

    nextButton.addEventListener('click', function() {
        var newIndex = currentIndex + 1;
        if (newIndex >= thumbnails.length) {
            newIndex = 0;
        }
        showImage(newIndex);
    });

    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Съобщението е изпратено!');
    });

});
