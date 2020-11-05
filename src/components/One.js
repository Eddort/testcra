import React from 'react';
import atomize from "@quarkly/atomize";
import rc from 'rc-table';

const One = props => <div {...props}>
	Say hellарпарпаo One
</div>;

export default atomize(One)({
	name: "One",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "One — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});