
// This is a mock MongoDB service implementation
// In a real project, you would use a backend service with MongoDB Atlas

interface MongoDBDocument {
  _id?: string;
  [key: string]: any;
}

interface MongoDBCollection {
  name: string;
  documents: MongoDBDocument[];
}

interface MongoDBDatabase {
  name: string;
  collections: { [key: string]: MongoDBCollection };
}

class MockMongoDB {
  private static instance: MockMongoDB;
  private database: MongoDBDatabase;
  
  private constructor() {
    // Initialize with some sample collections
    this.database = {
      name: 'landledger_db',
      collections: {
        'users': {
          name: 'users',
          documents: []
        },
        'properties': {
          name: 'properties',
          documents: []
        },
        'transactions': {
          name: 'transactions',
          documents: []
        },
        'verifications': {
          name: 'verifications',
          documents: []
        }
      }
    };
    
    // Load any stored data from localStorage
    this.loadFromStorage();
  }
  
  public static getInstance(): MockMongoDB {
    if (!MockMongoDB.instance) {
      MockMongoDB.instance = new MockMongoDB();
    }
    return MockMongoDB.instance;
  }
  
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }
  
  private loadFromStorage(): void {
    try {
      const storedData = localStorage.getItem('landledger_db');
      if (storedData) {
        this.database = JSON.parse(storedData);
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
    }
  }
  
  private saveToStorage(): void {
    try {
      localStorage.setItem('landledger_db', JSON.stringify(this.database));
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }
  
  public async insertOne(collection: string, document: MongoDBDocument): Promise<string> {
    if (!this.database.collections[collection]) {
      this.database.collections[collection] = {
        name: collection,
        documents: []
      };
    }
    
    const id = this.generateId();
    const docWithId = { ...document, _id: id };
    this.database.collections[collection].documents.push(docWithId);
    this.saveToStorage();
    return id;
  }
  
  public async findOne(collection: string, query: Partial<MongoDBDocument>): Promise<MongoDBDocument | null> {
    if (!this.database.collections[collection]) return null;
    
    const docs = this.database.collections[collection].documents;
    
    // Simple query matching
    for (const doc of docs) {
      let matches = true;
      for (const key in query) {
        if (doc[key] !== query[key]) {
          matches = false;
          break;
        }
      }
      if (matches) return doc;
    }
    
    return null;
  }
  
  public async find(collection: string, query: Partial<MongoDBDocument> = {}): Promise<MongoDBDocument[]> {
    if (!this.database.collections[collection]) return [];
    
    const docs = this.database.collections[collection].documents;
    
    // If no query, return all documents
    if (Object.keys(query).length === 0) return [...docs];
    
    // Filter documents based on query
    return docs.filter(doc => {
      for (const key in query) {
        if (doc[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }
  
  public async updateOne(
    collection: string, 
    query: Partial<MongoDBDocument>, 
    update: Partial<MongoDBDocument>
  ): Promise<boolean> {
    if (!this.database.collections[collection]) return false;
    
    const docs = this.database.collections[collection].documents;
    
    for (let i = 0; i < docs.length; i++) {
      let matches = true;
      for (const key in query) {
        if (docs[i][key] !== query[key]) {
          matches = false;
          break;
        }
      }
      
      if (matches) {
        this.database.collections[collection].documents[i] = {
          ...docs[i],
          ...update
        };
        this.saveToStorage();
        return true;
      }
    }
    
    return false;
  }
  
  public async deleteOne(collection: string, query: Partial<MongoDBDocument>): Promise<boolean> {
    if (!this.database.collections[collection]) return false;
    
    const docs = this.database.collections[collection].documents;
    const initialLength = docs.length;
    
    this.database.collections[collection].documents = docs.filter(doc => {
      for (const key in query) {
        if (doc[key] !== query[key]) {
          return true; // Keep this document
        }
      }
      return false; // Remove this document
    });
    
    const deleted = initialLength > this.database.collections[collection].documents.length;
    if (deleted) {
      this.saveToStorage();
    }
    
    return deleted;
  }
  
  public async clearCollection(collection: string): Promise<void> {
    if (this.database.collections[collection]) {
      this.database.collections[collection].documents = [];
      this.saveToStorage();
    }
  }
  
  public async dropDatabase(): Promise<void> {
    for (const collName in this.database.collections) {
      this.database.collections[collName].documents = [];
    }
    localStorage.removeItem('landledger_db');
  }
}

// Singleton instance for the entire application
export const mongoDB = MockMongoDB.getInstance();

// Service functions for specific collections
export const userService = {
  createUser: async (userData: any) => {
    return mongoDB.insertOne('users', userData);
  },
  
  getUserByEmail: async (email: string) => {
    return mongoDB.findOne('users', { email });
  },
  
  getUserById: async (id: string) => {
    return mongoDB.findOne('users', { _id: id });
  },
  
  updateUser: async (id: string, userData: any) => {
    return mongoDB.updateOne('users', { _id: id }, userData);
  }
};

export const propertyService = {
  createProperty: async (propertyData: any) => {
    return mongoDB.insertOne('properties', propertyData);
  },
  
  getPropertiesByOwner: async (ownerId: string) => {
    return mongoDB.find('properties', { ownerId });
  },
  
  getPropertyById: async (id: string) => {
    return mongoDB.findOne('properties', { _id: id });
  },
  
  updateProperty: async (id: string, propertyData: any) => {
    return mongoDB.updateOne('properties', { _id: id }, propertyData);
  }
};

export const verificationService = {
  createVerification: async (verificationData: any) => {
    return mongoDB.insertOne('verifications', verificationData);
  },
  
  getVerificationsByPropertyId: async (propertyId: string) => {
    return mongoDB.find('verifications', { propertyId });
  },
  
  updateVerificationStatus: async (id: string, status: string) => {
    return mongoDB.updateOne('verifications', { _id: id }, { status });
  }
};

export default mongoDB;
