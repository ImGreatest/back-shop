import { Injectable } from "@nestjs/common";
import { UserBucketRepository } from "../../domains/user-bucket/repository/user-bucket.repository";
import { PrismaService } from "../../services/prisma/prisma.service";
import { ReqAddBucketDto } from "../../domains/user-bucket/dto/req-dto/req-add-bucket.dto";
import { ResBucketDto } from "../../domains/user-bucket/dto/res-dto/res-bucket.dto";
import { ResGetCellBucketsDto } from "../../domains/user-bucket/dto/res-dto/res-get-cell-buckets.dto";
import { ReqUpdateBucketDto } from "../../domains/user-bucket/dto/req-dto/req-update-bucket.dto";

@Injectable()
export class UserBucketAdapter extends UserBucketRepository {
	constructor(private prisma: PrismaService) {
		super();
	}

	async addToBucket(data: ReqAddBucketDto): Promise<void> {
		await this.prisma.userBucket.create({
			data: { ...data },
		});
	}

	async getBucket(userId: string): Promise<ResBucketDto[]> {
	  const bucket = await this.prisma.userBucket.findMany({
	    where: {
	      userId: userId,
	    },
	    include: {
	      product: true,
	    },
	  });

	  return bucket.map((value) => ({
	    product: {
	      id: value.product.id,
	      name: value.product.name,
	      description: value.product.description,
	      price: value.product.price,
	      count: value.product.count,
	      createdAt: value.product.createdAt,
	      updatedAt: value.product.updatedAt,
	      deletedAt: value.product.deletedAt,
	    },
	    count: value.count,
	  }));
	}

	async getCellBuckets(userId: string, productId: string): Promise<ResGetCellBucketsDto> {
		return this.prisma.userBucket.findUnique({
			where: {
				userId_productId: {
					userId: userId,
					productId: productId,
				},
			},
		});
	}

	async updateBucket(userId: string, productId: string, data: ReqUpdateBucketDto): Promise<void> {
		await this.prisma.userBucket.update({
			where: {
				userId_productId: {
					userId: userId,
					productId: productId,
				},
			},
			data: { ...data },
		});
	}

	async deleteBucket(userId: string, productId: string): Promise<void> {
		await this.prisma.userBucket.delete({
			where: {
				userId_productId: {
					userId: userId,
					productId: productId,
				},
			},
		});
	}
}
