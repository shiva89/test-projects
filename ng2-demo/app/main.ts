import { provide, bind } from 'angular2/core';
import { bootstrap }    from 'angular2/platform/browser';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';

/// <reference path="../ts-lib/require.d.ts" />

bootstrap(AppComponent,[HTTP_PROVIDERS]); 

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/