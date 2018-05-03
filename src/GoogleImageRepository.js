const ImageRepositoryError = require("./ImageRepositoryError");

const GoogleImages = require('google-images');

class GoogleImageRepository {
    constructor(id, key) {
        this.client = new GoogleImages(id, key);
    }

    getRandomImage(images) {
        /*
        [{
            "url": "http://steveangello.com/boss.jpg",
            "type": "image/jpeg",
            "width": 1024,
            "height": 768,
            "size": 102451,
            "thumbnail": {
                "url": "http://steveangello.com/thumbnail.jpg",
                "width": 512,
                "height": 512
            }
        }]
         */

        if (images.length < 1) {
            return;
        }

        let i = Math.floor(Math.random() * images.length);
        let imgUrl = images[i].size > 1051980 ? images[i].thumbnail.url : images[i].url;
        return imgUrl;
    }

    getRandomImageByTag(tagList) {
        let searchString = "warcraft art " + tagList;
        let page = Math.floor(Math.random() * 3);

        return new Promise((resolve, reject) => {
            this.client.search(searchString, { page })
                .then(images => {
                    resolve(this.getRandomImage(images));
                })
                .catch(error => {
                    if (error.statusCode === 403) {
                        reject(new ImageRepositoryError("Меня не проплатили :(", true));
                    }

                })
        });
    }
}

module.exports = GoogleImageRepository;