import { PrivyConfig } from "@privy-io/privy-node";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.API_KEY ? process.env.API_KEY : "";
const API_SECRET = process.env.API_SECRET ? process.env.API_SECRET : "";

const privyConfig = new PrivyConfig(API_KEY, API_SECRET);
