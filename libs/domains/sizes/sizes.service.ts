import { Injectable } from "@nestjs/common";
import { SizesRepository } from "./repository/sizes.repository";
import { ReqCreateSizeDto } from "./dto/req-dto/req-create-size.dto";
import { ResSizeDto } from "./dto/res-dto/res-size.dto";
import { ReqUpdateSizeDto } from "./dto/req-dto/req-update-size.dto";

@Injectable()
export class SizesService {
	constructor(private sizeRep: SizesRepository) {}

	createSize(data: ReqCreateSizeDto): Promise<void> {
		return this.sizeRep.createSize(data);
	}

	getSize(id: string): Promise<ResSizeDto> {
		return this.sizeRep.getSize(id);
	}

	getSizes(): Promise<ResSizeDto[]> {
		return this.sizeRep.getSizes();
	}

	getSizeByName(name: string): Promise<ResSizeDto[]> {
		return this.sizeRep.getSizeByName(name);
	}

	updateSize(id: string, data: ReqUpdateSizeDto): Promise<void> {
		return this.sizeRep.updateSize(id, data);
	}

	deleteSize(id: string): Promise<void> {
		return this.sizeRep.deleteSize(id);
	}
}
