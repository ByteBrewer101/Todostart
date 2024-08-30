export function DisplayCard() {
    return (
        <div className="w-full  p-4 h-full bg-violet-100 shadow-lg rounded-lg transition-transform duration-200 ">
            <h1 className="text-xl font-semibold mb-2">Title</h1>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ad?</p>
            <button className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition duration-200">Completed</button>
        </div>
    );
}