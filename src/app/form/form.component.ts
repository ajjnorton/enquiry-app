import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    company: new FormControl('', [Validators.required]),
    enquiry: new FormControl('', [Validators.required]),
    recaptchaReactive: new FormControl('', [Validators.required])
  });

  constructor(public snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }



  /**
   * Simutates the send and response from the enquiry form
   * 
   * @memberof FormComponent
   */
  sendEnquiry(){
    console.log('sendEnquiry');
    this.snackbar.openFromComponent(MessageArchivedComponent, {});

    setTimeout(() => {
      this.snackbar.dismiss();
      this.router.navigate(['thankyou']);
    }, 4000);
  }

/**
 * Manage response from recaptcha
 * 
 * @param {string} captchaResponse 
 * @memberof FormComponent
 */
resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}



}


/**
 * This component controlls the snackbar
 * 
 * @export
 * @class MessageArchivedComponent
 */
@Component({
  selector: 'your-snack-bar',
  templateUrl: 'snackbar1.html',
  styleUrls: ['./snackbar.scss']
})
export class MessageArchivedComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }




}
