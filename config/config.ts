import 'dotenv/config';
import * as process from 'node:process';

export const config = Object.freeze({
	HashSaltRound: Number(process.env.HASH_SALT_ROUND),
	JwtSecret: process.env.JWT_SECRET,
	JwtExpiresIn: process.env.JWT_EXPIRES_IN,
	RefreshLength: 64,
	JwtLifeTime: 9000,
	TokenCoolDown: 600
});

export const emailConfig = Object.freeze({
	EmailFrom: process.env.EMAIL_FROM,
	EmailPass: process.env.EMAIL_PASS,
})
