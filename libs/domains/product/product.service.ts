import { Injectable } from "@nestjs/common";
import { ReqCreateProductDto } from "./dto/req-dto/req-create-product.dto";
import { ProductRepository } from "./repository/product.repository";
import { ResProductDto } from "./dto/res-dto/res-product.dto";
import { ReqUpdateProductDto } from "./dto/req-dto/req-update-product.dto";

@Injectable()
export class ProductService {
	constructor(private readonly prd: ProductRepository) {}

	createProduct(data: ReqCreateProductDto): Promise<void> {
		return this.prd.createProduct(data);
	}

	getProduct(id: string): Promise<ResProductDto> {
		return this.prd.getProduct(id);
	}

	getProductsByName(name: string): Promise<ResProductDto[]> {
		return this.prd.getProductsByName(name);
	}

	getProducts(): Promise<ResProductDto[]> {
		return this.prd.getProducts();
	}

	updateProduct(id: string, data: ReqUpdateProductDto): Promise<void> {
		return this.prd.updateProduct(id, data);
	}

	deleteProduct(id: string): Promise<void> {
		return this.prd.deleteProduct(id);
	}
}
