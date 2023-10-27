import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import {Router} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports:[
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router=TestBed.get(Router);
  }));

  it('should create', () => {
    spyOn(router, "navigate");
    component.ngOnInit();
    expect(router.navigate).toHaveBeenCalledWith(['login'])
  });
});
