import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
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
import Highlight from 'components/Highlight';

const image10 = require('static/images/preview/10.jpg');

class DocumentationModelSwitch extends Component {
  render() {
    return (
      <Documentation>
        <Helmet>
          <title>模型替換程序操作</title>
        </Helmet>
        <DocumentationLink variant="headline" link="model-switch">
          模型替換程序操作
        </DocumentationLink>
        <Divider />
        <DocumentationLink variant="title" link="user-case">
          使用情境
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          活動現場刷臉報名與報到
        </Typography>
        <ul>
          <li>
            案例1：
            <a
              href="https://www.youtube.com/watch?v=YdUSXfnOnAU"
              target="_blank"
              rel="noopener noreferrer"
            >
              2017未來科技展
            </a>
          </li>
          <li>
            案例2：
            <a
              href="https://www.youtube.com/watch?v=sF6U7h4f9EQ&t=4s"
              target="_blank"
              rel="noopener noreferrer"
            >
              研討會
            </a>
          </li>
        </ul>
        <DocumentationLink variant="title" link="flowchart">
          流程圖
        </DocumentationLink>
        <img src={image10} alt="模型替換程序操作" />
        <DocumentationLink variant="title" link="usage">
          使用說明
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          依模型替換檔案內容(新的人臉模型庫路徑)，進行模型替換，即時比對，回傳最新辨識結果。
        </Typography>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>步驟</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>前置作業</TableCell>
              <TableCell>執行辨識引擎RetrieveFace</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>步驟一</TableCell>
              <TableCell>
                辨識引擎執行中，複製正進行辨識的人臉模型庫(.binary、.faceInfor、.list)
                <br />
                進一步對複製的人臉模型庫進行訓練。
                <br />
                (複製的操作是為了避免同時對人臉模型庫，進行檔案讀寫，造成的檔案讀寫衝突)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>步驟二</TableCell>
              <TableCell>
                人臉模型庫訓練完後，新增Singal_For_Model_Switch.txt至辨識引擎RetrieveFace根目錄。
                <br />
                Singal_For_Model_Switch.txt內容包含(即新人臉模型庫的路徑)
                <br />
                <ul>
                  <li>人臉模型庫中.binary檔案路徑</li>
                  <li>人臉模型庫中.faceInfor檔案路徑</li>
                </ul>
                <a
                  href="https://drive.google.com/file/d/1gNcVZb4yylMkAb8vUFKj4Sajf6yvtz_y/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  範例
                </a>
                <br />
                <Highlight className="markdown">
                  eGroup\eGroup2.Model.binary
                  <br />
                  eGroup\eGroup2.Model.faceInfor
                </Highlight>
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
      </Documentation>
    );
  }
}

export default compose(withnprogress)(DocumentationModelSwitch);
