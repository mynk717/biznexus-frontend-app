import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: 'Solar Savings Calculator | MDNetwork',
  description:
    'Estimate your monthly and yearly savings by installing solar panels for your home or business in Raipur.',
};

export default function SolarCalculatorPage() {
  return <CalculatorClient />;
}
