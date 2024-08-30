export function CreateCard (){
    return<div className="w-full p-4  bg-gradient-to-b from-violet-100 to-violet-300 text-lg">
        
       
        
       <div className="my-4">
        <input type="text" placeholder="Title" className="w-full p-2 bg-white rounded-lg"/>
        </div>
        <div className="my-4">
        <input type="text" placeholder="Description" className="w-full h-40 p-2 bg-white rounded-lg"/>
        </div>
        <button className="p-2 bg-violet-200 border-2 border-violet-500 rounded-lg hover:bg-violet-600 hover:text-white transition ease-in-out duration-200 " >Submit</button>
  
        
    </div>
}