import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

Swiper.use([Pagination, Autoplay]);


interface SlideText {
  title: string;
  subtitle: string;
  subsubtitle: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-user-statistics',
  templateUrl: './user-statistics.component.html',
  styleUrls: ['./user-statistics.component.scss'],
})
export class UserStatisticsComponent implements OnInit {
@ViewChild(IonContent) content: IonContent | undefined;
  currentIndex = 0;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  slideTexts: SlideText[] = [
    {
      title: 'Welcome to Your Real Estate Hub',
      subtitle: 'Manage Leads Effortlessly',
      subsubtitle: 'Stay Ahead of the Market',
      description: 'Track listings, follow up with clients, and close deals faster with our powerful CRM tools.',
      image: '/assets/images/real-estate-1.jpg'
    },
    {
      title: 'All-in-One CRM Solution',
      subtitle: 'From Listings to Closings',
      subsubtitle: 'Everything in One Place',
      description: 'Organize properties, schedule viewings, and automate follow-ups — all from your dashboard.',
      image: '/assets/images/real-estate-2.jpg'
    },
    {
      title: 'Grow Your Real Estate Business',
      subtitle: 'Smart Insights & Analytics',
      subsubtitle: 'Make Data-Driven Decisions',
      description: 'Gain actionable insights, monitor agent performance, and optimize your sales funnel.',
      image: '/assets/images/real-estate-3.jpg'
    }
  ];
  currentSlide = 0;

  timelineData = [
  {
    title: 'Property Listed',
    time: 'Today, 9:30 AM',
    description: '2 BHK Apartment in Mumbai was added.',
    icon: 'checkmark-done',
    side: 'left',
    color: 'success'
  },
  {
    title: 'New Lead Added',
    description: 'Lead Rohit Doe added from Website',
    icon: 'person-add',
    side: 'right',
    color: 'warning'
  },
  {
    title: 'Call Scheduled',
    description: 'Call scheduled with Jane Smith',
    icon: 'call',
    side: 'left',
    color: 'danger'
  },
  {
    title: 'Deal Closed',
    description: 'Deal closed for Villa in Bangalore.',
    icon: 'briefcase',
    side: 'right',
    color: 'primary'
  },
  {
    title: 'Appointment Set',
    description: 'Showing scheduled at 4 PM, Whitefield.',
    icon: 'calendar',
    side: 'left',
    color: 'tertiary'
  },
  {
    title: 'Document Uploaded',
    description: 'Agreement uploaded for property ID #1023.',
    icon: 'document',
    side: 'left',
    color: 'medium'
  },
  {
    title: 'New User Registered',
    description: 'Ravi Kumar created an account.',
    icon: 'person',
    side: 'right',
    color: 'success'
  }
];


  slides = [
    {
      image: 'assets/images/slide1.jpg',
      title: 'Fresh Fruits',
      description: 'Healthy and Organic',
    },
    {
      image: 'assets/images/slide2.jpg',
      title: 'Tropical Vibes',
      description: 'Taste the freshness',
    },
    {
      image: 'assets/images/slide3.jpg',
      title: 'Farm to Table',
      description: 'Straight from nature',
    },
  ];

  onSlideChange(event: any) {
    event.target.getActiveIndex().then((index: number) => {
      this.currentIndex = index % this.slides.length;
    });
  }

  sliderImages = [
    'assets/Images/slide1.jpg',
    'assets/Images/slide2.jpg',
    'assets/Images/slide3.jpg'
  ];

  statusList = [
  { name: 'Total', count: 120 },
  { name: 'Untouched', count: 30 },
  { name: 'Unassigned', count: 15 },
  { name: 'No Reminder', count: 10 }
];


  dashboardCards = [
    { icon: 'home', count: 100, label: 'Total Properties Listed!', color: 'blue', link:'dashboard/properties' },
    { icon: 'document-text', count: 12, label: 'New Top Leads Today!', color: 'yellow', link:'dashboard/leads', params: 'New'},
    { icon: 'cart', count: 124, label: 'Closed Deals This Month!', color: 'green', link:'dashboard/leads', params: 'Closed' },
    { icon: 'help-circle', count: 13, label: 'Pending Appointments!', color: 'red', link:'dashboard/leads', params: 'Pending' }
  ];

  onCardClick(card: any) {
    this.router.navigate([`${card.link}`], { queryParams: {type:card.params} });
  }

  ngAfterViewInit(): void {
    new Swiper('.mySwiper', {
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      fadeEffect: {
        crossFade: true,
      },
    });
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slideTexts.length;
    }, 5000);
  }

  showChat = false;
  inputMsg = '';

  messages: { text: string; isUser: boolean; name?: string, timestamp: Date }[] = [
    { text: 'Hello! How can I help you?', isUser: false, name: 'Support', timestamp: new Date },
  ];

  toggleChat() {
    this.showChat = !this.showChat;
    if (this.showChat) {
      setTimeout(() => this.scrollToBottom(), 100); // scroll chat to bottom when opened
    }
  }

  sendMessage() {

    // Add user's message
    this.messages.push({ text: this.inputMsg, isUser: true, timestamp: new Date() });
    this.inputMsg = '';

    this.scrollToBottom();

    // Simulate reply after 1 sec
    setTimeout(() => {
      this.messages.push({
        text: 'Thanks for your message! We will get back soon.',
        isUser: false,
        name: 'Support',
         timestamp: new Date()
      });
      this.scrollToBottom();
    }, 1000);
  }

  scrollToBottom() {
    const content = document.querySelector('.chat-content');
    if (content) {
      setTimeout(() => {
        content.scrollTop = content.scrollHeight;
      }, 100);
    }
  }


}
