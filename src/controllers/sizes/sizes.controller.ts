import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SizesService } from "../../../libs/domains/sizes/sizes.service";
import { ReqCreateSizeDto } from "../../../libs/domains/sizes/dto/req-dto/req-create-size.dto";
import { ResSizeDto } from "../../../libs/domains/sizes/dto/res-dto/res-size.dto";
import { ReqUpdateSizeDto } from "../../../libs/domains/sizes/dto/req-dto/req-update-size.dto";

@ApiTags('sizes')
@Controller('sizes')
export class SizesController {
	constructor(private sizesService: SizesService) {}

	@Post('create-size')
	@ApiBody({ type: ReqCreateSizeDto })
	createSize(@Body() data: ReqCreateSizeDto): Promise<void> {
		return this.sizesService.createSize(data);
	}

	@Get('get-size/:id')
	getSize(@Param('id') id: string): Promise<ResSizeDto> {
		return this.sizesService.getSize(id);
	}

	@Get('get-sizes')
	getSizes(): Promise<ResSizeDto[]> {
		return this.sizesService.getSizes();
	}

	@Get('get-size-by-name/:name')
	getSizeByName(@Param('name') name: string): Promise<ResSizeDto[]> {
		return this.sizesService.getSizeByName(name);
	}

	@Put('update-size/:id')
	@ApiBody({ type: ReqUpdateSizeDto })
	updateSize(
		@Param('id') id: string,
		@Body() data: ReqUpdateSizeDto,
	): Promise<void> {
		return this.sizesService.updateSize(id, data);
	}

	@Delete('delete-size/:id')
	deleteSize(@Param('id') id: string): Promise<void> {
		return this.sizesService.deleteSize(id);
	}
}
