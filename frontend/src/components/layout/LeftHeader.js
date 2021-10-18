import ExpenseDate from "../date/ExpenseDate";

const LeftHeader = () => {
	return (
		<div class="one-half column border-right mg-l">
			<div class="box-title pd-l pd-t">
				<h2>Meine Ausgaben</h2>
				<div class="row">
					<ExpenseDate date={new Date(2021, 8, 7)} />
				</div>
			</div>
		</div>
	);
};

export default LeftHeader;
