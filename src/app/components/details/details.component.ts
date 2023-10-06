import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id = this.route.snapshot.paramMap.get('id');
  public polo: any;

  constructor(
    private route: ActivatedRoute,
    protected dataService: DataService,
  ){}

  ngOnInit(): void{
    this.dataService.getPolo(this.id).subscribe((data: any) => {
      this.polo = data.polo;
    })
  }
}
