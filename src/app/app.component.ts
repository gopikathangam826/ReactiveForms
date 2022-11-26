import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveFormPractice';
  signupForm:any;
  Genders=['Male','Female'];
  forbiddemusernames=['gopika','Nagarani'];
  ngOnInit()
  {
      this.signupForm= new FormGroup({
          userData:new FormGroup({
            username: new FormControl('gopika',[Validators.required]),
            email:new FormControl('gopika826@gmail.com',[Validators.required,Validators.email])
          }),
          gender:new FormControl('Female',[Validators.required]),
          hobbies:new FormArray([])
      });
      /*this.signupForm.setValue({
        userData:{
          username:'gopi',
          email:'gopi826@gmail.com',
          gender:'female',
          hobbies:[]
        }
      });*/
  }
  onSubmit()
  {
    this.signupForm.status
    console.log("Submitted!!");
    console.log(this.signupForm);
  }
  addHobby()
  {
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
    console.log(this.signupForm.get('hobbies'));
  }

  resetClick()
  {
    this.signupForm.reset()
  }
  forbiddenNames(){

  }
}
