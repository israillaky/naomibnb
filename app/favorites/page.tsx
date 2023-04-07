import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListings from "../actions/getFavoritesListings";

import FavoritesClient from "./FavoritesClient";

const FavoritePage = async () => {
  const listings = await getFavoritesListings();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  if (listings.length == 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favorite Found"
          subtitle="Looks like you havent reserve any trips"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritePage;
