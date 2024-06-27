import { Injectable } from "@nestjs/common";
import { UserBucketRepository } from "./repository/user-bucket.repository";
import { ReqAddBucketDto } from "./dto/req-dto/req-add-bucket.dto";
import { ResBucketDto } from "./dto/res-dto/res-bucket.dto";
import { ResGetCellBucketsDto } from "./dto/res-dto/res-get-cell-buckets.dto";
import { ReqUpdateBucketDto } from "./dto/req-dto/req-update-bucket.dto";

@Injectable()
export class UserBucketService {
	constructor(private rep: UserBucketRepository) {}

	addToBucket(data: ReqAddBucketDto): Promise<void> {
		return this.rep.addToBucket(data);
	}

	getBucket(userId: string): Promise<ResBucketDto[]> {
		return this.rep.getBucket(userId);
	}

	getCellBuckets(userId: string, productId: string): Promise<ResGetCellBucketsDto> {
		return this.rep.getCellBuckets(userId, productId);
	}

	updateBucket(userId: string, productId: string, data: ReqUpdateBucketDto): Promise<void> {
		return this.rep.updateBucket(userId, productId, data);
	}

	deleteBucket(userId: string, productId: string): Promise<void> {
		return this.rep.deleteBucket(userId, productId);
	}
}
