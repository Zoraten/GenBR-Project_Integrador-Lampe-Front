import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostagemModel } from 'src/app/model/PostagemModel';
import { PostagemService } from 'src/app/service/postagem.service';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {
  postagem: PostagemModel = new PostagemModel

  constructor(
    private postagemService: PostagemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit() {
     let id = this.route.snapshot.params['id']
     this.findByIdPostagem(id) 
  }
  findByIdPostagem(id: number){
    this.postagemService.getPostagemById(id).subscribe((resp: PostagemModel)=>{
     this.postagem = resp
    })
  }
  deletePostagemById(){
    this.postagemService.deletePostagem(this.postagem.id).subscribe(()=>{
      alert("Postagem excluida!")
      this.router.navigate(['/feed'])
    })
  }
}
