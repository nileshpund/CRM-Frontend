import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-user-properties',
  templateUrl: './user-properties.component.html',
  styleUrls: ['./user-properties.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserPropertiesComponent implements OnInit {

  selectedTab = 'All';
  filterText = '';

  properties = [
    {
      title: 'Luxury Villa',
      subtitle: '5 BHK | Ocean View',
      priceRange: '₹ 1.5 Cr – ₹ 2.2 Cr',
      status: 'Available',
      rating: 4,
      image: 'assets/images/slide1.jpg'
    },
    {
      title: 'Hilltop Mansion',
      subtitle: '4 BHK | Mountain View',
      priceRange: '₹ 2.3 Cr – ₹ 3.1 Cr',
      status: 'Available',
      rating: 5,
      image: 'assets/images/slide2.jpg'
    },
    {
      title: 'Hilltop Mansion',
      subtitle: '4 BHK | Mountain View',
      priceRange: '₹ 2.3 Cr – ₹ 3.1 Cr',
      status: 'Upcoming',
      rating: 5,
      image: 'assets/images/slide2.jpg'
    },
    {
      title: 'Urban Studio',
      subtitle: '1 BHK | City Center',
      priceRange: '₹ 45 L – ₹ 60 L',
      status: 'Sold',
      rating: 3,
      image: 'assets/images/slide3.jpg'
    }
  ];


  get filteredUsers() {
    return this.properties.filter((user: any) =>
      (this.selectedTab === 'All' || user.status === this.selectedTab) &&
      (!this.filterText || user.designation?.toLowerCase().includes(this.filterText.toLowerCase()))
    );
  }


  selectProperty(property: any) {
    console.log('Clicked Property:', property);
    // You can navigate or open a modal here
  }

  constructor(private router: Router, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() { }


  selectTab(tab: string) {
    this.selectedTab = tab;
    this.filterText = ''; // Clear filter when tab changes
  }

  goToDetails() {
    this.router.navigate(['/dashboard/properties/details']);
  }

  addProperty() {
    this.router.navigate(['/dashboard/properties/add']);

  }


  sections = [
    { key: 'new', label: 'New' },
    { key: 'upcoming', label: 'Upcoming' },
    { key: 'pending', label: 'Pending' }
  ];

  activeSection = 'new';

  // properties = [
  //   {
  //     title: 'Modern Apartment',
  //     subtitle: '2 BHK',
  //     priceRange: '$1000 - $1200',
  //     status: 'Available',
  //     rating: 4,
  //     address: '123 Main St',
  //     description: 'Spacious apartment in downtown.',
  //     amenities: ['Pool', 'Gym', 'Parking'],
  //     category: 'new'
  //   },
  //   {
  //     title: 'Cozy Cottage',
  //     subtitle: '1 BHK',
  //     priceRange: '$800 - $950',
  //     status: 'Coming Soon',
  //     rating: 3,
  //     address: '456 Lake View',
  //     description: 'A lovely lakeside cottage.',
  //     amenities: ['Lake Access', 'Fireplace'],
  //     category: 'upcoming'
  //   },
  //   {
  //     title: 'Luxury Villa',
  //     subtitle: '4 BHK',
  //     priceRange: '$2500+',
  //     status: 'Pending Approval',
  //     rating: 5,
  //     address: '789 Palm Blvd',
  //     description: 'Top-tier villa with private pool.',
  //     amenities: ['Pool', 'Garden', 'Security'],
  //     category: 'pending'
  //   }
  // ];

  get filteredProperties() {
    return this.properties.filter((p: any) => p.category === this.activeSection);
  }

  setSection(section: string) {
    this.activeSection = section;
  }

  // shareProperty(property: any) {
  //   const text = `
  //     ${property.title}
  //     ${property.subtitle}
  //     Price: ${property.priceRange}
  //     Status: ${property.status}
  //       `;

  //   window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  // }

async shareProperty(event: Event, property: any) {
  event.stopPropagation();

  const text = `
🏠 ${property.title}
📍 ${property.subtitle}
💰 Price: ${property.priceRange}
🏷 Status: ${property.status}
⭐ Rating: ${'⭐'.repeat(property.rating)}${'☆'.repeat(5 - property.rating)}
  `;

  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Share Property',
    buttons: [
      {
        text: 'WhatsApp',
        icon: 'logo-whatsapp',
        handler: () => {
          window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
        }
      },
      {
        text: 'Email',
        icon: 'mail',
        handler: () => {
          const subject = encodeURIComponent('Property Details');
          const body = encodeURIComponent(text);
          window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
        }
      },
      {
        text: 'Copy to Clipboard',
        icon: 'copy',
        handler: () => {
          navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
          });
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel'
      }
    ]
  });

  await actionSheet.present();
}


}
