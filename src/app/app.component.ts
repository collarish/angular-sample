
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { productFruits } from 'product-fruits';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-sample';

  constructor(private router: Router) {} 

  public ngOnInit(): void {
    this.loadPf();
  }

  public loadPf(): void {
    productFruits.init(
      'TustKUTx2tF5ZETz', 
      'en',
      { username: 'angularuser' }, 
      {
        disableLocationChangeDetection: false,
        customNavigation: {
          use: true,
          navigate: (url: string) => this.customNavigate(url), 
          onGet: () => this.getCurrentUrl(),
        },
      }
    );

    productFruits.safeExec(($pf: any) => {
      console.log('Product Fruits initialized:', $pf);
    });
  }

  
  private customNavigate(url: string): void {
    console.log('Navigating to:', url);
    
    if (url.startsWith('http')) {
      window.location.href = url; 
    } else {
      this.router.navigateByUrl(url); 
    }
  }

  
  private getCurrentUrl(): string {
    const currentUrl = window.location.href; 
    console.log('Current URL:', currentUrl);
    return currentUrl;
  }
}