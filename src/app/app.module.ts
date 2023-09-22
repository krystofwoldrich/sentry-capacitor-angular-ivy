import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import * as Sentry from "@sentry/capacitor";
// Use @sentry/angular-ivy for Angular 12+ or `@sentry/angular` from Angular 10 and 11
import * as SentryAngular from "@sentry/angular-ivy";

Sentry.init(
  {
    dsn: "https://c7ff512b7c2f44439c92b48e98150fa0@o1357066.ingest.sentry.io/4505307273363456",

    // Set your release version, such as "getsentry@1.0.0"
    release: "my-project-name@<release-name>",
    // Set your dist version, such as "1"
    dist: "<dist>",
    integrations: [
      // Registers and configures the Tracing integration,
      // which automatically instruments your application to monitor its
      // performance, including custom Angular routing instrumentation
      new SentryAngular.BrowserTracing({
        tracePropagationTargets: ["localhost", "https://yourserver.io/api"],
        routingInstrumentation: SentryAngular.routingInstrumentation,
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  },
  // Forward the init method from @sentry/angular
  SentryAngular.init
);

Sentry.captureException(new Error("Test exception"));

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
