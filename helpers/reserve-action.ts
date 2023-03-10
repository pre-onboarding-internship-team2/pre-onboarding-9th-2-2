import { ProductType } from "@/types/product.type";

export const reserveItem = async (args: ProductType): Promise<Response> => {
  return await fetch(`/api/reservations`, {
    method: "POST",
    body: JSON.stringify(args),
  });
};

export const updateReservedItem = async (args: {
  idx: number;
  quantity: number;
}) => {
  await fetch(`/api/reservations`, {
    method: "PATCH",
    body: JSON.stringify({
      idx: args.idx,
      quantity: args.quantity,
    }),
  });
};

export const deleteReservedItem = async (args: {
  deletedId: number;
}): Promise<Response> => {
  return await fetch(`/api/reservations`, {
    method: "DELETE",
    body: JSON.stringify({
      deletedId: args.deletedId,
    }),
  });
};
