import { Component } from '@angular/core';

declare global {
    interface Window { productFruits: any; }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-sample';

    loadPf = () => {

        const userInformation = { username: 'test-username' }

        // @ts-ignore
        window.productFruitsUser = userInformation;

        (function (w: PfWindow, d, u, c, l) {
            w.productFruits = w.productFruits || {};
            w.productFruits.language = l; w.productFruits.code = c;
            var a = d.getElementsByTagName('head')[0];
            var r = d.createElement('script'); r.async = true;
            r.src = u + '?c=' + c;
            a.appendChild(r);
        })(window as PfWindow, document, 'https://app.productfruits.com/static/script.js', 'YOUR CODE', 'en'); // Replace 'en' with a proper language code
    }
}

type PfWindow = {
    productFruits: any;
}