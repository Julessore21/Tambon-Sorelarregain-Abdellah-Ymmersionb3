import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {
  public polo: any; // Input for the data

  id = this.route.snapshot.paramMap.get('id');

  protected currentIndex = 0;

  // Define an array of image URLs here, assuming you have img_1 and img_2 properties.
  private imageUrls: string[] = [];

  constructor(
    private route: ActivatedRoute,
    protected dataService: DataService,
  ){}

  ngOnInit(): void {
    this.dataService.getPolo(this.id).subscribe((data: any) => {
      this.polo = data.polo;
      this.imageUrls.push(
        `${this.dataService.url }image/${this.polo.img_1}`,
        `${this.dataService.url }image/${this.polo.img_2}`
      )
    })
  }

  imageUrl(index: number): string {
    return this.imageUrls[index];
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
  }
}
