import { Injectable } from "@nestjs/common";
import { ReqChangeAbleDto } from "../dto/req-dto/req-change-able.dto";
import { ResProductSize } from "../dto/res-dto/res-size.dto";
import { ReqSetSizeDto } from "../dto/req-dto/req-set-size.dto";

@Injectable()
export abstract class ProductSizeRepository {
	abstract setSize(data: ReqSetSizeDto): Promise<void>;

	abstract getSize(productId: string, sizeId: string): Promise<ResProductSize>;

	abstract getSizesProduct(productId: string): Promise<ResProductSize[]>;

	abstract updateSize(productId: string, sizeId: string, data: ReqChangeAbleDto): Promise<void>;

	abstract deleteSize(productId: string, sizeId: string): Promise<void>;
}
