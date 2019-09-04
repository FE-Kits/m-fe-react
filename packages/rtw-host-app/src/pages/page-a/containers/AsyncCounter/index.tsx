import React, { Component } from 'react';
import { connect } from 'react-redux';

import { commonActions } from '@/store/ducks/common';
import { IState } from '@/store/ducks';
import { Button } from 'antd';

export class AsyncCounterComp extends Component<any> {
  render() {
    const { count, incr, dec, error } = this.props;
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>基于 Promise 的异步计数器：</span>
          <span>{count}</span>
        </div>

        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 24 }}
        >
          <Button
            style={{ marginRight: 16 }}
            onClick={() => {
              incr();
            }}
          >
            + 1
          </Button>
          <Button
            onClick={() => {
              dec();
            }}
          >
            - 1
          </Button>
          <Button
            type="danger"
            style={{ marginRight: 16 }}
            onClick={() => {
              error();
            }}
          >
            Throw Error
          </Button>
        </div>
      </div>
    );
  }
}

export const AsyncCounter = connect(
  (state: IState) => ({
    count: state.common.count
  }),
  { ...commonActions }
)(AsyncCounterComp);
