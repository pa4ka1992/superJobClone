import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink as MantineNavLink } from '@mantine/core';

export const NavLink: FC<{ route: string; label: string }> = ({ route, label }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMatchingRoute = location.pathname === route;

  return (
    <MantineNavLink
      c={isMatchingRoute ? 'blues.1' : undefined}
      fw={isMatchingRoute ? '500' : undefined}
      label={label}
      onClick={() => navigate(route)}
    />
  );
};
