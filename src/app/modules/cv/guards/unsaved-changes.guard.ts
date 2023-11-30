import { CanDeactivateFn } from '@angular/router';
import { AddComponent } from '../components/add/add.component';

export const unsavedChangesGuard: CanDeactivateFn<AddComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate? component.canDeactivate(): true;
};
