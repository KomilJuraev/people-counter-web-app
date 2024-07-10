import { render, screen } from "@testing-library/react";
import CountDisplay from "../CountDisplay"; 
import user from "@testing-library/user-event";

describe('decrement and increment', () => {
    it('decrement and increment buttons are displayed', () => {
        const setCount = jest.fn();
        const setErrorMsg = jest.fn();

        render(<CountDisplay count={0} setCount={setCount} setErrorMsg={setErrorMsg}/>);

        const decrement = screen.getByLabelText('decrement');
        const increment = screen.getByLabelText('increment');
        
        expect(decrement).toBeInTheDocument();
        expect(increment).toBeInTheDocument();
    })

    it('increment button is working as expected', async () => {
        const setCount = jest.fn();
        const setErrorMsg = jest.fn();

        render(<CountDisplay count={0} setCount={setCount} setErrorMsg={setErrorMsg}/>);

        const increment = screen.getByLabelText('increment');
        await user.click(increment);

        const countElement = screen.getByRole('heading', { name: /count/i });
        expect(setErrorMsg).not.toHaveBeenCalled();
        expect(setCount).toHaveBeenCalledWith(1);
        expect(countElement).toHaveTextContent('1');

        await user.click(increment);
        expect(setErrorMsg).not.toHaveBeenCalled();
        expect(setCount).toHaveBeenCalledWith(2);
        expect(countElement).toHaveTextContent('2');
    })

    it('decrement button is working as expected', async () => {
        const setCount = jest.fn();
        const setErrorMsg = jest.fn();

        render(<CountDisplay count={0} setCount={setCount} setErrorMsg={setErrorMsg}/>);
        const countElement = screen.getByRole('heading', { name: /count/i });

        const increment = screen.getByLabelText('increment');
        await user.dblClick(increment);
        expect(countElement).toHaveTextContent('2');
        expect(setErrorMsg).not.toHaveBeenCalled();

        const decrement = screen.getByLabelText('decrement');
        await user.click(decrement);
        expect(setCount).toHaveBeenCalledWith(1);
        expect(countElement).toHaveTextContent('1');
        expect(setErrorMsg).not.toHaveBeenCalled();

        await user.click(decrement);
        expect(setCount).toHaveBeenCalledWith(0);
        expect(countElement).toHaveTextContent('0');
        expect(setErrorMsg).not.toHaveBeenCalled();

        await user.click(decrement);
        expect(setCount).toHaveBeenCalledWith(0);
        expect(countElement).toHaveTextContent('0');
        expect(setErrorMsg).toHaveBeenCalled();
    })
})