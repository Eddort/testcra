import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Text, Button } from "@quarkly/widgets";
import One from "./One";
const defaultProps = {
	"padding": "100px 0",
	"sm-padding": "40px 0"
};
const overrides = {
	"one": {
		"kind": "One",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "20px 0 0 0",
			"children": "Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are."
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"font": "--lead",
			"margin": "20px",
			"children": "Button"
		}
	}
};

const Two = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" align-items="center" />
		<One {...override("one")} />
		<Text {...override("text")} />
		<Button {...override("button")} />
		{children}
	</Section>;
};

Object.assign(Two, { ...Section,
	defaultProps,
	overrides
});
export default Two;