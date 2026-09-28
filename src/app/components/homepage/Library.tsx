import LibraryCard from "../library-card/page";

const libraryData = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
  return res.json();
};

const Library = async () => {
    const allData = await libraryData();

    return (
        <section>
            <div className="ml-10">
            <h2 className="font-bold text-white text-3xl mt-10">
            THE LIBRARY 
            </h2>
            <p className="text-gray-200 ">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
            

            {allData.map((item, index) => (
                <LibraryCard 
                    key={item.id || index} 
                    item={item} 
                    
                />
            ))}
        </div>
        </section>
      
        
    );
};

export default Library;