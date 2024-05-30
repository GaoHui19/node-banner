$(document).ready(() => {
    fetch('http://localhost:3000/banner')
        .then(response => response.json())
        .then(data => {
            const $imageContainer = $('#image-container');

            data.forEach(({ image_url }) => {
                // Create image element
                const $img = $(`<img src="${image_url}" alt="Image">`);
                $imageContainer.append($img);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
