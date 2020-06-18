export default (state, action) => {
	switch (action.type) {
		case 'GET_NYT_BOOKS':
			return {
				...state,
				genres : action.payload.reduce((s, e) => {
					if (!this.state.genres.includes(e.list_name)) {
						s.push(e.list_name);
					}
					return s;
				}, []),
				books  : action.payload
					.reduce((s, e) => {
						let funcBooks = e.books.map((b) => {
							// if (this.state.savedBooks.find((savedBook) => savedBook.book_uri === b.book_uri)) {
							// 	b.isSaved = true;
							// }

							b.isSaved = false;
							b.list_name = e.list_name;
							return b;
						});
						s.push(funcBooks);
						return s;
					}, [])
					.flat()
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