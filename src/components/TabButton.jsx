export const TabButton = ({ label, onClick, ativo }) => {
	return (
		<button
			onClick={onClick}
			className={`px-4 py-2 rounded-t-lg text-sm font-medium border cursor-pointer
      ${
				ativo
					? "bg-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] border-gray-200"
					: "bg-[#e5e5e5] text-gray-600 border-transparent"
			}`}
		>
			{label}
		</button>
	);
};
