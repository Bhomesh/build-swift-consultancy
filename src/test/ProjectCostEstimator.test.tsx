import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCostEstimator } from '../components/ProjectCostEstimator';

describe('ProjectCostEstimator Component', () => {
  it('renders correctly with default USD currency', () => {
    const handleQuote = vi.fn();
    render(<ProjectCostEstimator onQuoteRequested={handleQuote} />);

    expect(screen.getByText(/Transparent Project Estimator/i)).toBeInTheDocument();
    expect(screen.getByText(/Estimated Investment Range:/i)).toBeInTheDocument();
    expect(screen.getByText(/\$16,200/i)).toBeInTheDocument();
  });

  it('switches currency between USD and INR correctly', () => {
    const handleQuote = vi.fn();
    render(<ProjectCostEstimator onQuoteRequested={handleQuote} />);

    const inrButton = screen.getByRole('button', { name: /INR \(₹\) India/i });
    fireEvent.click(inrButton);

    expect(screen.getByText(/₹/i)).toBeInTheDocument();
    expect(screen.getByText(/Lakhs/i)).toBeInTheDocument();
  });

  it('triggers onQuoteRequested callback when locking in estimate', () => {
    const handleQuote = vi.fn();
    render(<ProjectCostEstimator onQuoteRequested={handleQuote} />);

    const ctaButton = screen.getByRole('button', { name: /Lock In Estimate & Request RFP/i });
    fireEvent.click(ctaButton);

    expect(handleQuote).toHaveBeenCalledTimes(1);
    expect(handleQuote.mock.calls[0][0]).toContain('Project:');
  });
});
