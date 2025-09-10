import CONFIG from "../conf/config";
import { Client, Query, Storage, TablesDB } from "appwrite";

export class Service {
  client = new Client();
  storage;
  tablesDB;

  constructor() {
    this.client
      .setEndpoint(CONFIG.APPWRITE_URL)
      .setProject(CONFIG.APPWRITE_PROJECT_ID);

    this.storage = new Storage(this.client);
    this.tablesDB = new TablesDB(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.tablesDB.createRow({
        databaseId: CONFIG.APPWRITE_DATABASE_ID,
        tableId: CONFIG.APPWRITE_TABLE_ID,
        rowId: slug,
        data: { title, content, featuredImage, status, userId },
      });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return null;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.tablesDB.updateRow({
        databaseId: CONFIG.APPWRITE_DATABASE_ID,
        tableId: CONFIG.APPWRITE_TABLE_ID,
        rowId: slug,
        data: { title, content, featuredImage, status },
      });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return null;
    }
  }

  async deletePost(slug) {
    try {
      await this.tablesDB.deleteRow({
        databaseId: CONFIG.APPWRITE_DATABASE_ID,
        tableId: CONFIG.APPWRITE_TABLE_ID,
        rowId: slug,
      });
      return true;
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.tablesDB.getRow({
        databaseId: CONFIG.APPWRITE_DATABASE_ID,
        tableId: CONFIG.APPWRITE_TABLE_ID,
        rowId: slug,
      });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return null;
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.tablesDB.listRows({
        databaseId: CONFIG.APPWRITE_DATABASE_ID,
        tableId: CONFIG.APPWRITE_TABLE_ID,
        queries: queries,
      });
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
      return null;
    }
  }
}

const service = new Service();
export default service;
