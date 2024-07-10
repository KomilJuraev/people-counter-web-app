import { render, screen } from "@testing-library/react";
import App from "../App";
import user from "@testing-library/user-event";

describe('rendering App.jsx', () => {
    it('header is displayed as expected', () => {
        render(<App />);
        const headerElement = screen.getByRole('heading', {name: /Number of Attendees/i});
        expect(headerElement).toHaveTextContent('Number of Attendees');
    })

    it('Verify error message if user clicks decrement button while the count is already 0', async () => {
        render(<App />);
        const decrement = screen.getByLabelText('decrement');
        await user.click(decrement);
        const countElement = screen.getByRole('heading', { name: /count/i });
        expect(countElement).toHaveTextContent('0');

        const errorElement = screen.getByText(/count cannot be under 0/i);
        expect(errorElement).toBeInTheDocument();
    })

    it('verify save button functionality', async () => {
        render(<App />);
        const increment = screen.getByLabelText('increment');
        await user.click(increment);
        
        const saveBtnElement = screen.getByRole('button', {name: /save/i});
        expect(saveBtnElement).toHaveTextContent('Save');
        await user.click(saveBtnElement);

        const firstPreviousRecord = screen.getByRole('link', {name: /1/i});
        expect(firstPreviousRecord).toHaveTextContent('1');
        
        await user.dblClick(increment);
        await user.click(saveBtnElement);
        const secondPreviousRecord = screen.getByRole('link', {name: /2/i});
        expect(secondPreviousRecord).toHaveTextContent('2');


    })

});