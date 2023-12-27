import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { LoginInComponent } from './components/login-in/login-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { authGuard } from './auth.guard';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';

export const routes: Routes = [
    
    {
        path: 'login', component: LoginInComponent
    },
    {
        path: 'signup', component: SignUpComponent
    },

    {
        path: '', component: NavigationComponent, children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'about-us', component: AboutUsComponent
            },
            {
                path: 'all-recipes', component: AllRecipesComponent
            },
            {
                path: 'add-recipe', canActivate: [authGuard] ,component: AddRecipeComponent
            },
            {
                path: 'my-recipes', canActivate: [authGuard] ,component: MyRecipesComponent
            },
        ]
    }


];
