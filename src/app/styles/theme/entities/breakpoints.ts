type BreakpointValueType = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const breakpoints = {
  values: {
    xxs: 0,
    xs: 484,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  } as Record<BreakpointValueType, number>,
};
