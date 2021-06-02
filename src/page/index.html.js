const fs = require('fs');
const path = require('path');
const { MarkupTemplate } = require (path.resolve(__dirname, '..', 'component', 'MarkupTemplate.js'));

function build(callback=err=>err&&console.log(err)) {
    fs.writeFile(
        path.resolve(__dirname, './index.html'), 
        (new MarkupTemplate(
            `
                <title>test page<title>
                <style>
                    .box {
                        width: 100px;
                        height: 100px;
                        background-color: red;
                    }
                </style>
            `,
            `
                <div class="wrapper">
                    <div class="box"></div>
                </div>
                <script src="./index.js"></script>
            `
        )).markup,
        callback
    );
}

build();
