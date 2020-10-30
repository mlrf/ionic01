import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [

    {
        path: '',
        redirectTo: 'devices',
        pathMatch: 'full'
    },
    // {
    //     path: 'devices',
    //
    //     children: [
    //         {
    //             // path: '', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesPageModule)
    //              path: '', loadChildren: () => import('./devices/devices.module').then(m => m.DevicesPageModule)
    //         },
    //         {
    //             // path: ':recipeId',
    //             // loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
    //
    //         }
    //
    //     ]
    // },
  {
    path: 'devices',
    loadChildren: () => import('./devices/devices.module').then( m => m.DevicesPageModule)
  },
  // {
  //   path: 'detail',
  //   loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  // },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
