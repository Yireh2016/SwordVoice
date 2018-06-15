import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 redesSociales=[
      {icono:'fab fa-facebook-f ',ruta:'https://www.facebook.com/SwordVoice/'},
      {icono:'fab fa-youtube',ruta:'https://www.youtube.com/channel/UCle-HTb2TPvcVk0AaljQyOQ'},
      {icono:'fab fa-instagram',ruta:'https://www.instagram.com/swordvoice_official/'},
      {icono:'fab fa-twitter',ruta:'https://twitter.com/SwordVoice_1'},
    ]

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(["en", "es"]);

   }

  ngOnInit() {
  }

}
