 import UserCard from "../../components/shared/UserCard";
import { userDTO } from "../../dtos/UserDTO";

function index() {
  const users: userDTO[] = [
    {
      id: "user1",
      firstName: "Alice",
      lastName: "Smith",
      email: "alice.smith@example.com",
      status: "active",
      dateOfBirth: new Date("1990-01-01"),
    },
    {
      id: "user2",
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      status: "active",
      dateOfBirth: new Date("1985-05-15"),
    },
    {
      id: "user3",
      firstName: "Charlie",
      lastName: "Williams",
      email: "charlie.williams@example.com",
      status: "locked",
      dateOfBirth: new Date("1992-09-09"),
    },
    {
      id: "user4",
      firstName: "Diana",
      lastName: "Brown",
      email: "diana.brown@example.com",
      status: "active",
      dateOfBirth: new Date("1988-03-23"),
    },
    {
      id: "user5",
      firstName: "Edward",
      lastName: "Jones",
      email: "edward.jones@example.com",
      status: "active",
      dateOfBirth: new Date("1975-12-12"),
    },
    {
      id: "user6",
      firstName: "Fiona",
      lastName: "Garcia",
      email: "fiona.garcia@example.com",
      status: "locked",
      dateOfBirth: new Date("1999-07-07"),
    },
    {
      id: "user7",
      firstName: "George",
      lastName: "Martinez",
      email: "george.martinez@example.com",
      status: "active",
      dateOfBirth: new Date("1982-10-10"),
    },
    {
      id: "user8",
      firstName: "Hannah",
      lastName: "Rodriguez",
      email: "hannah.rodriguez@example.com",
      status: "active",
      dateOfBirth: new Date("1995-04-04"),
    },
    {
      id: "user9",
      firstName: "Ian",
      lastName: "Lee",
      email: "ian.lee@example.com",
      status: "active",
      dateOfBirth: new Date("1993-11-11"),
    },
  ];
  
  return (
    <div className="px-[16px] sm:px-[24px] md:px-[40px] py-[24px] md:py-[40px] flex flex-col gap-[40px] bg-[var(--bg-color)] min-h-screen">

      <input type="text" placeholder="Search users..." className="border-[1px] text-[var(--text-color)] border-[var(--border-input-opacity)] rounded-sm px-[8px] py-[8px] w-[240px]"/>

      {users?.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-[24px] lg:gap-[32px]">
          {users.map((user,index) => (
            <UserCard user={user} key={index}/>
          ))}
        </div>
      ) : (
        <div>
          <p>No users found</p>
        </div>
      )}
    </div>
  );
}

export default index;
