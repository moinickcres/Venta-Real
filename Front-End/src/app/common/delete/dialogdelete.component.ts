import { Component } from "@angular/core";
import { MatDialogRef, MatDialogModule } from "@angular/material/dialog";

@Component({
    templateUrl: 'dialogdelete.component.html',
    standalone: false,
})

export class DialogDeleteComponent{
    constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>)
    {
        
    }
}