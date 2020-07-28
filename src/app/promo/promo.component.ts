import { Component, OnInit } from '@angular/core';
import {PromoService} from "../promo.service";

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  constructor(
    private promoStore: PromoService
  ) { }

  ngOnInit(): void {

  }

  /**
   * Главное меню
   */
  public getPromoMenuItems () {
    return this.promoStore.promoMenuItems;
  }

  /**
   * Блок Интро
   */
  public getIntroBlock() {
    return this.promoStore.introBlock;
  }

  /**
   * Блок Привет
   */
  public getHelloBlockDescription() {
    return this.promoStore.helloBlockDescription;
  }

  /**
   * Блок Резюме
   */
  public getResume() {
    return this.promoStore.resume;
  }


  /**
   * Блок Портфолио
   */
  public getPortfolio() {
    return this.promoStore.portfolio;
  }

  /**
   * Блок Футер
   */
  public getFooterBlock() {
    return this.promoStore.footerBlock;
  }

}
