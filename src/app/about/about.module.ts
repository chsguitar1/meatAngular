import {NgModule} from '@angular/core'
import {AboutComponent} from './about.component'
import {RouterModule,Routes} from '@angular/router'

const ROUTES:  Routes = [
  {path: '', component:AboutComponent}
]
@NgModule({
declarations:[AboutComponent],
<<<<<<< HEAD
imports: [RouterModule.forChild(ROUTES)]
=======
imports: [RouterModule, RouterModule.forChild(ROUTES)]
>>>>>>> d99f2edf9441150c9dc7dc070b538f62370a6931
})

export class AboutModule{

}
