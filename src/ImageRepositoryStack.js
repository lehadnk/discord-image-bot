const StaticImageRepository = require("./StaticImageRepository");
const GoogleImageRepository = require("./GoogleImageRepository");

class ImageRepositoryStack {
    constructor() {
        this.stack = [];
    }

    addRepository(repository) {
        this.stack.push(repository);
    }

    fetchRepo(repositoryNo, query) {
        return new Promise((resolve, reject) => {
            let nextRepositoryNo = repositoryNo + 1;
            let repository = this.stack[repositoryNo];
            if (nextRepositoryNo > this.stack.length - 1) {
                repository.getRandomImageByTag(query)
                    .then(url => {
                        resolve(url);
                    })
                    .catch(error => {
                        reject(error);
                    })
            } else {
                repository.getRandomImageByTag(query)
                    .then(url => {
                        resolve(url);
                    })
                    .catch(error => {
                        this.fetchRepo(nextRepositoryNo, query)
                            .then(url => {
                                resolve(url);
                            })
                            .catch(e => {
                                reject(error);
                            })
                    })
            }
        });
    }

    getRandomImageByTag(tagList) {
        return new Promise((resolve, reject) => {
            this.fetchRepo(0, tagList)
                .then(url => resolve(url))
                .catch(error => reject(error));
        });
    }
}

module.exports = ImageRepositoryStack;