import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent  implements OnInit {

   property = {
    title: 'Luxury Villa',
    subtitle: '5 BHK | Ocean View',
    priceRange: '₹ 1.5 Cr – ₹ 2.2 Cr',
    status: 'Available',
    rating: 4,
    address: '123 Ocean Drive, Goa',
    description:
      'This luxurious villa offers breathtaking ocean views, spacious interiors, private garden, swimming pool, and modern architecture.',
    amenities: ['Swimming Pool', 'Garden', 'WiFi', 'Parking'],
    image: 'assets/images/slide2.jpg'
  };
  constructor() { }

  ngOnInit() {}

}
