import React from 'react';

import './styles.scss';

export default function Weight({ weight }) {
	return (
		<div className="weight">
			<h5 className="weight__value">{weight}</h5>
			кг
		</div>
	);
}
