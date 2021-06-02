class MarkupTemplate {

    constructor(partialHead, bodyContent) {
        this.partialHead = partialHead;
        this.bodyContent = bodyContent
    }

    get markup() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${this.partialHead}
            </head>
            <body>
                ${this.bodyContent}
            </body>
            </html>
        `;
    }
}

module.exports.MarkupTemplate = MarkupTemplate;