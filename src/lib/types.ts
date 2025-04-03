
// User types
export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  aadhaarNumber?: string;
  profileImageUrl?: string;
  role: 'citizen' | 'surveyor' | 'registrar' | 'admin';
  createdAt: Date;
  updatedAt: Date;
}

// Property types
export interface Property {
  id: string;
  title: string;
  description: string;
  address: PropertyAddress;
  area: number; // in square feet/meters
  surveyNumber: string;
  boundaryCoordinates: GeoCoordinate[];
  images: string[];
  documents: Document[];
  owner: User;
  previousOwners: PropertyTransfer[];
  status: PropertyStatus;
  verified: boolean;
  blockchainRecordId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyAddress {
  street: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  country: string;
}

export interface GeoCoordinate {
  latitude: number;
  longitude: number;
}

export type PropertyStatus = 
  | 'active' 
  | 'pending_verification' 
  | 'disputed' 
  | 'transfer_in_progress'
  | 'archived';

// Document types
export interface Document {
  id: string;
  title: string;
  description?: string;
  fileUrl: string;
  fileType: string;
  uploadedBy: User;
  verified: boolean;
  verifiedBy?: User;
  blockchainRecordId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Transfer types
export interface PropertyTransfer {
  id: string;
  property: Property;
  fromOwner: User;
  toOwner: User;
  transferDate: Date;
  transactionHash?: string;
  registrationNumber?: string;
  documents: Document[];
  witnesses: User[];
  status: TransferStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type TransferStatus = 
  | 'initiated' 
  | 'documents_verified' 
  | 'payment_pending' 
  | 'payment_completed' 
  | 'registered' 
  | 'completed' 
  | 'cancelled' 
  | 'disputed';

// Dispute types
export interface Dispute {
  id: string;
  property: Property;
  title: string;
  description: string;
  raisedBy: User;
  raisedAgainst: User;
  status: DisputeStatus;
  resolution?: string;
  documents: Document[];
  createdAt: Date;
  updatedAt: Date;
}

export type DisputeStatus = 
  | 'raised' 
  | 'under_review' 
  | 'evidence_collection' 
  | 'mediation' 
  | 'resolved' 
  | 'escalated_to_court';

// Blockchain types
export interface BlockchainRecord {
  id: string;
  transactionHash: string;
  blockNumber: number;
  timeStamp: Date;
  data: object;
  type: 'property' | 'document' | 'transfer' | 'dispute';
  status: 'pending' | 'confirmed' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

// Mock data for frontend development
export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Residential Plot in Bangalore',
    description: 'A beautiful residential plot located in the suburbs of Bangalore.',
    address: {
      street: '123 Main Street',
      city: 'Bangalore',
      district: 'Bangalore Urban',
      state: 'Karnataka',
      pincode: '560001',
      country: 'India'
    },
    area: 2400,
    surveyNumber: 'SRV123456',
    boundaryCoordinates: [
      { latitude: 12.9716, longitude: 77.5946 },
      { latitude: 12.9720, longitude: 77.5950 },
      { latitude: 12.9715, longitude: 77.5955 },
      { latitude: 12.9711, longitude: 77.5951 }
    ],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000'
    ],
    documents: [],
    owner: {
      id: '1',
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      role: 'citizen',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    previousOwners: [],
    status: 'active',
    verified: true,
    blockchainRecordId: 'bchain123',
    createdAt: new Date('2023-01-10'),
    updatedAt: new Date('2023-01-15')
  },
  {
    id: '2',
    title: 'Agricultural Land in Punjab',
    description: 'Fertile agricultural land perfect for wheat and rice cultivation.',
    address: {
      street: 'Village Patiala',
      city: 'Patiala',
      district: 'Patiala',
      state: 'Punjab',
      pincode: '147001',
      country: 'India'
    },
    area: 48000,
    surveyNumber: 'SRV789012',
    boundaryCoordinates: [
      { latitude: 30.3398, longitude: 76.3869 },
      { latitude: 30.3405, longitude: 76.3875 },
      { latitude: 30.3400, longitude: 76.3885 },
      { latitude: 30.3390, longitude: 76.3879 }
    ],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000'
    ],
    documents: [],
    owner: {
      id: '2',
      name: 'Gurpreet Singh',
      email: 'gurpreet@example.com',
      role: 'citizen',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    previousOwners: [],
    status: 'active',
    verified: true,
    blockchainRecordId: 'bchain456',
    createdAt: new Date('2022-11-05'),
    updatedAt: new Date('2022-11-10')
  },
  {
    id: '3',
    title: 'Commercial Property in Mumbai',
    description: 'Prime commercial property in the heart of Mumbai\'s business district.',
    address: {
      street: '456 Business Avenue',
      city: 'Mumbai',
      district: 'Mumbai City',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India'
    },
    area: 5000,
    surveyNumber: 'SRV345678',
    boundaryCoordinates: [
      { latitude: 19.0760, longitude: 72.8777 },
      { latitude: 19.0765, longitude: 72.8782 },
      { latitude: 19.0760, longitude: 72.8787 },
      { latitude: 19.0755, longitude: 72.8782 }
    ],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000'
    ],
    documents: [],
    owner: {
      id: '3',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      role: 'citizen',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    previousOwners: [],
    status: 'transfer_in_progress',
    verified: true,
    blockchainRecordId: 'bchain789',
    createdAt: new Date('2023-03-20'),
    updatedAt: new Date('2023-03-25')
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Rajesh Kumar',
  email: 'rajesh@example.com',
  phoneNumber: '+91 9876543210',
  aadhaarNumber: '123456789012',
  profileImageUrl: 'https://i.pravatar.cc/300',
  role: 'citizen',
  createdAt: new Date('2022-01-01'),
  updatedAt: new Date('2022-01-01')
};
