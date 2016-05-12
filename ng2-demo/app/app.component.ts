import { Component, OnInit } from 'angular2/core';

import {nvD3} from './ts-lib/ng2-nvd3.ts';
import {ChartService} from './services/chart.service';
import {DemoService} from './services/demo.service';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'my-app',
  directives: [nvD3],
  providers: [ChartService, DemoService],
  template: `
    <h1>nvd3 Graph Demo</h1>
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
    <div class="spacing--bottom-25">
    <h1>Two-way binding Demo</h1>
    
    <input [(ngModel)]="name"/><br> My name is <span>{{name}}</span>
    <br/>
    <button (click)="resetName()">Reset Name</button>
    </div>
    <h1>Services Demo</h1>
    <h2>Hil List</h2>
    <ul>
      <li *ngFor="#hilGroup of hilGroups">{{hilGroup.hilGroupName}}</li>
    </ul>
    <h2>Foods</h2>
    <ul>
      <li *ngFor="#food of foods">{{food.name}}</li>
    </ul>
    <h2>Books and Movies</h2>
    <h3>Books</h3>
    <ul>
      <li *ngFor="#book of books">{{book.title}}</li>
    </ul>
    <h3>Movies</h3>
    <ul>
      <li *ngFor="#movie of movies">{{movie.title}}</li>
    </ul>
  `
})
export class AppComponent implements OnInit, OnDestroy {
	  public name: string;
	  public foods;
	  public books;
	  public movies;
	  public hilGroups;
	  options;
	  data;
	  chartType;

    constructor( private _chartService: ChartService, 
		         private _demoService: DemoService  ){
      this.name = "foo";
    }
    
    resetName(){
    	this.name = "foo";
    }
    
    ngOnInit(){
	    console.log('ngOnInit');
	    this.drawGraph();
	    this.getFoods();
	    this.getBooksAndMovies();
	    //this.getHils();
     }
  
  drawGraph(){
	    this.options = {
	    	      chart: {
	    	        type: 'stackedAreaChart',
	    	        height: 450,
	    	        margin : {
	    	          top: 20,
	    	          right: 20,
	    	          bottom: 40,
	    	          left: 55
	    	        },
	    	        x: function(d){ return d.x; },
	    	        y: function(d){ return d.y; },
	    	        useInteractiveGuideline: true,
	    	        xAxis: {
	    	          axisLabel: 'Time (ms)'
	    	        },
	    	        yAxis: {
	    	          axisLabel: 'Voltage (v)',
	    	          tickFormat: function(d){
	    	            return d3.format('.02f')(d);
	    	          },
	    	          axisLabelDistance: -10
	    	        }
	    	      }
	    };
	    	  
	    this.data = this._chartService.getChartData();
  }
  
  getFoods() {
	    this._demoService.getFoods().subscribe(
	      // the first argument is a function which runs on success
	      data => { this.foods = data},
	      // the second argument is a function which runs on error
	      err => console.error(err),
	      // the third argument is a function which runs on completion
	      () => console.log('done loading foods')
	    );
	  }

 getBooksAndMovies() {
	    this._demoService.getBooksAndMovies().subscribe(
	      data => {
	        this.books = data[0]
	        this.movies = data[1]
	      }
	      // No error or completion callbacks here. They are optional, but
	      // you will get console errors if the Observable is in an error state.
	    );
	  }
 

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/