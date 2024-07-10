import { render, screen } from "@testing-library/react";
import PreviousEntrees from "../PreviousEntrees";

describe('Previous entries component', () => {
    it('Verify Previous entries text is displayed', () => {
        render(<PreviousEntrees array={[]} setCount={() => {}} setClickedIndex={() => {}} />);
        const previosEntiesText = screen.getByText(/previous entries:/i)
        expect(previosEntiesText).toBeInTheDocument();
    });

    it('Correct number of entries are displayed', () => {
        const testNums = [1,2,3]
        render(<PreviousEntrees array={testNums} setCount={() => {}} setClickedIndex={() => {}} />);
        
        testNums.forEach((eachNum, index) => {
            const entryElement = screen.getByText(eachNum.toString());
            expect(entryElement).toBeInTheDocument();
            expect(entryElement).toHaveAttribute('id', `count-${index}`);
        })
    });
})
