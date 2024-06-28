import { ApiBody, ApiTags } from "@nestjs/swagger";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserBucketService } from "../../../libs/domains/user-bucket/user-bucket.service";
import { ReqAddBucketDto } from "../../../libs/domains/user-bucket/dto/req-dto/req-add-bucket.dto";
import { ResBucketDto } from "../../../libs/domains/user-bucket/dto/res-dto/res-bucket.dto";
import { ResGetCellBucketsDto } from "../../../libs/domains/user-bucket/dto/res-dto/res-get-cell-buckets.dto";
import { ReqUpdateBucketDto } from "../../../libs/domains/user-bucket/dto/req-dto/req-update-bucket.dto";

@ApiTags('user-bucket')
@Controller('user-bucket')
export class UserBucketController {
	constructor(private userBucketService: UserBucketService) {}

	@Post('add-bucket')
	@ApiBody({ type: ReqAddBucketDto })
	addToBucket(@Body() data: ReqAddBucketDto): Promise<void> {
		return this.userBucketService.addToBucket(data);
	}

	@Get('get-bucket/:userId')
	getBucket(@Param('userId') userId: string): Promise<ResBucketDto[]> {
		return this.userBucketService.getBucket(userId);
	}

	@Get('get-cell-buckets/:userId/:productId')
	getCellBuckets(
		@Param('userId') userId: string,
		@Param('productId') productId: string
	): Promise<ResGetCellBucketsDto> {
		return this.userBucketService.getCellBuckets(userId, productId);
	}

	@Put('update-bucket/:userId/:productId')
	@ApiBody({ type: ReqUpdateBucketDto })
	updateBucket(
		@Param('userId') userId: string,
		@Param('productId') productId: string,
		@Body() data: ReqUpdateBucketDto
	): Promise<void> {
		return this.userBucketService.updateBucket(userId, productId, data);
	}

	@Delete('delete-bucket/:userId/:productId')
	deleteBucket(
		@Param('userId') userId: string,
		@Param('productId') productId: string,
	): Promise<void> {
		return this.userBucketService.deleteBucket(userId, productId);
	}
}