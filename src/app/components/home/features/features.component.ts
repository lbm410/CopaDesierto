import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-features",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./features.component.html",
  styleUrl: "./features.component.scss",
})
export class FeaturesComponent {
  features = [
    {
      icon: "location",
      title: "Ubicación",
      description: "El torneo se celebra en la Universidad de Almería, en un entorno único rodeado por la arena y el desierto.",
    },
    {
      icon: "teams",
      title: "Equipos",
      description:
        "Partidos mixtos en los que pueden participar tanto hombres como mujeres. Categorías para todos los niveles.",
    },
    {
      icon: "trophy",
      title: "Premios",
      description:
        "Trofeos y premios para el equipo ganador. Que gane el mejor!",
    },
  ]
}
