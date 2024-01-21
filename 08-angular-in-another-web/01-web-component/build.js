const concat = require('concat');

(async function build() {
    const files = [
        './dist/01-web-component/main.js',
        './dist/01-web-component/polyfills.js',
        './dist/01-web-component/runtime.js'
    ];

    try {
        await concat(files, '../02-test-angular-elements/web-component.js')
    } catch {
        console.log(error);
    }
})();
