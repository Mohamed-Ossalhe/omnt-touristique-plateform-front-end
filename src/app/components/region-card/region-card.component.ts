import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.scss'],
  standalone: true
})
export class RegionCardComponent {
  @Input() region!: any;
  date: Date = new Date

  cardSvgElement: string = "assets/World-pana.svg"
}
