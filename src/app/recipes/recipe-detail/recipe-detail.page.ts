import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    // get parameters
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("recipeId")) {
        // redirect
        return;
      } else {
        const recipeId = paramMap.get("recipeId");
        this.recipe = this.recipeService.getRecipe(recipeId);
      }
    });
  }
  onDeleteRecipe() {

    this.alertController
      .create({
        header: 'Are you sure?',
        message: 'Do you really want to delete the recipe?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'delete',
            handler: () => {
              this.recipeService.deleteRecipe(this.recipe.id);
              this.router.navigate(['/recipes']);
            },
          },
        ],
      })
      .then((alertElement) => {
        alertElement.present();
       });
      }
}
