import { Component, Input, inject } from "@angular/core";
import { Router } from "@angular/router";
import { CvService } from "../../../cv/services/cv/cv.service";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  @Input()
  title = ""

  @Input()
  path = ""


  @Input()
  height = 50

  @Input()
  fontSize = 15

  cvService = inject(CvService)
  router = inject(Router)

  constructor(){
    
  }
}
