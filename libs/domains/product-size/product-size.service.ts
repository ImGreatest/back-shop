import { Injectable } from "@nestjs/common";
import { ProductSizeRepository } from "./repository/product-size.repository";
import { ReqSetSizeDto } from "./dto/req-dto/req-set-size.dto";
import { ReqChangeAbleDto } from "./dto/req-dto/req-change-able.dto";
import { ResProductSize } from "./dto/res-dto/res-size.dto";

@Injectable()
export class ProductSizeService {
	constructor(private rep: ProductSizeRepository) {}

	setSize(data: ReqSetSizeDto): Promise<void> {
		return this.rep.setSize(data);
	}

	getSize(productId: string, sizeId: string): Promise<ResProductSize> {
		return this.rep.getSize(productId, sizeId);
	}

	getSizesProduct(productId: string): Promise<ResProductSize[]> {
		return this.rep.getSizesProduct(productId);
	}

	updateSize(productId: string, sizeId: string, data: ReqChangeAbleDto): Promise<void> {
		return this.rep.updateSize(productId, sizeId, data);
	}

	deleteSize(productId: string, sizeId: string): Promise<void> {
		return this.rep.deleteSize(productId, sizeId);
	}
}
