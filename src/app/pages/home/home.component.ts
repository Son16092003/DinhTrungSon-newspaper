import { Component } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  new$: Observable<News> = this.newService.get();

  

  constructor(private newService: NewsService) {
    this.new$.subscribe((data) => {
      console.log(data);
      
    })
  }
}
