import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullname: z.string().min(3),
  phoneNumber: z.string().min(10).max(10),
  walletBalance: z.number().optional(),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
