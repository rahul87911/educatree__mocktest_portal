import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const GITHUB_ICON = `<svg fill="#ffffff" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M22,12.247a10,10,0,0,1-6.833,9.488c-.507.1-.687-.214-.687-.481,0-.328.012-1.407.012-2.743a2.386,2.386,0,0,0-.679-1.852c2.228-.248,4.566-1.093,4.566-4.935a3.859,3.859,0,0,0-1.028-2.683,3.591,3.591,0,0,0-.1-2.647s-.838-.269-2.747,1.025a9.495,9.495,0,0,0-5.007,0c-1.91-1.294-2.75-1.025-2.75-1.025a3.6,3.6,0,0,0-.1,2.647A3.864,3.864,0,0,0,5.62,11.724c0,3.832,2.334,4.69,4.555,4.942A2.137,2.137,0,0,0,9.54,18a2.128,2.128,0,0,1-2.91-.831A2.1,2.1,0,0,0,5.1,16.142s-.977-.013-.069.608A2.646,2.646,0,0,1,6.14,18.213s.586,1.944,3.368,1.34c.005.835.014,1.463.014,1.7,0,.265-.183.574-.683.482A10,10,0,1,1,22,12.247Z"/>

</g>

</svg>`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examfront';

  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  )
  {
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(GITHUB_ICON));
  }
}

