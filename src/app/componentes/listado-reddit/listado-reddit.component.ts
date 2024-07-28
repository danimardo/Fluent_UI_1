import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button, Card} from "@fluentui/web-components";
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {JsonPipe} from "@angular/common";
import { TruncatePipe } from '../../pipes/truncate.pipe';


@Component({
  selector: 'app-listado-reddit',
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [RouterOutlet, JsonPipe, TruncatePipe],
  templateUrl: './listado-reddit.component.html',
  styleUrl: './listado-reddit.component.css'
})
export class ListadoRedditComponent {
  private api = inject(ApiService)
  redditData = this.api.getRedditPosts();
}
