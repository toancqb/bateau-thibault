
export const STORAGE_KEY: string = '2021';

export interface ButtonsInterface {
    name: string,
    detail: {
      icon: string,
      img: string,
      title: string,
      path: string,
      contents: string[]
    }
}

export interface ProduitInterface {
  "owner": string,
  "price": number,
  "id": number,
  "unit": string,
  "discount": number,
  "availability": boolean,
  "name": string,
  "comments": string,
  "category": number,
  "sale": boolean
}

export interface AchatInterface {
  "name": string,
  "detail": ProduitInterface[]
}

export interface CartInterface {
  "item": ProduitInterface,
  "quantity": number
}

export const TEXT_CONTENT = ['XXX YYY ZZZ',
'Qu il est chaud le soleil',
'Quand nous sommes en vacances',
'Y a d la joie des hirondelles',
'C est le sud de la France',
'Papa bricole au garage',
'Maman lit dans la chaise longue',
'Dans le joli paysage',
'Moi je me balade en longe',
'Que du bonheur!',
'Que du bonheur!'];

export const TEXT_CONTENT_CONTACT = ['06.63.99.99.78','lebateaudethibault@gmail.com','www.facebook.com/lebateaudethibault',
'Qu il est chaud le soleil','Quand nous sommes en vacances','Y a d la joie des hirondelles','C est le sud de la France','Papa bricole au garage','Maman lit dans la chaise longue','Dans le joli paysage','Moi je me balade en longe',
'Que du bonheur!'];

export const CHOOSE = 'Choissiez vos produits';