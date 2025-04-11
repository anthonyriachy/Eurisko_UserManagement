import { useState } from "react";
import { SearchInput } from "../../atoms/SearchInput";
import { User } from "../../../services/UserService";
import { UserGrid } from "../../organisms/UserGrid";
 function Dashboard() {
  const users: User[] = [
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

  const [search, setSearch] = useState("");

  return (
    <div className="px-[16px] sm:px-[24px] md:px-[40px] py-[24px] md:py-[40px] flex flex-col gap-[40px] bg-[var(--bg-color)] min-h-screen">
      <SearchInput placeholder="Search users..." onChange={(value) => setSearch(value)} value={search} />
      <UserGrid users={users} />
    </div>
  );
}

export {Dashboard};
