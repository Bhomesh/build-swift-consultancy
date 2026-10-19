import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrandSuiteSection } from '../components/BrandSuiteSection';

describe('BrandSuiteSection Component', () => {
  it('renders all 5 logo concepts in the tabs', () => {
    const handleSelect = vi.fn();
    render(<BrandSuiteSection activeLogoId="cyber-triad" onSelectActiveLogo={handleSelect} />);

    expect(screen.getByText(/OFFICIAL BRAND IDENTITY SUITE/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Cyber Triad Monogram/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Quantum Code Prism/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Velocity Chevron/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Infinite Flow Loop/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Architect Monolith/i).length).toBeGreaterThan(0);
  });

  it('allows clicking between different concepts and shows their details', () => {
    const handleSelect = vi.fn();
    render(<BrandSuiteSection activeLogoId="cyber-triad" onSelectActiveLogo={handleSelect} />);

    // Click Concept 2 (Quantum Code Prism)
    const concept2Tab = screen.getByRole('button', { name: /Quantum Code Prism/i });
    fireEvent.click(concept2Tab);

    expect(screen.getAllByText(/Hexagonal Code Bracket Core/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Emerald Matrix/i)).toBeInTheDocument();
  });

  it('triggers onSelectActiveLogo when Apply This Logo is clicked', () => {
    const handleSelect = vi.fn();
    render(<BrandSuiteSection activeLogoId="cyber-triad" onSelectActiveLogo={handleSelect} />);

    // Select Concept 3
    const concept3Tab = screen.getByRole('button', { name: /Velocity Chevron/i });
    fireEvent.click(concept3Tab);

    const applyButton = screen.getByRole('button', { name: /Apply This Logo Live to Site/i });
    fireEvent.click(applyButton);

    expect(handleSelect).toHaveBeenCalledWith('velocity-chevron');
  });

  it('provides download links for SVG and complete brand kit zip', () => {
    const handleSelect = vi.fn();
    render(<BrandSuiteSection activeLogoId="cyber-triad" onSelectActiveLogo={handleSelect} />);

    const zipLink = screen.getByRole('link', { name: /Download All Assets \(ZIP\)/i });
    expect(zipLink).toHaveAttribute('href', '/brand/next-gen-dev-brand-kit.zip');
  });
});
