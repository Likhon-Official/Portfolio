function MenuButton() {
  return (
    <button className="space-y-2 group">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-8 h-0.5 bg-[#64ffda] transform transition-all duration-300"
        />
      ))}
    </button>
  );
}

export default MenuButton;