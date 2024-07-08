import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: 'calc(100% - 24px)',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const topContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#F1F2FB',
  padding: '2.5rem 1rem 1rem',
  gap: '1rem',
  borderRadius: '0px 0px 32px 32px',
});

const collapseArrow = recipe({
  base: {
    transition: 'all .25s ease',
    marginLeft: 'auto',
  },
  variants: {
    open: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
});

const cell = style({
  display: 'flex',
  backgroundColor: '#fff',
  padding: '12px',
  borderRadius: '24px',
  width: 'calc(100% - 24px)',
  alignItems: 'center',
  gap: '1rem',
});
const cellContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
});
const cellContentItem = style({
  textAlign: 'left',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});
const btn = style({
  borderRadius: '24px',
  padding: '1rem',
});
const btnArrow = style({
  width: '48px',
  height: '48px',
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '1rem',
});

export const appSt = {
  bottomBtn,
  container,
  topContainer,
  collapseArrow,
  cell,
  cellContent,
  cellContentItem,
  btn,
  btnContainer,
  btnArrow,
};
