import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {
  public notificationCount: number = 10;
  public showHeader: boolean = true;
  activeTab: string = '';

  constructor(private router: Router) {}

  users: User[] = [];
  filteredUsers: User[] = [];
  pagedUsers: User[] = [];

  searchTerm = '';
  currentPage = 1;
  pageSize = 5;
  totalPages = 1;


  ngOnInit() {
    // Sample dummy data
    this.users = [
      { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', role: 'Admin', status: 'Active' },
      { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', role: 'User', status: 'Inactive' },
      { name: 'Alice Johnson', email: 'alice@example.com', phone: '555-666-7777', role: 'User', status: 'Active' },
      { name: 'Bob Brown', email: 'bob@example.com', phone: '111-222-3333', role: 'Moderator', status: 'Active' },
      { name: 'Charlie Davis', email: 'charlie@example.com', phone: '444-555-6666', role: 'User', status: 'Inactive' },
      { name: 'Diana Evans', email: 'diana@example.com', phone: '888-999-0000', role: 'Admin', status: 'Active' },
      // Add more users if you want to test pagination
    ];

    this.filteredUsers = [...this.users];
    this.calculatePagination();
  }

  filterUsers() {
    const term = this.searchTerm.toLowerCase();
    this.filteredUsers = this.users.filter(u =>
      u.name.toLowerCase().includes(term) ||
      u.email.toLowerCase().includes(term) ||
      u.phone.toLowerCase().includes(term) ||
      u.role.toLowerCase().includes(term) ||
      u.status.toLowerCase().includes(term)
    );
    this.currentPage = 1;
    this.calculatePagination();
  }

  calculatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
    this.updatePagedUsers();
  }

  updatePagedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedUsers = this.filteredUsers.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedUsers();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedUsers();
    }
  }

  editUser(user: User) {
    console.log('Edit user', user);
    // Implement your edit logic or open modal here
  }

  deleteUser(user: User) {
    console.log('Delete user', user);
    // Implement your delete logic or confirmation modal here
  }

  goToNotification(){

  }

  goToCart(){

  }

   navigateTo(path: string) {
    this.router.navigate([path]);
    this.activeTab = path;
  } 
}
