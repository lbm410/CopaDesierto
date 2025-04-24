import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Router } from "@angular/router"

@Component({
  selector: "app-intro-animation",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./intro-animation.component.html",
  styleUrl: "./intro-animation.component.scss",
})
export class IntroAnimationComponent implements OnInit {
  showAnimation = true

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Ocultar la animación después de 5 segundos
    setTimeout(() => {
      this.showAnimation = false
    }, 3000)
  }
}
