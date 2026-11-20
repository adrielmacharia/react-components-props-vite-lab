import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});

test("passes blog profile and post data through the component tree", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: "The Sunday Edit" })).toBeInTheDocument();
  expect(
    screen.getByText(
      "A journal about noticing more, living well, and finding meaning in the everyday.",
    ),
  ).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "blog logo" })).toHaveAttribute(
    "src",
    expect.stringContaining("data:image/png"),
  );
  expect(screen.getByRole("heading", { name: "The art of paying attention" })).toBeInTheDocument();
  expect(screen.getByText("November 18, 2025")).toBeInTheDocument();
  expect(
    screen.getByText("On the small, ordinary moments that turn out to be the whole point."),
  ).toBeInTheDocument();
});

test("filters stories by category and search query", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Creative practice" }));
  expect(screen.getByText("A home for your unfinished thoughts")).toBeInTheDocument();
  expect(screen.queryByText("The art of paying attention")).not.toBeInTheDocument();

  fireEvent.change(screen.getByRole("searchbox", { name: "Search stories" }), {
    target: { value: "notebook" },
  });
  expect(screen.getByText("A home for your unfinished thoughts")).toBeInTheDocument();
  expect(screen.queryByText("Make something just because")).not.toBeInTheDocument();
});

test("expands a story and confirms newsletter signup", () => {
  render(<App />);

  fireEvent.click(screen.getAllByRole("button", { name: /Read story/ })[0]);
  expect(screen.getByText(/A good day rarely announces itself/)).toBeInTheDocument();

  fireEvent.change(screen.getByRole("textbox", { name: "Your email address" }), {
    target: { value: "reader@example.com" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Subscribe to the newsletter" }));
  expect(screen.getByRole("status")).toHaveTextContent("You're on the list");
});
