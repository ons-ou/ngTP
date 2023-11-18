import { Component, Input, inject } from "@angular/core";
import { Cv } from "../../models/cv";
import { CvService } from "../../services/cv/cv.service";
import { Router } from "@angular/router";

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
