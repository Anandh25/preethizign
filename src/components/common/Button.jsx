const Button = ({ children, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 uppercase tracking-[3px] text-sm transition duration-300 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
