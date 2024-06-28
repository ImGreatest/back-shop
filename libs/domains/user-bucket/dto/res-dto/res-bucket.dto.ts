import { Product } from "@prisma/client";

export class ResBucketDto {
	product: Product;
	count: number;
}