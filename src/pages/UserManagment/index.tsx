import React from "react";
import UserCard from "../../components/shared/UserCard";
import { userDTO } from "../../dtos/UserDTO";

function index() {
  const users: userDTO[] = [
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
    {
      id: "asd",

      username: "John Doe",
      email: "JohnDoe@gmail.com",
      status: "active",
      dateOfBirth: new Date(),
    },
  ];
  return (
    <div className="px-[40px] py-[40px] flex flex-col gap-[48px] bg-[var(--bg-color)]">
      <input type="text" placeholder="Search users..." className="border-[1px] border-[var(--border-black-opacity)] rounded-sm px-[8px] py-[8px] w-[240px]"/>

      {users?.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[24px] lg:gap-[32px]">
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
