import { ReactElement } from "react";


export enum SelectPage {
  Home = "Home",
  Offers = "Offers",
  Hotel = "Hotel",
  Flight = "Flight",
  Bookings = "Bookings",
}

export interface OfferItems {
  icon: JSX.Element,
  title: string,
  content: string
}

export interface Destination {
  img: string,
  destinations: string,
  price: string,
  duration: string
}
