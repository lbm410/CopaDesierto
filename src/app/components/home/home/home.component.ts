import { Component } from "@angular/core"
import { HeroComponent } from "../hero/hero.component"
import { FeaturesComponent } from "../features/features.component"
import { IntroAnimationComponent } from "../../intro-animation/intro-animation.component"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, IntroAnimationComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
