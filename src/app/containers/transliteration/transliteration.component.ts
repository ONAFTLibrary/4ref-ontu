import { Component, OnInit } from '@angular/core';
import { transliterate } from 'src/app/helpers/transliterate';

@Component({
  selector: 'app-transliteration',
  templateUrl: './transliteration.component.html',
  styleUrls: ['./transliteration.component.scss']
})
export class TransliterationComponent implements OnInit {
  public textForTransliteration: string;

  private _transliteratedText: string = '';
  set transliteratedText(value: string) {
    this._transliteratedText = value;
  }

  get transliteratedText(): string {
    return this._transliteratedText;
  }

  constructor() { }

  ngOnInit(): void {
  }

  transliterateText() {
    this.transliteratedText = transliterate(this.textForTransliteration);
    console.log(this.textForTransliteration)
    console.log(this.transliteratedText)
  }

  clear() {
    this.textForTransliteration = '';
    this.transliteratedText = '';
  }
}
