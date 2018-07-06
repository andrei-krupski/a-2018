import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { LoginService } from '../login.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const userData = {
    id: 1,
    login: 'AndrewK',
    password: '1234',
    firstName: 'Andrew',
    lastName: 'Kru'
  };

  const loginServiceStub = {
    logIn: jasmine.createSpy('logIn').and.returnValue({
      success: true,
      user: userData
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [{ provide: LoginService, useValue: loginServiceStub }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show certain elements if not logged', () => {
    const loginElement = fixture.debugElement.query(By.css('.header__login-in'));
    const logoutElement = fixture.debugElement.query(By.css('.header__login-off'));

    expect(component.isLogged).toBe(false);
    expect(component.user).toBe(undefined);
    expect(loginElement.nativeElement).toBeTruthy();
    expect(logoutElement).not.toBeTruthy();
  });

  it('should call LoginService and set user data on login', () => {
    spyOn(component, 'logIn').and.callThrough();

    const loginElement = fixture.debugElement.query(By.css('.header__login-in'));

    loginElement.triggerEventHandler('click', null);

    expect(component.logIn).toHaveBeenCalled();
    expect(loginServiceStub.logIn).toHaveBeenCalledWith('AndrewK', '1234');
    expect(component.isLogged).toBe(true);
    expect(component.user).toEqual(userData);
  });

  it('should show certain elements after login', () => {
    component.logIn();
    fixture.detectChanges();

    const loginElement = fixture.debugElement.query(By.css('.header__login-in'));
    const logoutElement = fixture.debugElement.query(By.css('.header__login-off'));

    expect(loginElement).not.toBeTruthy();
    expect(logoutElement.nativeElement).toBeTruthy();
  });

  it('should set component data after log off', () => {
    spyOn(component, 'logOff').and.callThrough();

    component.logIn();
    fixture.detectChanges();

    const logoutElement = fixture.debugElement.query(By.css('.header__login-off'));

    logoutElement.triggerEventHandler('click', null);

    expect(component.logOff).toHaveBeenCalled();
    expect(component.user).toBe(null);
  });
});
