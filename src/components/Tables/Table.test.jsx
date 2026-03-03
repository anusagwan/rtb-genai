import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./Table";

const mockData = [
  { id: 1, name: "Anu", email: "anu@email.com" },
  { id: 2, name: "Rahul", email: "rahul@email.com" },
  { id: 3, name: "Priya", email: "priya@email.com" },
];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
];

describe("Table Component", () => {
  test("renders table headers", () => {
    render(<Table columns={columns} data={mockData} loading={false} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  test("renders rows correctly", () => {
    render(<Table columns={columns} data={mockData} loading={false} />);
    expect(screen.getByText("Anu")).toBeInTheDocument();
  });

  test("filters results based on search", () => {
    render(<Table columns={columns} data={mockData} loading={false} />);

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Rahul" } });

    expect(screen.getByText("Rahul")).toBeInTheDocument();
    expect(screen.queryByText("Anu")).not.toBeInTheDocument();
  });

  test("pagination works correctly", () => {
    const largeData = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      name: `User${i}`,
      email: `user${i}@mail.com`,
    }));

    render(<Table columns={columns} data={largeData} loading={false} />);

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    expect(screen.getByText(/Page 2/)).toBeInTheDocument();
  });

  test("shows loading state", () => {
    render(<Table columns={columns} data={[]} loading={true} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("shows empty state", () => {
    render(<Table columns={columns} data={[]} loading={false} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });
});