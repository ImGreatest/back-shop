import { Injectable } from "@nestjs/common";
import { ReqCreateSizeDto } from "../dto/req-dto/req-create-size.dto";
import { ResSizeDto } from "../dto/res-dto/res-size.dto";
import { ReqUpdateSizeDto } from "../dto/req-dto/req-update-size.dto";

@Injectable()
export abstract class SizesRepository {
	abstract createSize(data: ReqCreateSizeDto): Promise<void>;

	abstract getSize(id: string): Promise<ResSizeDto>;

	abstract getSizes(): Promise<ResSizeDto[]>;

	abstract getSizeByName(name: string): Promise<ResSizeDto[]>;

	abstract updateSize(id: string, data: ReqUpdateSizeDto): Promise<void>;

	abstract deleteSize(id: string): Promise<void>;
}
