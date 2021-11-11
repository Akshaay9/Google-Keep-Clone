import bcrypt from "bcryptjs";
export const UsersList = [
  {
    name: "Akshay",
    email: "akshay@gmail.com",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG177oWFbN12HyxznR6dOQcHiKd0asrrLiXA&usqp=CAU",
    password: bcrypt.hashSync("Akshay98#", 10),
  },
  {
    name: "Kai",
    email: "admin@gmail.com",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Kai_at_a_Launching_Press_Conference_on_October_2%2C_2019_3.jpg",
    password: bcrypt.hashSync("Test98#", 10),
    isAdmin: true,
  },
  {
    name: "taeh yung",
    email: "test@gmail.com",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7dR8rRv-1OW6p-fnRD8O96N_jmib2e1khw&usqp=CAU",
    password: bcrypt.hashSync("Test98#", 10),
  },
];