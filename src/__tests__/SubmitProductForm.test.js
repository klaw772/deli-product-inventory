import React from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import SubmitProductForm from "../components/SubmitProductForm";

test("renders the submit product form", () => {
  const { getByTestId } = render(<SubmitProductForm />);

  expect(getByTestId("submitProductForm")).toBeInTheDocument();
});

test("submits product to inventory when all fields completed", () => {
  const addProduct = jest.fn();
  const { getByTestId, getByText } = render(
    <SubmitProductForm addProduct={addProduct} />
  );

  fireEvent.change(getByTestId("brandName"), {
    target: { value: "Brand Name" },
  });
  fireEvent.change(getByTestId("productName"), {
    target: { value: "Product Name" },
  });
  fireEvent.change(getByTestId("dollarsPerPound"), {
    target: { value: "6.99" },
  });
  fireEvent.change(getByTestId("image"), {
    target: { value: "www.image.com" },
  });

  fireEvent.click(getByTestId("submitButton"));
  expect(
    getByText(
      "Submitted! Check out the list of products to see your addition to the inventory."
    )
  ).toBeInTheDocument();
});

test("does not submit product to inventory if there are empty fields present", () => {
  const addProduct = jest.fn();
  const { getByTestId, getByText, queryByText } = render(
    <SubmitProductForm addProduct={addProduct} />
  );

  fireEvent.change(getByTestId("brandName"), {
    target: { value: "Brand Name" },
  });

  fireEvent.click(getByTestId("submitButton"));
  expect(
    queryByText(
      "Submitted! Check out the list of products to see your addition to the inventory."
    )
  ).not.toBeInTheDocument();

  expect(
    getByText("Please fill in all of the options before submitting.")
  ).toBeInTheDocument();
});
