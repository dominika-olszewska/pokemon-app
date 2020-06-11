import { Injectable } from '@angular/core';
import {ToasterService} from 'angular2-toaster';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  popToastSuccess(message) {
    this.toasterService.pop('success', 'Success', message);
  }

  popToastWarning(message) {
    this.toasterService.pop('warning', 'Warning', message);
  }

  popToastError(message) {
    this.toasterService.pop('error', 'Error', message);
  }

  popToastIno(message) {
    this.toasterService.pop('info', 'Info', message);
  }

}
