import { z } from "zod";

export const signInFormSchema = z.object({
	email: z
		.string()
		.email({ message: "メールアドレスの形式で入力してください" }),
	password: z
		.string()
		.min(8, { message: "パスワードは8文字以上で入力してください" }),
});
