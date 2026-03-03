export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-4 gap-6">
        <Card title="Total Users" value="1,240" />
        <Card title="Revenue" value="$12,400" />
        <Card title="Orders" value="320" />
        <Card title="Growth" value="+18%" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
    </div>
  );
}