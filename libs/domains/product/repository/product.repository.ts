import { Injectable } from "@nestjs/common";
import { ReqCreateProductDto } from "../dto/req-dto/req-create-product.dto";
import { ReqUpdateProductDto } from "../dto/req-dto/req-update-product.dto";
import { ResProductDto } from "../dto/res-dto/res-product.dto";

@Injectable()
export abstract class ProductRepository {
	abstract createProduct(data: ReqCreateProductDto): Promise<void>;

	abstract getProduct(id: string): Promise<ResProductDto>;

	abstract getProductsByName(name: string): Promise<ResProductDto[]>;

	abstract getProducts(): Promise<ResProductDto[]>;

	abstract updateProduct(id: string, data: ReqUpdateProductDto): Promise<void>;

	abstract deleteProduct(id: string): Promise<void>;
}
