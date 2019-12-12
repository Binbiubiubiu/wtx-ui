import React, { Component, MouseEvent, CSSProperties } from 'react';
import cls from 'classnames';
import { Table, AutoSizer, InfiniteLoader, TableRowRenderer } from 'react-virtualized';
import Loading from '../loading';

import { prefixlib } from '../_util/constants';

const defaultProps = {
  prefixCls: `${prefixlib}table`,
};

export type InfiniteTableProps = {
  /**
   *  高度
   *
   *  @default 300
   */
  height: number;
  /**
   *  行高
   *
   *  @default 30
   */
  rowHeight: number;
  /**
   *  表格标题栏高度
   *
   *  @default 30
   */
  headerHeight: number;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
};

export type InfiniteTableState = {
  /** 缓存获取到的变量 */
  list: any[];
  count: number;
};

export class InfiniteTable extends Component<InfiniteTableProps, InfiniteTableState> {
  static defaultProps = defaultProps;

  constructor(props: InfiniteTableProps) {
    super(props);
    this.state = {
      count: 11,
      list: new Array(10).fill({}).map(item => ({
        time: '11-04\n11:13:53',
        name: '郭雅',
        sex: '女',
        phone: '18635425423',
        house: '桂苑小区',
      })),
    };
    this._isRowLoaded = this._isRowLoaded.bind(this);
    this._loadMoreRows = this._loadMoreRows.bind(this);
  }

  render() {
    const { list, count } = this.state;
    const { prefixCls, height, headerHeight, rowHeight, className, children } = this.props;

    return (
      <AutoSizer disableHeight>
        {({ width }) => (
          <InfiniteLoader
            isRowLoaded={this._isRowLoaded}
            loadMoreRows={this._loadMoreRows}
            rowCount={count}
          >
            {({ onRowsRendered, registerChild }) => (
              <Table
                width={width}
                height={height}
                headerHeight={headerHeight}
                rowHeight={rowHeight}
                rowCount={count}
                rowGetter={({ index }) => list[index] || {}}
                onRowsRendered={onRowsRendered}
                rowRenderer={this._rowRenderer}
                refs={registerChild}
                className={cls(prefixCls, className)}
                headerClassName={`${prefixCls}__header`}
              >
                {children}
              </Table>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    );
  }

  _isRowLoaded({ index }: any) {
    const { list } = this.state;
    return !!list[index];
  }

  _loadMoreRows({ startIndex, stopIndex }: any) {
    console.log(startIndex, stopIndex);
    setTimeout(() => {
      this.setState(
        (preState: any) => ({
          count: preState.count + 10,
          list: preState.list.concat(
            new Array(10).fill({
              time: '11-04\n11:13:53',
              name: '郭雅',
              sex: '女',
              phone: '18635425423',
              house: '桂苑小区',
            }),
          ),
        }),
        () => {
          fetchPromiseResolve();
        },
      );
    }, 20000);
    let fetchPromiseResolve: { (): void; (value?: unknown): void };

    return new Promise(resolve => {
      fetchPromiseResolve = resolve;
    });

    // return fetch(
    //   `path/to/api?startIndex=${startIndex}&stopIndex=${stopIndex}`
    // ).then(response => {
    //   // Store response data in list...
    // });
  }

  // 渲染loading
  _renderLoading() {
    const { prefixCls } = this.props;
    return (
      <div className={`${prefixCls}__loading`}>
        <Loading className="loading-icon" /> 加载中...
      </div>
    );
  }

  // 渲染行
  _rowRenderer: TableRowRenderer = ({
    className,
    columns,
    index,
    key,
    onRowClick,
    onRowDoubleClick,
    onRowMouseOut,
    onRowMouseOver,
    onRowRightClick,
    rowData,
    style,
  }) => {
    const a11yProps: any = { 'aria-rowindex': index + 1 };

    if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
      a11yProps['aria-label'] = 'row';
      a11yProps.tabIndex = 0;

      if (onRowClick) {
        a11yProps.onClick = (event: MouseEvent) => onRowClick({ event, index, rowData });
      }
      if (onRowDoubleClick) {
        a11yProps.onDoubleClick = (event: MouseEvent) =>
          onRowDoubleClick({ event, index, rowData });
      }
      if (onRowMouseOut) {
        a11yProps.onMouseOut = (event: MouseEvent) => onRowMouseOut({ event, index, rowData });
      }
      if (onRowMouseOver) {
        a11yProps.onMouseOver = (event: MouseEvent) => onRowMouseOver({ event, index, rowData });
      }
      if (onRowRightClick) {
        a11yProps.onContextMenu = (event: MouseEvent) => onRowRightClick({ event, index, rowData });
      }
    }

    const row = this.state.list[index];

    return (
      <div {...a11yProps} className={className} key={key} role="row" style={style}>
        {!row ? this._renderLoading() : columns}
      </div>
    );
  };
}

export default InfiniteTable;
