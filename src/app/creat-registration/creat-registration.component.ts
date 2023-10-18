import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.services';
import { NgToastService } from 'ng-angular-popup';



@Component({
  selector: 'app-creat-registration',
  templateUrl: './creat-registration.component.html',
  styleUrls: ['./creat-registration.component.scss']
})
export class CreatRegistrationComponent implements OnInit {
  [x: string]: any;

  public packages:string[]=["Monthly","Quarterly","Yearly"]
  public genders:string[]=["Male","Female"]
  public importantlist:string[]=[
    "Toxi fat reduction",
    "Energy and Endurance",
    "Healthier Digestive system",
    "sugar Craving Body",
    "Fitness"
  ]
  public registerForm!: FormGroup;
  

  constructor(private fb:FormBuilder , private api:ApiService, private toastService:NgToastService,
   ){

  }
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      weight:[''],
      height:[''],
      bmi:[''],
      bmiresult:[''],
      gender:[''],
      requireTrainer:[''],
      package:[''],
      important:[''],
      haveGymBefore:[''],
      enquiryDate:['']
    }) 
    this.registerForm.controls['height'].valueChanges.subscribe(res=>{
      this.calculateBmi(res)
    })
  }

  submit(){
     this.api.postRegistration( this.registerForm.value)
    .subscribe(res=>{
      this.toastService.success({detail:"Success", summary:"Enquiry added",duration:3000});
      this.registerForm.reset();
      
      
      
      }) 
      
  } 
  calculateBmi(heightvalue:number){
    const weight =this.registerForm.value.height;
    const height= heightvalue;
    const bmi=weight/(height*height)
    this.registerForm.controls['bmi'].patchValue(bmi);
    switch(true){
      case bmi <18.5:
      this.registerForm.controls['bmiresult'].patchValue("Underweight");
      break;
      case (bmi >= 18.5 && bmi < 25):
        this.registerForm.controls['bmiresult'].patchValue("Normal");
      break
      case (bmi >= 25 && bmi<30):
        this.registerForm.controls['bmiresult'].patchValue("Overweight")
      break;

      default:
        this.registerForm.controls['bmiresult'].patchValue("no match")
      break;

    }

  }
}
