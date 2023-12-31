import Container from "../../components/Container";
import ListingCard from "../../components/listings/ListingCard";
import EmptyState from "../../components/EmptyState";
import Categories from "../../components/Navbar/Categories";

import getListings, { IListingsParams } from "../../app/actions/getListings";
import getCurrentUser from "../../app/actions/getCurrentUser";
import ClientOnly from "../../components/ClientOnly";
import { Promise } from "mongoose";

export const dynamic = "force-dynamic";
interface AppointmentProps {
  searchParams: IListingsParams | null;
}

const Appointment = async ({ searchParams }: AppointmentProps) => {
  let listings = Promise;
  if (searchParams != null) {
    listings = await getListings(searchParams);
  }
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row flex-auto">
          <img src="/assets/rates.png" alt="rates of consultations" />
          <img src="/assets/hours.png" alt="operating hours" />
        </div>

        <Container>
          <div
            className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
          >
            {listings.map((listing: any) => (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            ))}
          </div>
        </Container>
      </div>
    </ClientOnly>
  );
};

export default Appointment;
