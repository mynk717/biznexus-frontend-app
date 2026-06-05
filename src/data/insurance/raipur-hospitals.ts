export interface Hospital {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  specialties: string[];
  bestFor: string;
  status: 'Verified Cashless' | 'Network Partner';
  phone: string;
  website?: string;
}

export const raipurCashlessHospitals: Hospital[] = [
  {
    id: 'ramkrishna-care',
    name: 'Ramkrishna CARE Hospital',
    neighborhood: 'Pachpedi Naka',
    address: 'Aurobindo Enclave, Pachpedi Naka, Raipur, Chhattisgarh 492001',
    specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Gastroenterology'],
    bestFor: 'Multi-specialty, Critical Care',
    status: 'Verified Cashless',
    phone: '0771-3500300',
    website: 'https://www.carehospitals.com/raipur/ramkrishna-care-hospital/'
  },
  {
    id: 'mmi-narayana',
    name: 'MMI Narayana Multispeciality Hospital',
    neighborhood: 'Lalpur',
    address: 'Dhamtari Rd, Lalpur, Raipur, Chhattisgarh 492001',
    specialties: ['Cardiac Sciences', 'Nephrology', 'Urology', 'Internal Medicine'],
    bestFor: 'Heart & Kidney Care',
    status: 'Verified Cashless',
    phone: '0771-3500800',
    website: 'https://www.narayanahealth.org/raipur/mmi-narayana-multispeciality-hospital'
  },
  {
    id: 'shri-balaji',
    name: 'Shri Balaji Institute of Medical Science (SBIMS)',
    neighborhood: 'Mowa',
    address: 'Vidhan Sabha Rd, Mowa, Raipur, Chhattisgarh 492001',
    specialties: ['Trauma Care', 'General Surgery', 'Obstetrics & Gynecology'],
    bestFor: 'Emergency & Trauma',
    status: 'Verified Cashless',
    phone: '0771-4241000',
    website: 'https://sbims.in/'
  },
  {
    id: 'shree-narayana',
    name: 'Shree Narayana Hospital',
    neighborhood: 'Devendra Nagar',
    address: 'Near Pandri Bus Stand, Devendra Nagar, Raipur, Chhattisgarh 492001',
    specialties: ['Critical Care', 'General Medicine', 'Pulmonology'],
    bestFor: 'General Surgery & ICU',
    status: 'Verified Cashless',
    phone: '0771-4044000',
    website: 'https://shreenarayanahospital.com/'
  },
  {
    id: 'asg-eye',
    name: 'ASG Eye Hospital',
    neighborhood: 'Shankar Nagar',
    address: 'Near Vidya Hospital, Shankar Nagar, Raipur, Chhattisgarh 492007',
    specialties: ['Ophthalmology', 'Cataract', 'LASIK', 'Retina'],
    bestFor: 'Eye Care & Surgeries',
    status: 'Verified Cashless',
    phone: '1800-1200-111',
    website: 'https://asgeyehospital.com/eye-hospital-raipur/'
  },
  {
    id: 'sanjeevani-cbcc',
    name: 'Sanjeevani CBCC Cancer Hospital',
    neighborhood: 'Dhamtari Road',
    address: 'Near Pachpedi Naka, Dhamtari Rd, Raipur, Chhattisgarh 492001',
    specialties: ['Oncology', 'Chemotherapy', 'Radiation'],
    bestFor: 'Cancer Care',
    status: 'Verified Cashless',
    phone: '0771-4225000',
    website: 'https://sanjeevanicbcc.com/'
  },
  {
    id: 'vy-care',
    name: 'VY Hospital',
    neighborhood: 'Kamal Vihar',
    address: 'Sector 12, Kamal Vihar, Raipur, Chhattisgarh 492001',
    specialties: ['Joint Replacement', 'Sports Medicine', 'General Surgery'],
    bestFor: 'Orthopedics',
    status: 'Network Partner',
    phone: '0771-2970811',
    website: 'https://vyhospital.com/'
  },
];
