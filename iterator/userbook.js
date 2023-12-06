const book =[
    {title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', pages: 197},
    {title: 'The Prophet', author: 'Kahlil Gibran', genre: 'Philosophy', pages: 127},
    {title: 'The Little Prince', author: 'Antoine de Saint-Exupery', genre: 'Adventure', pages: 96},
    {title: 'The Monk Who Sold His Ferrari', author: 'Robin Sharma', genre: 'Philosophy', pages: 198},
    {title: 'The Power of Now', author: 'Eckhart Tolle', genre: 'Philosophy', pages: 236}

];
const book1=book.filter((item)=>{
    return item.genre==="Adventure"
})
console.log(book1)