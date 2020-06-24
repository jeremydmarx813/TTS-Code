export default (state, action) => {
	switch (action.type) {
		case 'GET_MONGO_BOOKS':
			return {
				...state,
				savedBooks : action.payload.data
			};
		case 'GET_NYT_BOOKS':
			const testGenreArr = [];
			return {
				...state,
				genres : action.payload.data.results.lists.reduce((s, e) => {
					if (!testGenreArr.includes(e.list_name)) {
						s.push(e.list_name);
					}
					return s;
				}, []),
				books  : action.payload.data.results.lists
					.reduce((s, e) => {
						let funcBooks = e.books.map((b) => {
							let tempId;
							if (state.savedBooks.find((savedBook) => savedBook.title === b.title)) {
								b.isSaved = true;
								b._id = state.savedBooks.find((savedBook) => savedBook.title === b.title)._id;
							} else {
								b.isSaved = false;
							}

							b.list_name = e.list_name;
							return b;
						});
						s.push(funcBooks);
						return s;
					}, [])
					.flat()
			};
		case 'SWITCH_SELECTED_GENRE':
			// console.log('switch genre select');
			return {
			   ...state,
			   selectedGenre: action.payload
			}
		case 'TOGGLE_BOOK_SAVED':
			return {
				...state,
				books : state.books.map((b) => {
					if (b.title === action.payload) {
						// console.log('books toggle block');
						b.isSaved = !b.isSaved;
						return b;
					} else {
						return b;
					}
				})
			};
		case 'POST_MONGO_BOOK':
			return {
				...state,
				books : state.books.map((b) => {
					if (b.title === action.payload.title && !b._id) {
						console.log('post mongo block');
						b._id = action.payload._id;
						return b;
					} else {
						return b;
					}
				})
			};
		case 'DELETE_NYT_BOOK_FROM_STATE':
			return {
				...state,
				books : state.books.filter((b) => b.book_uri !== action.payload)
			};
		case 'TRANSACTION_ERROR':
			return {
				...state,
				error : action.payload
			};
		default:
			return state;
	}
};
