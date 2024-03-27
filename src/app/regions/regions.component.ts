import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RegionCardComponent } from '../components/region-card/region-card.component';
import { RegionService } from '../services/regions/region.service';
import { catchError, map, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
  standalone: true,
  imports: [NavbarComponent, RegionCardComponent, NgFor]
})
export class RegionsComponent implements OnInit {
  regions: any[] = []
  constructor(private regionService: RegionService) { }
  
  ngOnInit(): void {
    this.regionService.findAll().pipe(
      catchError((errors: HttpErrorResponse) => {
        return throwError(() => new Error(errors.message))
      })
    ).subscribe((response: any) => {
      this.regions = response.data.response
    })
  }
}
