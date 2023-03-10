import { NextPage } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import ReservationsList from "@/components/reservations/reservations-list";
import { ProductType } from "@/types/product.type";
import { buildCartPath, extractCart } from "../api/reservations";

interface ReservationPageProps {
  data: ProductType[];
}

const ReservationPage: NextPage<ReservationPageProps> = () => {
  return <ReservationsList />;
};

export default ReservationPage;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["carts"], async () => {
    const filePath = buildCartPath();
    const data = extractCart(filePath);
    return data;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
