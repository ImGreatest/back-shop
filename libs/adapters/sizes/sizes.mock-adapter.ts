import { Injectable } from "@nestjs/common";
import { SizesRepository } from "../../domains/sizes/repository/sizes.repository";
import { ReqCreateSizeDto } from "../../domains/sizes/dto/req-dto/req-create-size.dto";
import { ResSizeDto } from "../../domains/sizes/dto/res-dto/res-size.dto";
import { ReqUpdateSizeDto } from "../../domains/sizes/dto/req-dto/req-update-size.dto";

@Injectable()
export class SizesMockAdapter extends SizesRepository {
	constructor() {
		super();
	}

	createSize(data: ReqCreateSizeDto): Promise<void> {
		throw new Error(`${{ ...data }}`);
	}

	getSize(id: string): Promise<ResSizeDto> {
		throw new Error(`${id}`);
	}

	getSizeByName(name: string): Promise<ResSizeDto[]> {
		throw new Error(`${name}`);
	}

	getSizes(): Promise<ResSizeDto[]> {
		throw new Error();
	}

	updateSize(id: string, data: ReqUpdateSizeDto): Promise<void> {
		throw new Error(`${id}, ${{ ...data }}`);
	}

	deleteSize(id: string): Promise<void> {
		throw new Error(`${id}`);
	}
}
