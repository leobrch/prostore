import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";
import Decimal from "decimal.js/decimal";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: Decimal;
  price: Decimal;
  createdAt: Date;
};
