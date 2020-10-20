import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as appConstants from '../constants/index';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

  backEndError(errorStatus: number, error: string) {
    switch (errorStatus) {
      case appConstants.CustomErrorCode.UN_KNOWN:
        this.openSnackBar('Server is Down', null);
        console.log(error);
        break;
      case appConstants.ClientError.HTTP_400_BAD_REQUEST:
        this.openSnackBar(error, null);
        break;
      case appConstants.ClientError.HTTP_401_UNAUTHORIZED:
        this.openSnackBar(error, null);
        break;
      case appConstants.ClientError.HTTP_402_PAYMENT_REQUIRED:
        this.openSnackBar(error, null);
        break;
      case appConstants.ClientError.HTTP_403_FORBIDDEN:
        this.openSnackBar(error, null);
        break;
      case appConstants.ClientError.HTTP_404_NOT_FOUND:
        this.openSnackBar(error, null);
        break;
      case appConstants.ClientError.HTTP_408_REQUEST_TIMEOUT:
        this.openSnackBar(error, null);
        break;
      case appConstants.ClientError.HTTP_429_TOO_MANY_REQUESTS:
        this.openSnackBar(error, null);
        break;
      case appConstants.ServerError.HTTP_500_INTERNAL_SERVER_ERROR:
        this.openSnackBar(error, null);
        break;
      case appConstants.ServerError.HTTP_501_NOT_IMPLEMENTED:
        this.openSnackBar(error, null);
        break;
      case appConstants.ServerError.HTTP_502_BAD_GATEWAY:
        this.openSnackBar(error, null);
        break;
      case appConstants.ServerError.HTTP_503_SERVICE_UNAVAILABLE:
        this.openSnackBar(error, null);
        break;
      case appConstants.ServerError.HTTP_504_GATEWAY_TIMEOUT:
        this.openSnackBar(error, null);
        break;
      case appConstants.ServerError.HTTP_507_INSUFFICIENT_STORAGE:
        this.openSnackBar(error, null);
        break;
    }
  }

  successNotification(successStatus: number, message: string) {
    switch (successStatus) {
      case appConstants.SuccessStatus.HTTP_200_OK:
        this.openSnackBar(message, null);
        break;
      case appConstants.SuccessStatus.HTTP_201_CREATED:
        this.openSnackBar(message, null);
        break;
      case appConstants.SuccessStatus.HTTP_202_ACCEPTED:
        this.openSnackBar(message, null);
        break;
    }
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      let feedback = 'An error Occured';
      this.openSnackBar(feedback, null);
      console.log(error.error.message);
    } else {
      this.backEndError(error.status, error.error);
    }
    return throwError('Something bad happened. Please try again later');
  }
}
