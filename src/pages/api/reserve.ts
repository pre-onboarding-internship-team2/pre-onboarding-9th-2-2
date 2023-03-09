import { ReserveProps } from "@/services/reserve";
import { NextApiRequest, NextApiResponse } from "next";

// 실제 API가 없어서 만든 임시 장바구니
let reservations: ReserveProps[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(reservations.slice());
    return;
  }

  if (req.method === "POST") {
    const rest = reservations.filter(
      (e) => e.productInfo.idx !== req.body.productInfo.idx
    );
    reservations =
      req.body.quantity === 0
        ? [...rest]
        : [...rest, { ...req.body, reserveDate: Date.now() }];

    res.status(201).json(reservations);
    return;
  }

  if (req.method === "PUT") {
    const idx = Number(req.query["idx"]);
    const target = reservations.find((e) => e.productInfo.idx === idx);
    const rest = reservations.filter((e) => e.productInfo.idx !== idx);

    if (req.body.quantity === 0) {
      reservations = [...rest];
    } else if (target) {
      reservations = [...rest, { ...target, quantity: req.body.quantity }];
    }

    res.status(201).json(reservations);
    return;
  }

  if (req.method === "DELETE") {
    const idx = Number(req.query["idx"]);
    const rest = reservations.filter((e) => e.productInfo.idx !== idx);

    reservations = [...rest];

    res.status(201).json(reservations);
    return;
  }

  res.status(400);
}
