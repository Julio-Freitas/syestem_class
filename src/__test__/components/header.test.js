// @ts-nocheck
import React from 'react';

import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Router } from 'react-router-dom';
import history from '../../services/history';
import { Header } from '../../components/header';

function renderTesteWithRouter(component) {
    render(<Router history={history}>{component}</Router>);
}

describe('should render Header', () => {
    afterAll(() => cleanup());

    it('click in link to go Home', () => {
        renderTesteWithRouter(<Header />);
        const linkPara = screen.getByTestId(/linkHome/i);
        userEvent.click(linkPara);
        expect(history.location.pathname).toBe('/');
    });

    it('click in link to go Alunos', () => {
        renderTesteWithRouter(<Header />);
        const linkPara = screen.getByTestId(/linkAlunos/i);
        userEvent.click(linkPara);
        expect(history.location.pathname).toBe('/alunos');
    });

    it('clicked in option logout', () => {
        const mockOnClick = jest.fn();
        renderTesteWithRouter(<Header />);

        const linkPara = screen.getByTestId(/linkLogout/i);
        userEvent.click(linkPara);
        waitFor(() => mockOnClick());
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
