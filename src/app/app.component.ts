import { Component, OnInit //IMPORT ONINIT INTO FILE OF COMPONENT YOU WANT TO USE// } from '@angular/core';
import { productFruits } from 'product-fruits';

declare global {
    interface Window { productFruits: any; }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit //DECLARE YOUR COMPONENT IMPLEMENTING ONINIT// {
    title = 'angular-sample';

 public ngOnInit(): void {
    this.loadPf();
  } // ONINIT: RUNS CODE ON COMPONENT LOAD//

    loadPf = () => {
        productFruits.init('n1AYOgN22v6hx0ua' //REPLACE WITH YOUR CODE//, 'en', { username: 'test' //REPLACE WITH YOUR USER INFO// }, { disableLocationChangeDetection: false });
        
        productFruits.safeExec($pf => {
            console.log($pf);
        })
    }
}

type PfWindow = {
    productFruits: any;
}
