import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-offer-form',
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {
  countryList: Country[]
  selectedCountry : string
  isVisible: boolean
  countryControl = new FormControl('', [Validators.required]);
  
  constructor(private countryService : CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(
      dt => 
      {
        this.countryList = dt
      }
    )
  }
  checkSelection(){
    if(this.selectedCountry == "1")
    {
      this.isVisible = true 
    }
    else{
      this.isVisible = false 
    }
  }
}
