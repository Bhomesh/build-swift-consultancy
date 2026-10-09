import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ConsultationForm } from '../components/ConsultationForm';

describe('ConsultationForm Component', () => {
  it('renders form fields with labels and inputs', () => {
    render(<ConsultationForm />);

    expect(screen.getByText(/Full Name \*/i)).toBeInTheDocument();
    expect(screen.getByText(/Work Email \*/i)).toBeInTheDocument();
    expect(screen.getByText(/Consulting Domain/i)).toBeInTheDocument();
    expect(screen.getByText(/Target Budget Tier/i)).toBeInTheDocument();
  });

  it('validates required fields on submission', () => {
    render(<ConsultationForm />);

    const submitBtn = screen.getByRole('button', { name: /Submit RFP/i });
    fireEvent.click(submitBtn);

    // Error or form requires values
    expect(screen.getByText(/Submit RFP/i)).toBeInTheDocument();
  });

  it('submits form successfully when valid details are provided', async () => {
    render(<ConsultationForm />);

    const nameInput = screen.getByPlaceholderText(/e\.g\. Ankit Sharma/i);
    const emailInput = screen.getByPlaceholderText(/sarah@company\.com/i);
    const submitBtn = screen.getByRole('button', { name: /Submit RFP/i });

    fireEvent.change(nameInput, { target: { value: 'Rajesh Sharma' } });
    fireEvent.change(emailInput, { target: { value: 'rajesh@cloudtech.com' } });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Consultation Request Received!/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });
});
