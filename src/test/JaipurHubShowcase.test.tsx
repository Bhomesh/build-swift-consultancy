import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { JaipurHubShowcase } from '../components/JaipurHubShowcase';

describe('JaipurHubShowcase Component', () => {
  it('displays the registered company name and Jaipur details', () => {
    const handleVisit = vi.fn();
    render(<JaipurHubShowcase onScheduleVisit={handleVisit} />);

    expect(screen.getByText(/Jaipur, Rajasthan: The Silicon Desert/i)).toBeInTheDocument();
    expect(screen.getByText(/BuildSwift Technologies Private Limited/i)).toBeInTheDocument();
    expect(screen.getByText(/U72900RJ2024PTC089124/i)).toBeInTheDocument();
    expect(screen.getByText(/08AABCB1234F1Z8/i)).toBeInTheDocument();
    expect(screen.getByText(/World Trade Park/i)).toBeInTheDocument();
  });

  it('triggers onScheduleVisit callback when clicking schedule button', () => {
    const handleVisit = vi.fn();
    render(<JaipurHubShowcase onScheduleVisit={handleVisit} />);

    const visitBtn = screen.getByRole('button', { name: /Schedule an In-Person Visit/i });
    fireEvent.click(visitBtn);

    expect(handleVisit).toHaveBeenCalledTimes(1);
  });
});
