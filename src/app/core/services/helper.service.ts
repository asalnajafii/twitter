import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';


@Injectable({providedIn: 'root'})
export class HelperService {
  constructor(public snackBar: MatSnackBar) {
  }

  public popToaster(content: string, action: string, config?: MatSnackBarConfig): void {
    if (this.configIsNotProvided(config)) {
      config = new MatSnackBarConfig();
      config.duration = 2000;
      config.verticalPosition = 'top';
      config.horizontalPosition = 'center';
    }
    this.snackBar.open(content, action, config);
  }

  private configIsNotProvided(configs?: MatSnackBarConfig): boolean {
    return configs == null;
  }
}
