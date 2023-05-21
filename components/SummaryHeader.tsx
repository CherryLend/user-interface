type SummaryHeaderProps = {
  title: string;
  subtitle: string;
};

const SummaryHeader = ({ title, subtitle }: SummaryHeaderProps) => (
  <div className="pl-6 w-full">
    <h6 className="tracking-tighter text-lg -mb-2">{title}</h6>
    <small className="tracking-tight leading-none opacity-60">{subtitle}</small>
  </div>
);

export default SummaryHeader;
