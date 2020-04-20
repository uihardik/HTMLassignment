import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface states {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  states: any[] = [{name:'Alabama'}, 
  {name: 'Alaska'}, 
  {name: 'Arizona'}];
  statesList: any[] = [
    {name:'Alabama'}, 
    {name: 'Alaska'}, 
    {name: 'Arizona'}, 
    {name: 'Arkansas'}, 
    {name: 'California'}, 
    {name: 'Colorado'}, 
    {name: 'Connecticut'}, 
    {name: 'Delaware'},
    {name:'Florida'}, 
    {name: 'Georgia'}, 
    {name: 'Hawaii'}, 
    {name: 'Idaho'}, 
    {name: 'Illinois'}, 
    {name: 'Indiana'}, 
    {name: 'Iowa'}, 
    {name: 'Kansas'}, 
    {name: 'Kentucky'},
    {name:'Louisiana'}, 
    {name: 'Maine'}, 
    {name: 'Maryland'}, 
    {name: 'Massachusetts'}, 
    {name: 'Michigan'}, 
    {name: 'Minnesota'}, 
    {name: 'Mississippi'},
    {name:'Missouri'}, 
    {name: 'Montana'}, 
    {name: 'Nebraska'}, 
    {name: 'Nevada'}, 
    {name: 'New Hampshire'}, 
    {name: 'New Jersey'}, 
    {name: 'New Mexico'},
    {name:'New York'}, 
    {name: 'North Carolina'}, 
    {name: 'North Dakota'}, 
    {name: 'Ohio'}, 
    {name: 'Oklahoma'}, 
    {name: 'Oregon'}, 
    {name: 'Pennsylvania'},
    {name:'Rhode Island'}, 
    {name: 'South Carolina'}, 
    {name: 'South Dakota'}, 
    {name: 'Tennessee'}, 
    {name: 'Texas'}, 
    {name: 'Utah'}, 
    {name: 'Vermont'},
    {name:'Virginia'}, 
    {name: 'Washington'}, 
    {name: 'West Virginia'}, 
    {name: 'Wisconsin'}, 
    {name: 'Wyoming'}
  ];
  Trendingcout:any[]=[
    {name: 'Maine',img:'https://www.momondo.in/rimg/dimg/50/cc/740f5a97-ctry-253-16167fe6a86.jpg?width=300&height=150&xhint=3030&yhint=1383&crop=true'}, 
    {name: 'Maryland', img:'https://www.momondo.in/rimg/dimg/a8/0b/8febba9f-ctry-158-165d94adffb.jpg?width=300&height=150&xhint=1788&yhint=823&crop=true'}, 
    {name: 'Massachusetts', img:'https://www.momondo.in/rimg/dimg/40/e4/2aca6b8d-ctry-43-169b92d1978.jpg?width=300&height=150&xhint=1739&yhint=1094&crop=true'}, 
    {name: 'Michigan', img:'https://www.momondo.in/rimg/dimg/08/48/2dcba17f-ctry-252-169b922ea60.jpg?width=300&height=150&xhint=1155&yhint=1432&crop=true'}, 
    {name: 'Minnesota', img:'https://www.momondo.in/rimg/dimg/4c/b0/d0ae5074-ctry-238-164f654f0a4.jpg?width=300&height=150&xhint=2230&yhint=1570&crop=true'}, 
    {name: 'Mississippi', img:'https://www.momondo.in/rimg/dimg/53/fc/45315ebb-city-2258-15c4046e1fd.jpg?width=300&height=150&xhint=1659&yhint=1703&crop=true'},
    {name:'Missouri', img:'https://www.momondo.in/rimg/dimg/65/be/5907f602-city-54749-1677364a259.jpg?width=300&height=150&xhint=1550&yhint=1483&crop=true'}, 
    {name: 'Montana', img:'https://www.momondo.in/rimg/dimg/9c/7e/fbe89134-ctry-113-1687500fcbb.jpg?width=300&height=150&xhint=1639&yhint=994&crop=true'}, 
    {name: 'Nebraska', img:'https://www.momondo.in/rimg/dimg/70/18/cae644cd-ctry-225-16316679ab8.jpg?width=300&height=150&xhint=1725&yhint=1074&crop=true'}, 
    {name: 'Nevada', img:'https://www.momondo.in/rimg/dimg/5a/a9/2f8dfa9f-ctry-82-16307cfdd95.jpg?width=300&height=150&xhint=1516&yhint=1310&crop=true'}, 
    {name: 'New Hampshire', img:'https://www.momondo.in/rimg/dimg/01/23/bf6dc319-ctry-148-1687505c051.jpg?width=300&height=150&xhint=383&yhint=653&crop=true'}, 
    {name: 'New Jersey', img:'https://www.momondo.in/rimg/dimg/44/df/6183460f-city-25578-1645bb38ecb.jpg?width=300&height=150&xhint=930&yhint=638&crop=true'}, 
    {name: 'New Mexico', img:'https://www.momondo.in/rimg/dimg/5c/59/97c8f1c4-lm-293-16a74aafc13.jpg?width=300&height=150&xhint=1225&yhint=1372&crop=true'},
    {name:'New York', img:'https://www.momondo.in/rimg/dimg/4a/4e/09498d6f-city-20828-167a7ac270d.jpg?width=300&height=150&xhint=2439&yhint=1538&crop=true'}
  ]
  carddetail:any[]=[{
    title:'San Francisco, CA, United States',
    time:'30 Oct – 13 Nov • 14 days ',
    desc:'AMD Ahmedabad to SFO San Francisco ',
    price:'68,250'
  },
  {
    title:'Los Angeles, CA, United States',
    time:'1 Jun – 12 Jun • 11 days',
    desc:'AAMD Ahmedabad to LAX Los Angeles',
    price:'77,400+'
  },
  {
    title:'Washington, DC, United States',
    time:'2 Jul – 16 Jul • 14 days',
    desc:'AMD Ahmedabad to IAD Washington',
    price:'76,111+'
  }
]
  constructor() { }

  ngOnInit() {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.states.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: states): void {
    const index = this.states.indexOf(fruit);

    if (index >= 0) {
      this.states.splice(index, 1);
    }
  }

}
