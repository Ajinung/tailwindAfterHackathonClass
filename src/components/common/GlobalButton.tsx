interface btn {
  name: string;
}

const GlobalButton: React.FC<btn> = ({ name }) => {
  return (
    <button
      type="submit"
      className="px-2.5 py-4 bg-slate-950 text-white m-1 w-20"
    >
      {name}
    </button>
  );
};

export default GlobalButton;
