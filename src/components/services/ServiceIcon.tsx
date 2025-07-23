import { Briefcase, ShieldCheck, Zap, Car, Plane, HelpCircle, PenTool, Home } from "lucide-react";
import type { LucideProps } from "lucide-react";

interface ServiceIconProps extends LucideProps {
  slug: string;
}

const iconMap: Record<string, React.ElementType<LucideProps>> = {
  "digital-marketing": Briefcase,
  "tata-aig-health-insurance": ShieldCheck,
  "solar-panel-installation": Zap,
  "used-cars-for-sale": Car,
  "tour-packages": Plane,
  "content-creation": PenTool,
  "properties-for-sale": Home,
};

export default function ServiceIcon({ slug, ...props }: ServiceIconProps) {
  const IconComponent = iconMap[slug] || HelpCircle; // Default to HelpCircle if no match
  return <IconComponent {...props} />;
}
