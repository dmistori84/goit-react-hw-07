import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
	const dispatch = useDispatch();
	const filter = useSelector(state => state.filters.name);

	const onChangeFilter = event => {
		dispatch(changeFilter(event.target.value));
	};

	return (
		<label className={css.label}>
			Find contacts by name
			<input
				className={css.input}
				type="text"
				value={filter}
				onChange={onChangeFilter}
			/>
		</label>
	);
};

export default SearchBox;
