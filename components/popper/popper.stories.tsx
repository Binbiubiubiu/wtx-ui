import React, { useState } from 'react';
import { Manager, Reference, Popper } from 'react-popper';
import ReactDOM from 'react-dom';
import Button from '../button';
// import Dialog from "../dialog";

export default {
  title: '公共组件|气泡',
};

export const 默认 = () => {
  const [show, setShow] = useState(false);

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <span ref={ref}>
            <Button actived={show} down onClick={() => setShow(!show)}>
              详情
            </Button>
          </span>
        )}
      </Reference>
      {show
        ? ReactDOM.createPortal(
            <Popper>
              {({ placement, ref, style }) => (
                <div ref={ref} style={style} data-placement={placement}>
                  Popper
                </div>
              )}
            </Popper>,
            document.body,
          )
        : null}
    </Manager>
  );
};
