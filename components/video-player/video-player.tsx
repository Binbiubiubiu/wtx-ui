import React, { Component, CSSProperties } from 'react';
import cls from 'classnames';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { shallowMerge } from '../_util';
import defaultVideoPlayerConfig from './utils/default-config';
import { analyzeTypeOfVideo, isVaildURL } from './utils';

import { prefixlib } from '../_util/constants';

const defaultProps = {
  prefixCls: `${prefixlib}video-player`,
  width: 400,
  height: 240,
};

export interface VideoPlayerProps {
  /**
   * 视频播放路径
   */
  src: string;
  /** 图标宽度
   *
   * @default 400
   */
  width?: number | string;
  /** 图标高度
   *
   * @default 240
   */
  height?: number | string;
  /**
   * 视频覆盖默认配置一些设置
   */
  config?: object;
  /** 自定义class */
  className?: string;
  /** 样式前缀 */
  prefixCls?: string;
  /** 自定义style */
  style?: CSSProperties;
}

type VideoPlayerState = {
  isURLVailded: boolean;
  error: boolean;
};

class VideoPlayer extends Component<VideoPlayerProps, VideoPlayerState> {
  player: any;

  videoNode: React.RefObject<HTMLVideoElement>;

  static defaultProps = defaultProps;

  constructor(props: Readonly<VideoPlayerProps>) {
    super(props);
    this.videoNode = React.createRef();
    this.state = {
      isURLVailded: true,
      error: false,
    };
  }

  componentDidMount() {
    const { src, config } = this.props;

    // 验证url 是否正确
    if (!isVaildURL(src)) {
      this.setState({
        error: true,
        isURLVailded: false,
      });
      return;
    }

    const playerConfig = shallowMerge(defaultVideoPlayerConfig, config, {
      sources: [
        {
          src,
          type: analyzeTypeOfVideo(src),
        },
      ],
    });
    // console.log(playerConfig);
    // instantiate Video.js
    this.player = videojs(this.videoNode.current, playerConfig);
    this.player.on('error', this.addVideoPlayerErrorListener);
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.off('error', this.addVideoPlayerErrorListener);
      this.player.dispose();
      this.player = null;
    }
  }

  /** videojs  视频流获取失败 错误处理 */
  addVideoPlayerErrorListener = () => {
    this.setState(() => ({ error: true }));
  };

  renderError() {
    const { isURLVailded } = this.state;
    const { prefixCls } = this.props;

    return <div className={`${prefixCls}__error`}>{isURLVailded ? '视频播放异常' : '未安装'}</div>;
  }

  render() {
    const { prefixCls, width, height, style, className } = this.props;
    const { error } = this.state;

    return (
      <div
        className={cls(`${prefixCls}__wrapper`, className)}
        style={{
          width,
          height,
          ...style,
        }}
      >
        <video ref={this.videoNode} className={cls('video-js', prefixCls)} />
        {error && this.renderError()}
      </div>
    );
  }
}

export default VideoPlayer;
