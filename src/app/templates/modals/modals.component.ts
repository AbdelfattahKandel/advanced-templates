import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';



interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  status: 'Active' | 'Inactive' | 'Pending';
  joined: Date;
  score: number;
}

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
  imports: [TableModule, ButtonModule, DialogModule, TooltipModule, FormsModule],
})
export class ModalsComponent {
  displayView = false;
  displayEdit = false;
  displayConfirm = false;
  displayAlert = false;
  displayForm = false;

  isAr = () => false;

  users: UserData[] = [
    { id: 1, name: 'Abdo', email: 'abdo@example.com', role: 'Admin', avatar: 'https://i.pravatar.cc/100?img=1', status: 'Active', joined: new Date(2022, 1, 12), score: 85 },
    { id: 2, name: 'Sara', email: 'sara@example.com', role: 'User', avatar: 'https://i.pravatar.cc/100?img=2', status: 'Pending', joined: new Date(2023, 3, 5), score: 70 },
    { id: 3, name: 'Ali', email: 'ali@example.com', role: 'Editor', avatar: 'https://i.pravatar.cc/100?img=3', status: 'Inactive', joined: new Date(2021, 6, 20), score: 92 },
  ];

  selectedData: UserData = this.users[0];
  editedData: UserData = { ...this.selectedData };

  selectUser(user: UserData) {
    this.selectedData = user;
    this.editedData = { ...user };
    this.displayView = true;
  }

  saveEdit() {
    debugger
    const index = this.users.findIndex(u => u.id === this.editedData.id);
    if (index !== -1) this.users[index] = { ...this.editedData };
    this.displayEdit = false;
    this.displayForm = false;
  }

  confirmAction() {
    alert('Action Confirmed!');
    this.displayConfirm = false;
  }
}

