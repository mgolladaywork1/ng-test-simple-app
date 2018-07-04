# TestSimpleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

This will be a very simple application made from Angular-CLI 6.  It contains an app component, stocks component and a \<router-outlet> in the app template.

**Note:** As of 07/04/2018, you may get a warning from Github regarding security issue.  That is due to some dependency from karma.  Some experts in the community is working on the fix.  Once the fix is released, we will update this project 


This project assume that you have [Git Bash] installed in your pc.  if you don’t, please install [Git Bash] first.  

To start creating the application, you will have to have Angular-CLI installed globally.  If you don’t, please do:  
$ npm install -g @angular/cli

$ ng --version

After you have Angular-CLI 6 installed and clone this repo, you can run 

$ ng serve

This will display the application

$ ng test

This will start the test server.  You will see a chrome browser pop up such as: 

http://localhost:9876/?id=89731951

```
3 specs, 0 failures

AppComponent
should create the app
should have as title 'test-simple-app'
should render title in a h1 tag
Welcome to test-simple-app!
```

## The special tasks in this Test App is:    
1. Angular test does not add our modules dependencies like components, services... by default. So we need to do that manually in our tests

such as for the Test to recognize \<app-stocks>, we need to include the StocksComponent here.
```
describe('AppComponent', () => {  
  beforeEach(async(() => {  
    TestBed.configureTestingModule({  
      declarations: [  
        AppComponent,  
        StocksComponent,  
        RouterOutletStubComponent  
      ],  
    }).compileComponents();  
  }));  
```
2. We could mock and stub the component.  

```
@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }

describe('AppComponent', () => {  
  beforeEach(async(() => {  
    TestBed.configureTestingModule({  
      declarations: [  
        AppComponent,  
        StocksComponent,  
        RouterOutletStubComponent  
      ],  
    }).compileComponents();  
  }));  

```

## We will continue our learning journey in Testing to look into more complex cases.