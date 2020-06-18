import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-box',
  templateUrl: './success-box.component.html',
  styleUrls: ['./success-box.component.scss']
})
export class SuccessBoxComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<SuccessBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ) { }

  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close(true)
  }

}
