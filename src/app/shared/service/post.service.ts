import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Ipost } from '../model/post.const';

@Injectable({
  providedIn: 'root'
})
export class PostService {



  postUrl: string = `${environment.baseUrl}/posts`
  constructor(
    private _http: HttpClient
  ) { }

  fetchAllPosts(): Observable<Ipost[]> {
    return this._http.get<Ipost[]>((this.postUrl as string))
  }
}
