import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { Recipe } from '../../interfaces/recipe';


@Component({
  selector: 'app-single-recipe-post',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './single-recipe-post.component.html',
  styleUrl: './single-recipe-post.component.css'
})
export class SingleRecipePostComponent implements OnInit {


  private router = inject(Router);
  private route = inject(ActivatedRoute);

  recipe !: Recipe;

  // recipe : Recipe = {
  //   id: '1',
  //   title: 'Sushi Easy Receipe',
  //   description:
  //     'descriptiondescriptiondescription description description description',
  //   picture: '../../../assets/img/bg-img/r1.jpg',
  //   category: { id: '1', name: 'cat1' },
  //   createdAt: '2015-09-12',
  //   ingredients: [
  //     { name: 'sel', description: 'on ajout un petit peu du sel' },
  //     { name: 'sel', description: 'on ajout un petit peu du sel' },
  //   ],
  //   instructions: [
  //     { number: 1, description: "on ajout un petit peu du sel et du poivre"},
  //     { number:2, description: "on ajout un petit peu du sel et du poivre"}
  //   ]
  // };

  ngOnInit(): void {
    this.recipe = history.state.recipe;
  }

  
}
