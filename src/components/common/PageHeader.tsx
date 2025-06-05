interface PageHeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader = ({ 
  title = "Choose Your Skip Size", 
  subtitle = "Select the perfect size for your project needs",
  className = ""
}: PageHeaderProps) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <h1 className="text-3xl font-bold text-[#2D3748] mb-2">{title}</h1>
      <p className="text-[#718096]">{subtitle}</p>
    </div>
  );
};
