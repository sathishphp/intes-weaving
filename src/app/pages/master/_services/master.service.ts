import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Branch, Company, Shed } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  saveCompany(postObj:any):Observable<Company[]>{
    return this.http.post<Company[]>(environment.API_BACKEND_POINT+'/company/create',postObj).pipe(catchError(this.handleError));
  }

  getCompanyList():Observable<Company[]>{
    return this.http.get<Company[]>(environment.API_BACKEND_POINT+'/company').pipe(catchError(this.handleError));
  }

  getCompanyListById(id:any):Observable<Company[]>{
    return this.http.get<Company[]>(environment.API_BACKEND_POINT+'/company/'+id).pipe(catchError(this.handleError));
  }

  updateCompany(id:any,postObj:any):Observable<Company[]>{
    return this.http.put<Company[]>(environment.API_BACKEND_POINT+'/company/update/'+id,postObj).pipe(catchError(this.handleError));
  }

  updateCompanyStatus(id:any,postObj:any):Observable<Company[]>{
    return this.http.put<Company[]>(environment.API_BACKEND_POINT+'/company/update-status/'+id,postObj).pipe(catchError(this.handleError));
  }

  removeCompany(id:any):Observable<Company[]>{
    return this.http.delete<Company[]>(environment.API_BACKEND_POINT+'/company/delete/'+id).pipe(catchError(this.handleError));
  }


  saveBranch(postObj:any):Observable<Branch[]>{
    return this.http.post<Branch[]>(environment.API_BACKEND_POINT+'/branch/create',postObj).pipe(catchError(this.handleError));
  }

  getBranchList():Observable<Branch[]>{
    return this.http.get<Branch[]>(environment.API_BACKEND_POINT+'/branch').pipe(catchError(this.handleError));
  }

  getBranchListById(id:any):Observable<Branch[]>{
    return this.http.get<Branch[]>(environment.API_BACKEND_POINT+'/branch/'+id).pipe(catchError(this.handleError));
  }

  updateBranch(id:any,postObj:any):Observable<Branch[]>{
    return this.http.put<Branch[]>(environment.API_BACKEND_POINT+'/branch/update/'+id,postObj).pipe(catchError(this.handleError));
  }

  updateBranchStatus(id:any,postObj:any):Observable<Branch[]>{
    return this.http.put<Branch[]>(environment.API_BACKEND_POINT+'/branch/update-status/'+id,postObj).pipe(catchError(this.handleError));
  }

  removeBranch(id:any):Observable<Branch[]>{
    return this.http.delete<Branch[]>(environment.API_BACKEND_POINT+'/branch/delete/'+id).pipe(catchError(this.handleError));
  }

  saveShed(postObj:any):Observable<Shed[]>{
    return this.http.post<Shed[]>(environment.API_BACKEND_POINT+'/shed/create',postObj).pipe(catchError(this.handleError));
  }

  getShedList():Observable<Shed[]>{
    return this.http.get<Shed[]>(environment.API_BACKEND_POINT+'/shed').pipe(catchError(this.handleError));
  }

  getShedListById(id:any):Observable<Shed[]>{
    return this.http.get<Shed[]>(environment.API_BACKEND_POINT+'/shed/'+id).pipe(catchError(this.handleError));
  }

  updateShed(id:any,postObj:any):Observable<Shed[]>{
    return this.http.put<Shed[]>(environment.API_BACKEND_POINT+'/shed/update/'+id,postObj).pipe(catchError(this.handleError));
  }

  updateShedStatus(id:any,postObj:any):Observable<Shed[]>{
    return this.http.put<Shed[]>(environment.API_BACKEND_POINT+'/shed/update-status/'+id,postObj).pipe(catchError(this.handleError));
  }

  removeShed(id:any):Observable<Shed[]>{
    return this.http.delete<Shed[]>(environment.API_BACKEND_POINT+'/shed/delete/'+id).pipe(catchError(this.handleError));
  }

  handleError(error: any) {
      let errorMessage = "";
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => new Error(errorMessage))
    }
}
