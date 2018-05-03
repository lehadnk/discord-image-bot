const ImageRepositoryError = require("./ImageRepositoryError");

let images = {
    "shadow priest elf female": [

    ],
    "shadow priest draenei female": [
        "http://img0.reactor.cc/pics/post/full/World-of-Warcraft-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D0%B5-priest-1556278.jpeg"
    ],
    "priest female": [

    ],
    "priest male": [

    ],
    "troll": [

    ],
    "": [

    ],
    "draenei female": [

    ]
}

class StaticImageRepository {
    getRandomImageByTag(tagList) {
        return new Promise((resolve, reject) => {
            if (!images.hasOwnProperty(tagList)) {
                reject(new ImageRepositoryError("Не могу найти таких картинок :(", true));
            }

            let repository = images[tagList];
            if (repository.length === 0) {
                reject(new ImageRepositoryError("Не могу найти таких картинок :(", true));
            }

            let i = Math.floor(Math.random() * repository.length);
            resolve(repository[i]);
        });
    }
}

module.exports = StaticImageRepository;