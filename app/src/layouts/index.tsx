import Header from "@/components/Header";

type LayoutProps = {
	content: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ content }) => {
	return (
		<div>
			<Header />
			<main>{content}</main>
		</div>
	);
};

export default Layout;
