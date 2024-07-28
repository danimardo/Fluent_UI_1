import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button, Card} from "@fluentui/web-components";
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ApiService} from "./services/api.service";
import {JsonPipe} from "@angular/common";
import { TruncatePipe } from './pipes/truncate.pipe';
import { RouterLink, RouterModule } from '@angular/router'


@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [RouterOutlet, JsonPipe, TruncatePipe, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fluent_UI_1';

}



