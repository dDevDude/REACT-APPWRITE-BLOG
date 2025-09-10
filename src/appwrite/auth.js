import CONFIG from "../conf/config";
import { Client, Account, ID } from "appwrite";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(CONFIG.APPWRITE_URL)
      .setProject(CONFIG.APPWRITE_PROJECT_ID);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const user = await this.account.create({
        userId: ID.unique,
        email,
        password,
        name,
      });
      if (user) {
        // call another method
        return await this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      return null;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({
        email,
        password,
      });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      return null;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      return false;
    }
  }
}

const authService = new AuthService();

export default authService;
