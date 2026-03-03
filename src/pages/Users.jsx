import Table from "../components/Tables/Table";

const users = [
  { id: 1, name: "Anu", email: "anu@email.com" },
  { id: 2, name: "Rahul", email: "rahul@email.com" },
  { id: 3, name: "Priya", email: "priya@email.com" },
  { id: 4, name: "Arjun", email: "arjun@email.com" },
  { id: 5, name: "Sneha", email: "sneha@email.com" },
  { id: 6, name: "Kiran", email: "kiran@email.com" },
];

const Users = () => {
  return (
    <div className="p-6">
      <Table
        columns={[
          { key: "id", label: "ID" },
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
        ]}
        data={users}
        loading={false}
      />
    </div>
  );
};

export default Users;