import { Component, type OnInit, HostListener } from "@angular/core"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setParallaxBackground()
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.setParallaxBackground()
  }

  private setParallaxBackground() {
    const heroContainer = document.querySelector(".hero-container") as HTMLElement
    if (heroContainer) {
      const scrollPosition = window.scrollY
      heroContainer.style.backgroundImage = `url('assets/fondovertical2.png')`
      heroContainer.style.backgroundSize = "cover"
      // Moving the background higher by adding an initial offset of -50px
      const isMobile = window.innerWidth <= 768; // Common breakpoint for mobile devices
      heroContainer.style.backgroundPosition = isMobile 
        ? `center ${0 - scrollPosition * 0.5}px` 
        : `center ${-270 - scrollPosition * 0.5}px`
      heroContainer.style.backgroundAttachment = "fixed"
    }
  }
}
