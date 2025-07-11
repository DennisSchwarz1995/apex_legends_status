import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
