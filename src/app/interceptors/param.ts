import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class YourComponent {
  constructor(private route: ActivatedRoute) {}

  yourMethod() {
    this.route.queryParams.subscribe(params => {
      const key = params['key'];
      console.log(key); // Do whatever you want with the 'key' va
    });
  }
}