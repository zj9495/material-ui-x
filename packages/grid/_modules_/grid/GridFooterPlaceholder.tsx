import * as React from 'react';
import { useGridApiContext } from './hooks/root/useGridApiContext';
import { GridRootPropsContext } from './context/GridRootPropsContext';

export function GridFooterPlaceholder() {
  const apiRef = useGridApiContext();
  const props = React.useContext(GridRootPropsContext)!;
  const footerRef = React.useRef<HTMLDivElement>(null);
  apiRef.current.footerRef = footerRef;

  if (props.hideFooter) {
    return null;
  }

  return (
    <div ref={footerRef}>
      <apiRef.current.components.Footer {...props.componentsProps?.footer} />
    </div>
  );
}
