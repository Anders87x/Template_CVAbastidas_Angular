import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvabastidasService {

  profesional: any[] = [];
  educacion: any[] = [];
  testimonio: any[] = [];
  experiencia: any[] = [];
  blog: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarTestimonio();
    this.CargarExperiencia();
    this.CargarBlog();
  }

  private CargarProfesional(){
    this.http.get('https://cv-tutorial-70504.firebaseio.com/Profesional.json')
      .subscribe((resp: any[]) => {
        this.profesional = resp;
        console.log(resp);
    });
  }

  private CargarEducacion(){
    this.http.get('https://cv-tutorial-70504.firebaseio.com/Educacion.json')
      .subscribe((resp: any[]) => {
        this.educacion = resp;
        console.log(resp);
    });
  }

  private CargarTestimonio(){
    this.http.get('https://cv-tutorial-70504.firebaseio.com/Testimonio.json')
      .subscribe((resp: any[]) => {
        this.testimonio = resp;
        console.log(resp);
    });
  }

  private CargarExperiencia(){
    this.http.get('https://cv-tutorial-70504.firebaseio.com/Experiencia.json')
      .subscribe((resp: any[]) => {
        this.experiencia = resp;
        console.log(resp);
    });
  }

  private CargarBlog(){
    this.http.get('https://cv-tutorial-70504.firebaseio.com/Blog.json')
      .subscribe((resp: any[]) => {
        this.blog = resp;
        console.log(resp);
    });
  }
}
