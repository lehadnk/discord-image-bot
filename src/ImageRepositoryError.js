class ImageRepositoryError {
    constructor(message, showToUser) {
        this.message = message;
        this.show = showToUser;
    }

    getMessage() {
        return this.message;
    }

    showToUser() {
        return this.show;
    }
}

module.exports = ImageRepositoryError;