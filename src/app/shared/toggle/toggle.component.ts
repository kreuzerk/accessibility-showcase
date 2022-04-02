import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  showAccessible = false;

  @Output() toggleChange = new EventEmitter<boolean>();

  updateShowAccessibleFlage(value: boolean) {
    this.showAccessible = value;
    this.toggleChange.emit(this.showAccessible);
  }
}
