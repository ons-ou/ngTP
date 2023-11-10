import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { Cv } from "../../../models/cv";
import { CvService } from "../../../services/cv/cv.service";

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

  cvService = inject(CvService)

  constructor(){
    
  }

  onSelectCv() {
    this.cvService.selectCv(this.cv!);
  }
}
