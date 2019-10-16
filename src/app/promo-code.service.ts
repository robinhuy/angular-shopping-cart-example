import { Injectable } from '@angular/core';
import { PromoCode } from './promo-code.model';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeService {
  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ];

  applyPromoCode(code: string): number {
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.code === code
    );
    if (promoCode) return promoCode.discountPercent;

    return 0;
  }
}
