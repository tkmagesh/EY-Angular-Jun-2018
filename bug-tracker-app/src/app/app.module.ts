import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';

import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';
import { BugSortComponent } from './bugTracker/views/bugSort.component';

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugSortService } from './bugTracker/services/bugSortService';
import { BugServerService } from './bugTracker/services/bugServer.service';

import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';


@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
    , BugStatsComponent
    , BugEditComponent
    , BugSortComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , UtilsModule
    , HttpClientModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
    , BugSortService
    , BugServerService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
