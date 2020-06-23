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
							if (state.savedBooks.find((savedBook) => savedBook.title === b.title)) {
								b.isSaved = true;
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
		case 'TOGGLE_BOOK_SAVED':
			console.log(action.payload)
			return {
				...state,
				books : state.books.map((b) => {
					if (b.title === action.payload) {
						console.log('books toggle block')
						b.isSaved = !b.isSaved;
						return b;
					} else {
						return b;
					}
				})
			};
		// case 'POST_MONGO_BOOK':
		//     return {

		//     }
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
