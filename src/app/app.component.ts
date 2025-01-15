import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  student = { name: '', email: '', mobile: '' };
  submittedData: { name: string; email: string; mobile: string } | null = null;
  submissionError: boolean = false;
  isLoading: boolean = false;  

  submitForm() {
    if (this.validateInput()) {
      this.isLoading = true; 
      setTimeout(() => {  
        this.submittedData = { ...this.student };
        this.submissionError = false; 
        this.isLoading = false;
      }, 2000); 
    } else {
      this.submissionError = true;
    }
  }

  validateInput(): boolean {
    return (
      this.student.name.trim() !== '' &&
      this.validateEmail(this.student.email) &&
      this.student.mobile.trim() !== ''
    );
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  resetForm() {
    this.student = { name: '', email: '', mobile: '' };
  }
}
