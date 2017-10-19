import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ImagesRouteComponent } from './images-route.component';
import { ListComponent } from '../../components/list/list.component';

import { ImageProviderService } from '../../services/image-provider.service';
import { MockBackendService } from '../../services/mock-backend.service';

describe('ImagesRouteComponent', () => {
  let component: ImagesRouteComponent;
  let fixture: ComponentFixture<ImagesRouteComponent>;
  let mockBackendService: MockBackendService;

  beforeEach(async(() => {
    mockBackendService = new MockBackendService();
    TestBed.configureTestingModule({
      declarations: [
        ImagesRouteComponent,
        ListComponent
      ],
      imports: [
        FormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        ImageProviderService,
        { provide: HttpClient, useValue: mockBackendService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
