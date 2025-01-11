type LayoutProps = {
	content: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ content }) => {
	return (
		<div>
			<main>{content}</main>
		</div>
	);
};

export default Layout;
