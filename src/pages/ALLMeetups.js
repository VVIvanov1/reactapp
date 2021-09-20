import MeetupList from "../components/meetups/MeetupList";

const DUMMYDATA = [
  { month: "January", description: "so good", id: "m1" },
  { month: "February", description: "not so bad", id: "m2" },
  { month: "March", description: "the worst thing", id: "m3" },
];


function AllMeetupsPage() {
  return (
    <section>
      <h1>All MeetUps Page</h1>
      <MeetupList meetups={DUMMYDATA}/>
    </section>
  );
}

export default AllMeetupsPage;
