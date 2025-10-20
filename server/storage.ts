import { contactSubmissions, type ContactSubmission, type InsertContact } from "@shared/schema.ts";
import { db } from "./db";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
}

// Mock storage for development when database is not available
export class MockStorage implements IStorage {
  private submissions: ContactSubmission[] = [];

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      id: crypto.randomUUID(),
      ...insertContact,
      createdAt: new Date(),
    };
    this.submissions.push(submission);
    console.log("Mock storage: Contact submission created", submission);
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    console.log("Mock storage: Returning all submissions", this.submissions.length);
    return [...this.submissions];
  }
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    if (!db) throw new Error('Database connection not available');
    const [submission] = await db
      .insert(contactSubmissions)
      .values(insertContact)
      .returning();
    return submission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    if (!db) throw new Error('Database connection not available');
    return await db.select().from(contactSubmissions);
  }
}

// Use mock storage in development, real database storage in production
export const storage = process.env.NODE_ENV === 'development' 
  ? new MockStorage() 
  : new DatabaseStorage();
