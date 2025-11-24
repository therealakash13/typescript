const user = {
  name: "Akash",
  email: "akash@gmail.com",
  isAdmin: true,
};

function createCourse({ name, isPaid }: { name: string; isPaid: boolean }) {}

createCourse({ name: "akash", isPaid: true });

type User = {
    name: string;
    email:string;
    isAdmin: boolean;
    adminPass?: string;
}

const newUser:User={
    name:"Akash",
    email:"a@gmail.com",
    isAdmin:false,
}