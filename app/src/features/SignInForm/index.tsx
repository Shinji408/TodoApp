import { signIn } from "@/services/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import type { z } from "zod";
import { signInFormSchema } from "./schema";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { post } from "@/lib/apiClient";
import { useNavigate } from "react-router-dom";

import type { SignInResponse } from "@/types";

export const SignInForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [cookies, setCookie, removeCookie] = useCookies();
	const form = useForm<z.infer<typeof signInFormSchema>>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = form.handleSubmit(
		(values: z.infer<typeof signInFormSchema>) => {
			console.log(values);
			post<SignInResponse, typeof values>("/signin", values)
				.then((res) => {
					setCookie("token", res.token);
					dispatch(signIn());
					navigate("/");
				})
				.catch((err) => {
					console.error(err.response.data.ErrorMessageJP);
				})
				.finally(() => {
					console.log("done");
				});
		},
	);

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="email">Email</FormLabel>
							<FormControl>
								<Input {...field} type="email" id="email" />
							</FormControl>
							<FormMessage>{form.formState.errors.email?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel htmlFor="password">Password</FormLabel>
							<FormControl>
								<Input {...field} type="password" id="password" />
							</FormControl>
							<FormMessage>
								{form.formState.errors.password?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<Button type="submit">Sign In</Button>
			</form>
		</Form>
	);
};
