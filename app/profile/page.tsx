
import PropertyList from '../_components/PropertyList';

const ProfilePage = ()=> {

   
 
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">My Profile</h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">My Properties</h2>
        <PropertyList />
      </section>
    </div>
  );
}

export default ProfilePage;
