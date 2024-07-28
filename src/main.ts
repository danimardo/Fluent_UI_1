import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {
  provideFluentDesignSystem,
  fluentButton,
  fluentTextField, fluentCard, fluentRadio, fluentRadioGroup,  fluentDataGridCell,
  fluentDataGridRow,
  fluentDataGrid, fluentSkeleton
} from '@fluentui/web-components';

provideFluentDesignSystem()
  .register(
    fluentButton(),
    fluentCard(),
    fluentRadio(),
    fluentRadioGroup(),
    fluentDataGridCell(),
    fluentDataGridRow(),
    fluentDataGrid(),
    fluentSkeleton(),
    fluentTextField());

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));









