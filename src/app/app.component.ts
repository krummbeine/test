import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './models/languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  Language = Language;

  constructor(private _translationService: TranslateService) {
    _translationService.addLangs([ Language.English, Language.German ]);
    _translationService.setDefaultLang(Language.German);
    _translationService.use(Language.German);
  }

  setLanguage(lang: string): void {
    this._translationService.use(lang);
  }

  get currentLanguage(): string {
    return this._translationService?.currentLang;
  }
}
