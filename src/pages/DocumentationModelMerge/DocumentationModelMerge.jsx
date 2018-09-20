import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Typography,
  Table,
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

const image11 = require('static/images/preview/11.jpg');

class DocumentationModelMerge extends Component {
  render() {
    return (
      <Documentation>
        <Helmet>
          <title>模型合併程序操作</title>
        </Helmet>
        <DocumentationLink variant="headline" link="model-switch">
          模型合併程序操作
        </DocumentationLink>
        <Divider />
        <DocumentationLink variant="title" link="user-case">
          使用情境
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          門市分店/O2O邊界運算(Edge Computing)應用
        </Typography>
        <p>
          例如:
          顧客只需在其中一間分店，建立過人臉模型庫，顧客往後到不同分店時，皆能直接被辨識出來，不需要重新建立該顧客的人臉模型庫。
        </p>

        <DocumentationLink variant="title" link="flowchart">
          流程圖
        </DocumentationLink>
        <img src={image11} alt="模型合併程序操作" />

        <DocumentationLink variant="title" link="usage">
          使用說明
        </DocumentationLink>
        <ul>
          <li>Syntax</li>
          <Highlight className="bash">
            {`ModelMerge <List File> <Trained_BinaryFile> <Trained_FaceInforFile>`}
          </Highlight>
          <li>範例</li>
          <Highlight className="bash">
            {`ModelMerge ModelList.egroup.List eGroup\\eGroup_merged.binary eGroup\\eGroup_merged.faceInfor`}
          </Highlight>
        </ul>

        <DocumentationLink variant="title" link="input">
          模型合併 Input
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>必/選</TableCell>
              <TableCell>參數</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>必</TableCell>
              <TableCell>List File</TableCell>
              <TableCell>
                合併人臉模型庫路徑文檔(編碼必須為Big5)。
                <br />
                文檔內容包含
                <br />
                <ul>
                  <li>.binary</li>
                  <li>.faceInfor</li>
                </ul>
                合併人臉模型庫路徑格式
                <br />
                人臉模型庫.binary路徑 + 空格 + [eGroupSplit] + 空格 +
                人臉模型庫.faceInfor路徑
                <br />
                <a
                  href="https://drive.google.com/file/d/1JzRaZfvAfQoyhHWOfSst3Vec07-tynxl/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  範例
                </a>
                <br />
                <Highlight className="markdown">
                  D:\eGroup\eGroup1.model.binary
                  <br />
                  D:\eGroup\eGroup1.model.faceInfor
                  <br />
                  D:\eGroup\eGroup2.model.binary
                  <br />
                  D:\eGroup\eGroup2.model.faceInfor
                </Highlight>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>必</TableCell>
              <TableCell>{`<Trained_BinaryFile>`}</TableCell>
              <TableCell>
                人臉模型庫中.binary 路徑
                <br />
                範例:
                <Highlight className="bash">
                  {`RetrieveFace ... eGroup\\eGroup.Model.binary <Trained_FaceInforFile>`}
                </Highlight>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>必</TableCell>
              <TableCell>{`<Trained_FaceInforFile>`}</TableCell>
              <TableCell>
                人臉模型庫中.faceInfor 路徑
                <br />
                範例:
                <Highlight className="bash">
                  {`RetrieveFace ... <Trained_BinaryFile> eGroup\\eGroup.Model.faceInfor`}
                </Highlight>
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>

        <DocumentationLink variant="title" link="output">
          模型合併 Output
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>內容</TableCell>
              <TableCell>輸出位置</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>合併後的人臉模型庫</TableCell>
              <TableCell>Trained_BinaryFile定義的資料夾內</TableCell>
              <TableCell>
                人臉模型庫包含以下檔案
                <br />
                <ul>
                  <li>.binary</li>
                  <strong>訓練出的人臉數據模型用來比對的二進位檔</strong>
                  <li>.faceInfor</li>
                  <strong>
                    成功建檔的人臉檔案列表+personFaceId+人臉位置+五官位置(一個人臉一行)
                  </strong>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>模型合併結果文檔</TableCell>
              <TableCell>同合併程式ModelMerge根目錄</TableCell>
              <TableCell>
                輸出檔案
                <a
                  href="https://drive.google.com/file/d/1rw5zpK4LxmjeDNyqpl0Jwx4Kf0JJa-VN/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  ModelList.egroup.merged.log
                </a>
                <br />
                顯示每筆模型合併的結果
                <br />
                <Table padding="none">
                  <TableBody>
                    <TableRow>
                      <TableCell>PASS</TableCell>
                      <TableCell>通過</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>FileNotFound</TableCell>
                      <TableCell>路徑錯誤</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
      </Documentation>
    );
  }
}

export default compose(withnprogress)(DocumentationModelMerge);
