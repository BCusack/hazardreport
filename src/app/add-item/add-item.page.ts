import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HazardDataService } from '../data/hazard-data.service';
import { AuthService } from '../Auth/auth.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  reportForm = new FormGroup({
    name: new FormControl()
  });

  uid: string;
  constructor(public fb: FormBuilder, public dataService: HazardDataService, public authService: AuthService) {
    this.createForm();
  }

  ngOnInit() {
    this.authService.getUser().subscribe((result) => {
      this.uid = result.uid;
    });
  }
  createForm() {
    this.reportForm = this.fb.group({
      id: '',
      location: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.reportForm.patchValue({ 'id': this.uid });
    console.log(this.reportForm);
    this.dataService.addItem(this.reportForm.value);
  }
}
