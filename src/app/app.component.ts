import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TitleCasePipe,
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  JsonPipe,
  NgIf,
} from '@angular/common';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    ConvertPipe,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount!: number;
  height!: number;
  miles!: number;
  car = {
    make: 'Toyota',
    vmodel: 'Camry',
    year: 2000,
  };

  onNameChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.name = value;
  }

  onDateChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.date = value;
  }

  onAmountChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.amount = parseFloat(value);
  }

  onHeightChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.height = parseFloat(value);
  }

  onMilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.miles = parseFloat(value);
  }
}
