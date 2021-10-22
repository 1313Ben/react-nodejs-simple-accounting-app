import CurrentDate from "../date/CurrentDate";
import './LeftHeader.scss';
	
const LeftHeader = () => {
	return (
			<div class="box-title pd-l pd-r pd-t">
				<h2>Kassenbuch</h2>
					<CurrentDate date={new Date()} />
			</div>
	);
};

export default LeftHeader;
