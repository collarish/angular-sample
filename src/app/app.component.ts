import { Component } from '@angular/core';
import { productFruits } from 'product-fruits';

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

    // loadPfLegacy = () => {

    //     const userInformation = { username: 'test-username' }

    //     // @ts-ignore
    //     window.productFruitsUser = userInformation;

    //     (function (w: PfWindow, d, u, c, l) {
    //         w.productFruits = w.productFruits || {};
    //         w.productFruits.language = l; w.productFruits.code = c;
    //         var a = d.getElementsByTagName('head')[0];
    //         var r = d.createElement('script'); r.async = true;
    //         r.src = u + '?c=' + c;
    //         a.appendChild(r);
    //     })(window as PfWindow, document, 'https://app.productfruits.com/static/script.js', 'YOUR CODE', 'en'); // Replace 'en' with a proper language code
    // }

    loadPf = () => {
        productFruits.init('n1AYOgN22v6hx0ua', 'en', { username: 'npm.test' }, { disableLocationChangeDetection: true });
        
        productFruits.safeExec($pf => {
            console.log($pf);
        })
    }
}

type PfWindow = {
    productFruits: any;
}