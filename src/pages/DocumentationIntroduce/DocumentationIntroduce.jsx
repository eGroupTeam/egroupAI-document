import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import {
  Typography,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider
} from '@material-ui/core';
import { compose } from 'redux';
import { withnprogress } from 'utils';

import Documentation from 'components/Documentation';
import DocumentationLink from 'components/DocumentationLink';
import DocumentationTable from 'components/DocumentationTable';

const image = require('static/images/preview/1.jpg');

class DocumentationIntroduce extends Component {
  render() {
    return (
      <Documentation>
        <Helmet>
          <title>簡介</title>
        </Helmet>
        <DocumentationLink variant="headline" link="introduce">
          簡介
        </DocumentationLink>
        <Divider />
        <DocumentationLink variant="title" link="structure">
          系統架構
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          主要核心
        </Typography>
        <ul>
          <li>
            <HashLink to="/documentation/train">訓練</HashLink>
            :建立人臉模型。
          </li>
          <li>
            <HashLink to="/documentation/recognize">辨識</HashLink>
            :影像輸入，進行辨識，取得辨識結果。
          </li>
          <li>
            <HashLink to="/documentation/model-switch">模型替換</HashLink>
            :將人臉模型於辨識過程中即時替換。
          </li>
          <li>
            <HashLink to="/documentation/model-merge">模型合併</HashLink>
            :將人臉模型進行合併。
          </li>
        </ul>
        <DocumentationLink variant="title" link="integration">
          應用程式整合
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          流程說明
        </Typography>
        <ol>
          <li>
            應用程式控制
            <HashLink to="/documentation/train">訓練</HashLink>
            引擎，進行訓練
          </li>
          <li>訓練引擎產生人臉模型</li>
          <li>
            應用程式控制
            <HashLink to="/documentation/recognize">辨識</HashLink>
            引擎，辨識引擎讀取人臉模型，進行辨識
          </li>
          <li>
            辨識引擎產
            <HashLink to="/documentation/recognize#result">
              辨識結果JSON
            </HashLink>
          </li>
          <li>應用程式讀取辨識結果，進行應用</li>
        </ol>
        <Typography variant="subheading" gutterBottom>
          流程圖
        </Typography>
        <img src={image} alt="應用程式整合" />
        <DocumentationLink variant="title" link="system">
          最低系統需求
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>作業系統(OS)</TableCell>
              <TableCell>Windows</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>中央處理器(CPU)</TableCell>
              <TableCell>4th Generation Intel® CoreTM i3 or faster</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>記憶體(RAM)</TableCell>
              <TableCell>4GB</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationLink variant="title" link="install">
          軟體安裝
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>轉發套件</TableCell>
              <TableCell>
                安裝{' '}
                <a
                  href="https://www.microsoft.com/zh-TW/download/details.aspx?id=48145"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visual Studio 2015 Visual C++ 可轉散發套件
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationLink variant="title" link="input">
          輸入影像來源
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Web Camera</TableCell>
              <TableCell>
                規格:720p HD、1080p Full HD、4K Ultra HD (推薦型號 C930
                LOGITECH)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>IP Camera</TableCell>
              <TableCell>
                支援協定:RTSP、RTMP 影像編碼格式:MJPEG(Motion JPEG)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Video</TableCell>
              <TableCell>
                支援格式:MP4、MKV、MOV、AVI、FLV 影像編碼格式:H264/H265
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>支援格式:JPG、PNG</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>其他</TableCell>
              <TableCell>HTTP 協定裝置</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
      </Documentation>
    );
  }
}

export default compose(withnprogress)(DocumentationIntroduce);
