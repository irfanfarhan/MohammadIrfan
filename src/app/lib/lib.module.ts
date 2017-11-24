import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        ImageComponent
    ],
    exports: [
      ImageComponent
    ],
    providers: [
    ]
})
export class LibraryModule { }
