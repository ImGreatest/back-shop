import { Injectable } from "@nestjs/common";
import { ReqAddBucketDto } from "../dto/req-dto/req-add-bucket.dto";
import { ReqUpdateBucketDto } from "../dto/req-dto/req-update-bucket.dto";
import { ResBucketDto } from "../dto/res-dto/res-bucket.dto";
import { ResGetCellBucketsDto } from "../dto/res-dto/res-get-cell-buckets.dto";

@Injectable()
export abstract class UserBucketRepository {
	abstract addToBucket(data: ReqAddBucketDto): Promise<void>;

	abstract getCellBuckets(userId: string, productId: string): Promise<ResGetCellBucketsDto>;

	abstract getBucket(userId: string): Promise<ResBucketDto[]>;

	abstract updateBucket(userId: string, productId: string, data: ReqUpdateBucketDto): Promise<void>;

	abstract deleteBucket(userId: string, productId: string): Promise<void>;
}
