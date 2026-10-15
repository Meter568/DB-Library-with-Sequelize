module.exports = {
    countries: [
        {
            title: 'USA',
            description: 'United States of America',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'GB',
            description: 'Great Britain',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'UA',
            description: 'Ukraine',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ],
    genres: [
        {
            title: 'Criminal',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Drama',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Historical',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ],
    shelves: [
        {
            title: 'Shelf #1',
            description: 'Criminal, Detective',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Shelf #2',
            description: 'Drama, Romance',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Shelf #3',
            description: 'Historical, Biography',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ],
    customers: [
        {
            full_name: 'Linus Torvalds',
            email: 'l-t@gmail.com',
            password: 'qwerty',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ],
    authors: [
        {
            full_name: "Fredrik Backman",
            email: 'f-b@gmail.com',
            country_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ],
    books: [
        {
            title: 'A Man Called Ove',
            genre_id: 2,
            shelf_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ],
    orders: [
        {
            title: 'Request #1',
            order_date: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]
};
