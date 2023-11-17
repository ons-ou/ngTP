import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { Cv } from "../../models/cv";
import { CvService } from "../../services/cv/cv.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"],
})
export class ItemComponent {
  @Input({
    required: true,
  })
  cv: Cv | null = null;

  @Input()
  height = 50

  @Input()
  onClick!: (cv: Cv)=> void;

  @Input()
  fontSize = 15

  cvService = inject(CvService)
  router = inject(Router)

  constructor(){
    
  }
}
