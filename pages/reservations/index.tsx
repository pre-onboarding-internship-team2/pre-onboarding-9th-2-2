import ReservationsList from "@/components/reservations/reservations-list";
import { ProductType } from "@/types/product-type";
import { NextPage } from "next";
import { buildCartPath, extractCart } from "../api/reservations";

interface ReservationPageProps {
  data: ProductType[];
}

const ReservationPage: NextPage<ReservationPageProps> = ({ data }) => {
  return <ReservationsList data={data} />;
};

export default ReservationPage;

export const getStaticProps = async () => {
  const filePath = buildCartPath();
  const data = extractCart(filePath);
  return {
    props: {
      data,
    },
  };
};
