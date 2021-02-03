import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../components/Search";

describe('Search Component', () => {
  test('call onchange callback', () => {
    const onChange = jest.fn();

    screen.debug()

    render(
      <Search value="" onChange={onChange} />
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' }
    });

    //userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    screen.debug()

    expect(onChange).toHaveBeenCalledTimes(1);
  })
})