export const Footer = () => {
	return (
		<footer className="flex flex-1 justify-center py-4">
			<small>&copy; {`${new Date().getFullYear()} foobar.`}</small>
		</footer>
	);
};
