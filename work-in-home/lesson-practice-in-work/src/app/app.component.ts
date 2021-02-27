import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  defaultTypeOfCard = [
    {
      value: 'KASH_KARD',
      displayText: '',
      displayTextKey: '',
      accountType: ['personal_kk', 'business_kk']
    },
    {
      value: 'CREDIT_CARD',
      displayText: '',
      displayTextKey: '',
      accountType: ['JCB', 'DISCOVER', 'VISA', 'AMEX', 'DINER', 'MASTER_CARD']
    },
    {
      value: 'CRYPTO',
      displayText: '',
      displayTextKey: '',
      accountType: ['personal_btc', 'personal_eth', 'personal_zvc']
    }
  ];

  defaultTypeOfAccount = [
    {
      value: 'PERSONAL',
      displayText: '',
      displayTextKey: '',
      accountType: ['personal_kk', 'business_kk']
    },
    {
      value: 'BUSINESS',
      displayText: '',
      displayTextKey: '',
      accountType: ['personal_kk', 'business_kk']
    },
    {
      value: 'JCB',
      displayText: '',
      displayTextKey: '',
      accountType: ['JCB', 'DISCOVER', 'VISA', 'AMEX', 'DINER', 'MASTER_CARD']
    },
    {
      value: 'DISCOVER',
      displayText: '',
      displayTextKey: '',
      accountType: ['JCB', 'DISCOVER', 'VISA', 'AMEX', 'DINER', 'MASTER_CARD']
    },
    {
      value: 'VISA',
      displayText: '',
      displayTextKey: '',
      accountType: ['JCB', 'DISCOVER', 'VISA', 'AMEX', 'DINER', 'MASTER_CARD']
    },
    {
      value: 'AMERICAN_EXPRESS',
      displayText: '',
      displayTextKey: '',
      accountType: ['JCB', 'DISCOVER', 'VISA', 'AMEX', 'DINER', 'MASTER_CARD']
    },
    {
      value: 'DINERS_CLUB',
      displayText: '',
      displayTextKey: '',
      accountType: ['JCB', 'DISCOVER', 'VISA', 'AMEX', 'DINER', 'MASTER_CARD']
    },
    {
      value: 'MASTER_CARD',
      displayText: '',
      displayTextKey: '',
      accountType: ['JCB', 'DISCOVER', 'VISA', 'AMEX', 'DINER', 'MASTER_CARD']
    },
    {
      value: 'BITCOIN',
      displayText: '',
      displayTextKey: '',
      accountType: ['personal_btc', 'personal_eth', 'personal_zvc']
    },
    {
      value: 'ETHERUM',
      displayText: '',
      displayTextKey: '',
      accountType: ['personal_btc', 'personal_eth', 'personal_zvc']
    },
    {
      value: 'ZEVENCOIN',
      displayText: '',
      displayTextKey: '',
      accountType: ['personal_btc', 'personal_eth', 'personal_zvc']
    }
  ];

  searchForm: FormsModule;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      selectedTypeOfCard: 'All',
      selectedTypeOfAccount: 'All'
    });
  }

  ngOnInit(): void {
    this.updateTypeToCard();
  }

  updateTypeToCard() {
    const cardType = this.searchForm;
    console.log(cardType);
  }
}
