import { Injectable } from "@nestjs/common";
import { ProductRepository } from "../../domains/product/repository/product.repository";
import { ReqCreateProductDto } from "../../domains/product/dto/req-dto/req-create-product.dto";
import { ResProductDto } from "../../domains/product/dto/res-dto/res-product.dto";
import { ReqUpdateProductDto } from "../../domains/product/dto/req-dto/req-update-product.dto";

@Injectable()
export class ProductMockAdapter extends ProductRepository {
	async createProduct(data: ReqCreateProductDto): Promise<void> {
		throw new Error(`${{ ...data }}`);
	}

	async getProduct(id: string): Promise<ResProductDto> {
		throw new Error(`${id}`);
	}

	async getProductsByName(name: string): Promise<ResProductDto[]> {
		throw new Error(`${name}`);
	}

	async getProducts(): Promise<ResProductDto[]> {
		throw new Error();
	}

	async updateProduct(id: string, data: ReqUpdateProductDto): Promise<void> {
		throw new  Error(`${id}, ${{ ...data }}`);
	}

	async deleteProduct(id: string): Promise<void> {
		throw new Error(`${id}`);
	}
}
