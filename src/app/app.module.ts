import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreModule } from './core/core.module';
import { LessonsModule } from './lessons/lessons.module';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import reducers from './reducers';

import { authInterceptorProvider, loaderInterceptorProvider } from './http-interceptors';
import { LoadingBlockComponent } from './loading-block/loading-block.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingBlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    LessonsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 30
    })
  ],
  providers: [authInterceptorProvider, loaderInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
