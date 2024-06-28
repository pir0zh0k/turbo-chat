import { Client, Databases, Account } from "appwrite";

const url: string = import.meta.env.APPWRITE_ENDPOINT || "http://localhost/v1";
const app: string = import.meta.env.APPWRITE_APP_ID || "667cfc620018a9dc1d4e";

const client: Client = new Client();

client.setEndpoint(url).setProject(app);

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);
