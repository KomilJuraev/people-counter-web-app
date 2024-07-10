import { render, screen } from "@testing-library/react";
import TotalAttendees from "../TotalAttendees";

describe('Verify TotalAttendees component', () => {
    it('verify total attendees text', () => {
        render(<TotalAttendees array={[]} />)
        const totalAttendeesElement = screen.getByText(/total attendees:/i);
        expect(totalAttendeesElement).toBeInTheDocument();
    }); 

    it('verify total attedees adding numbers correctly', () => {
        const numArray = [1, 2, 3];
        render(<TotalAttendees array={numArray} />);
        const sumElement = screen.getByText(/total attendees: 6/i)
        expect(sumElement).toBeInTheDocument();
    })
})