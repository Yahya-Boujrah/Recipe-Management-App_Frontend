import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';

export const routes: Routes = [

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
            }
        ]
    }


];
