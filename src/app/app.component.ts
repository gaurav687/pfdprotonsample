import { Component, AfterViewInit, ViewChild, ElementRef, asNativeElements } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('viewer')
  viewerRef!: ElementRef;
  ngAfterViewInit(): void {
    WebViewer({
      path: '../assets/lib',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      
    }, this.viewerRef.nativeElement)
  }
  title = 'pdftron';
}
