import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController } from '@ionic/angular';

interface User {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'Active' | 'Inactive';
}


@Component({
  selector: 'app-user-leads',
  templateUrl: './user-leads.component.html',
  styleUrls: ['./user-leads.component.scss'],

})
export class UserLeadsComponent implements OnInit {
  userList = [
    // New (4 records)
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'New',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Mumbai',
      timeStamp: '2025-06-14 10:30 AM',
      description: '3 BHK apartment in prime location'
    },
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'New',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Lucknow',
      timeStamp: '2025-06-14 09:30 AM',
      description: 'Shop in high street'
    },
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'New',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Noida',
      timeStamp: '2025-06-14 08:00 AM',
      description: 'Penthouse property'
    },
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'New',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Chandigarh',
      timeStamp: '2025-06-14 07:45 AM',
      description: 'Showroom space'
    },

    // Hot (4 records)
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '9876543210',
      badge: 'Hot',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Pune',
      timeStamp: '2025-06-14 11:00 AM',
      description: '2 BHK flat with garden view'
    },
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '9876543210',
      badge: 'Hot',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Goa',
      timeStamp: '2025-06-14 01:00 PM',
      description: 'Beachfront villa'
    },
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '9876543210',
      badge: 'Hot',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Surat',
      timeStamp: '2025-06-14 02:00 PM',
      description: 'Luxury duplex'
    },
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '9876543210',
      badge: 'Hot',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Vadodara',
      timeStamp: '2025-06-14 03:00 PM',
      description: '3 BHK independent house'
    },

    // Untouched (4 records)
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'Untouched',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Delhi',
      timeStamp: '2025-06-14 09:00 AM',
      description: 'Commercial office space'
    },
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'Untouched',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Kanpur',
      timeStamp: '2025-06-14 10:00 AM',
      description: 'Factory shed'
    },
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'Untouched',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Patna',
      timeStamp: '2025-06-14 11:00 AM',
      description: 'Warehouse unit'
    },
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'Untouched',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Ranchi',
      timeStamp: '2025-06-14 12:00 PM',
      description: 'Office floor'
    },

    // Closed (4 records)
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '867965325',
      badge: 'Closed',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Bangalore',
      timeStamp: '2025-06-13 04:45 PM',
      description: 'Retail shop in mall'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Closed',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Jaipur',
      timeStamp: '2025-06-13 05:00 PM',
      description: 'Farmhouse property'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Closed',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Bhopal',
      timeStamp: '2025-06-14 11:30 AM',
      description: 'Office building'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Closed',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Udaipur',
      timeStamp: '2025-06-14 12:30 PM',
      description: 'Resort plot'
    },

    // Booked (4 records)
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '867965325',
      badge: 'Booked',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Hyderabad',
      timeStamp: '2025-06-12 03:15 PM',
      description: 'Luxury villa'
    },
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '867965325',
      badge: 'Booked',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Mysore',
      timeStamp: '2025-06-12 04:00 PM',
      description: 'Duplex house'
    },
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '867965325',
      badge: 'Booked',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Coimbatore',
      timeStamp: '2025-06-12 05:00 PM',
      description: 'Farmhouse'
    },
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '867965325',
      badge: 'Booked',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Vizag',
      timeStamp: '2025-06-12 06:00 PM',
      description: 'Beach house'
    },

    // Pending (4 records)
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '9876543210',
      badge: 'Pending',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Indore',
      timeStamp: '2025-06-13 02:00 PM',
      description: 'Studio apartment'
    },
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'Pending',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Nagpur',
      timeStamp: '2025-06-13 03:30 PM',
      description: 'Office space for IT'
    },
    {
      name: 'John Doe',
      designation: 'Manager',
      email: 'john@example.com',
      phone: '1234567890',
      badge: 'Pending',
      salesExecName: 'Amit Kumar',
      propertyLocation: 'Guwahati',
      timeStamp: '2025-06-13 04:00 PM',
      description: 'Warehouse land'
    },
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '9876543210',
      badge: 'Pending',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Raipur',
      timeStamp: '2025-06-13 05:00 PM',
      description: 'Shopping complex'
    },

    // Re-visit Scheduled (4 records)
    {
      name: 'Jane Smith',
      designation: 'Sales Lead',
      email: 'jane@example.com',
      phone: '3424674689',
      badge: 'Re-visit Scheduled',
      salesExecName: 'Priya Singh',
      propertyLocation: 'Chennai',
      timeStamp: '2025-06-14 02:30 PM',
      description: 'Plot in gated community'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Re-visit Scheduled',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Kolkata',
      timeStamp: '2025-06-14 01:00 PM',
      description: 'Warehouse property'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Re-visit Scheduled',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Amritsar',
      timeStamp: '2025-06-14 02:00 PM',
      description: 'Factory land'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Re-visit Scheduled',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Ludhiana',
      timeStamp: '2025-06-14 03:00 PM',
      description: 'Retail space'
    },

    // Final Negotiation (4 records)
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Final Negotiation',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Ahmedabad',
      timeStamp: '2025-06-14 12:00 PM',
      description: 'Industrial land'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Final Negotiation',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Gurgaon',
      timeStamp: '2025-06-14 01:00 PM',
      description: 'Commercial plot'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Final Negotiation',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Noida',
      timeStamp: '2025-06-14 02:00 PM',
      description: 'Office tower'
    },
    {
      name: 'Vicky Metha',
      designation: 'Sales Lead',
      email: 'Vicky@example.com',
      phone: '4972543232',
      badge: 'Final Negotiation',
      salesExecName: 'Rahul Sharma',
      propertyLocation: 'Faridabad',
      timeStamp: '2025-06-14 03:00 PM',
      description: 'Industrial shed'
    }
  ];




  @ViewChild('fileInput')
  fileInput!: ElementRef;

  selectedTab = 'New';
  showFilterSheet = false;
  filterText = '';

  designationOptions = ['Manager', 'Developer', 'Designer', 'Tester', 'HR'];
  selectedOptions: { [key: string]: boolean } = {};

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      if (params && params.type) {
        this.selectedTab = params.type;
      }
    });
  }

  constructor(
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private router: Router
  ) { }


  get filteredUsers() {
    return this.userList.filter(user =>
      user.badge === this.selectedTab &&
      (!this.filterText || user.designation.toLowerCase().includes(this.filterText.toLowerCase()))
    );
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.filterText = ''; // Clear filter when tab changes
  }

  applyFilter() {
    const selected = Object.keys(this.selectedOptions).filter(k => this.selectedOptions[k]);
    console.log('Selected options:', selected);
    this.showFilterSheet = true;
  }

  setFilter() {
    this.showFilterSheet = false;
  }

  call(phone: string) {
    // Phone logic
  }

  email(email: string) {
    // Email logic
  }

  whatsapp(phone: string) {
    // WhatsApp logic
  }


  async openUploadOptionsSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Upload Type',
      buttons: [
        {
          text: '📂 Bulk Upload',
          icon: 'cloud-upload',
          handler: () => {
            console.log('Bulk upload selected');
            this.fileInput.nativeElement.click();
          }
        },
        {
          text: '✍️ Manual Upload',
          icon: 'create',
          handler: () => {
            console.log('Manual upload selected');
            this.router.navigate(['/dashboard/leads/add-leads']);

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

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    console.log('Selected files:', files);

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      console.log(`File ${i + 1}: ${file?.name}, size: ${file?.size}`);
    }
  }

}
