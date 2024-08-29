export function CreateCard (){
    return<div className="w-full p-4  bg-gradient-to-b from-emerald-100 to-emerald-300 text-lg">
        
       
        
       <div className="my-4">
        <input type="text" placeholder="Title" className="w-full p-2 bg-white rounded-lg"/>
        </div>
        <div className="my-4">
        <input type="text" placeholder="Description" className="w-full h-40 p-2 bg-white rounded-lg"/>
        </div>
        <button className="p-2 bg-emerald-200 border-2 border-emerald-500 rounded-lg hover:bg-emerald-600 hover:text-white transition ease-in-out duration-200 " >Submit</button>
  
        
    </div>
}