import { ThemeComponent } from '../types';

export const NavLink: ThemeComponent = {
  defaultProps: (theme) => ({
    fw: theme.other.fontWeight.regular,
    noWrap: true,
    w: 'auto'
  }),

  styles: (theme) => ({
    root: {
      borderRadius: theme.radius.md,
      transition: 'all 0.1s',
      '&:hover': {
        backgroundColor: theme.colors.whites[2]
      },

      '&:active': {
        backgroundColor: theme.colors.whites[4]
      }
    }
  })
};
