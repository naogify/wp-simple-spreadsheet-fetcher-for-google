import { TabPanel } from "@wordpress/components";

export default (props) => {
	const { render } = props.render;
	return (
		<TabPanel
			className="my-tab-panel"
			activeClass="active-tab"
			tabs={[
				{
					name: "tab1",
					title: "Tab 1",
					className: "tab-one",
				},
				{
					name: "tab2",
					title: "Tab 2",
					className: "tab-two",
				},
			]}
		>
			{(tab) => {
				<p>{tab.title}</p>;

				if (tab.name === "tab1") {
					render;
				}
			}}
		</TabPanel>
	);
};
