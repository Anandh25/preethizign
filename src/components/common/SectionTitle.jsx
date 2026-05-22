const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className="mb-8">
      <p className="uppercase tracking-[4px] pl-[2px] text-sm text-[#b59b82] mb-4">
        {subtitle}
      </p>

      <h2 className="text-4xl lg:text-5xl leading-tight max-w-xl">{title}</h2>
    </div>
  );
};

export default SectionTitle;
