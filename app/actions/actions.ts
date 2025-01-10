
export const fetchProperties = async ()=>{
    try {
        const res = await fetch('https://test.catalystegy.com/public/api/properties');
        const data = await res.json();
        return data;
        console.log(data);
      } catch (error) {
        
        console.log('hello', error)
      }
      return null;
}