import { ProductType } from "@/types/product-type";
import Image from "next/image";
import classes from "./reservation-item.module.css";

interface ReservationItemProps {
  reservedItem: ProductType;
}

const ReservationItem = ({ reservedItem }: ReservationItemProps) => {
  return (
    <li className={classes.reservation__item}>
      <Image src={reservedItem.mainImage} alt="" width={300} height={200} />
      <span>이름 : {reservedItem.name}</span>
      <span>가격 : {reservedItem.price}</span>
    </li>
  );
};

export default ReservationItem;
