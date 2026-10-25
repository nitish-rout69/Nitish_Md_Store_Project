export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  mrp: number;
  category: string;
  image: string;
  rating: number;
  badge?: string;
  prescription: boolean;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

export const categories: Category[] = [
  { id: 1, name: 'Prescription Medicine', icon: 'Pill', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
  { id: 2, name: 'Wellness & Fitness', icon: 'HeartPulse', color: 'text-rose-600', bgColor: 'bg-rose-50' },
  { id: 3, name: 'Vitamins & Supplements', icon: 'Zap', color: 'text-amber-600', bgColor: 'bg-amber-50' },
  { id: 4, name: 'Baby Care', icon: 'Baby', color: 'text-sky-600', bgColor: 'bg-sky-50' },
  { id: 5, name: 'Personal Care', icon: 'Sparkles', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { id: 6, name: 'Diabetes Care', icon: 'Activity', color: 'text-orange-600', bgColor: 'bg-orange-50' },
  { id: 7, name: 'Covid Essentials', icon: 'ShieldCheck', color: 'text-teal-600', bgColor: 'bg-teal-50' },
  { id: 8, name: 'Devices & Equipment', icon: 'Stethoscope', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Vitamin C 1000mg Tablets',
    brand: 'Limcee',
    price: 45,
    mrp: 60,
    category: 'Vitamins & Supplements',
    image: 'https://images.pexels.com/photos/13779102/pexels-photo-13779102.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 4.5,
    badge: '25% OFF',
    prescription: false,
  },
  {
    id: 2,
    name: 'Multivitamin Capsules',
    brand: 'Revital H',
    price: 320,
    mrp: 450,
    category: 'Vitamins & Supplements',
    image: 'https://images.pexels.com/photos/13779112/pexels-photo-13779112.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 4.7,
    badge: 'BESTSELLER',
    prescription: false,
  },
  {
    id: 3,
    name: 'Omega-3 Fish Oil Softgels',
    brand: 'HealthKart',
    price: 599,
    mrp: 799,
    category: 'Wellness & Fitness',
    image: 'https://images.pexels.com/photos/13779107/pexels-photo-13779107.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 4.6,
    badge: '25% OFF',
    prescription: false,
  },
  {
    id: 4,
    name: 'Calcium + Vitamin D3 Tablets',
    brand: 'Shelcal',
    price: 110,
    mrp: 145,
    category: 'Vitamins & Supplements',
    image: 'https://images.pexels.com/photos/13779105/pexels-photo-13779105.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 4.4,
    prescription: false,
  },
  {
    id: 5,
    name: 'Zinc + Vitamin C Effervescent',
    brand: 'Fast&Up',
    price: 349,
    mrp: 499,
    category: 'Wellness & Fitness',
    image: 'https://images.pexels.com/photos/13787561/pexels-photo-13787561.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 4.8,
    badge: 'NEW',
    prescription: false,
  },
  {
    id: 6,
    name: 'Protein Supplement Powder',
    brand: 'MuscleBlaze',
    price: 1299,
    mrp: 1799,
    category: 'Wellness & Fitness',
    image: 'https://images.pexels.com/photos/35166625/pexels-photo-35166625.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 4.5,
    badge: '28% OFF',
    prescription: false,
  },
  {
    id: 7,
    name: 'Baby Gentle Lotion',
    brand: 'Cetaphil Baby',
    price: 399,
    mrp: 550,
    category: 'Baby Care',
    image: 'https://images.pexels.com/photos/28482020/pexels-photo-28482020.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 4.9,
    badge: 'BESTSELLER',
    prescription: false,
  },
  {
    id: 8,
    name: 'Skincare Serum Set',
    brand: 'Ela De Pure',
    price: 899,
    mrp: 1200,
    category: 'Personal Care',
    image: 'https://images.pexels.com/photos/39392892/pexels-photo-39392892.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
    rating: 4.6,
    badge: '25% OFF',
    prescription: false,
  },
];

export interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: ServiceFeature[] = [
  { id: 1, title: 'Free Home Delivery', description: 'On orders above Rs. 500 within 5 km radius', icon: 'Truck' },
  { id: 2, title: '24/7 Online Service', description: 'Order medicines anytime, day or night', icon: 'Clock' },
  { id: 3, title: 'Genuine Medicines', description: '100% authentic products with batch verification', icon: 'BadgeCheck' },
  { id: 4, title: 'Expert Consultation', description: 'Free health advice from certified pharmacists', icon: 'Stethoscope' },
  { id: 5, title: 'Fast Refill Service', description: 'Auto-refill your regular prescriptions', icon: 'RefreshCw' },
  { id: 6, title: 'Upload Prescription', description: 'Send your prescription, we deliver medicines', icon: 'FileText' },
];
