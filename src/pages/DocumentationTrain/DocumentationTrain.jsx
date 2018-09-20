import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import {
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

const image7 = require('static/images/preview/7.jpg');

class DocumentationTrain extends Component {
  render() {
    return (
      <Documentation>
        <Helmet>
          <title>訓練程序操作</title>
        </Helmet>
        <DocumentationLink variant="headline" link="train">
          訓練程序操作
        </DocumentationLink>
        <Divider />
        <DocumentationLink variant="title" link="flowchart">
          流程圖
        </DocumentationLink>
        <img src={image7} alt="訓練程序操作" />

        <DocumentationLink variant="title" link="usage">
          使用說明
        </DocumentationLink>
        <ul>
          <li>Syntax</li>
          <Highlight className="bash">
            {`TrainFace [--append] [--verbose] <Face_Path_List> <OutputDBFile>`}
          </Highlight>
          <li>範例一：初始化人臉模型庫</li>
          <Highlight className="bash">
            {`TrainFace list.txt eGroup\\eGroup.Model`}
          </Highlight>
          <li>範例二：疊加人臉資料於既有人臉模型庫</li>
          <Highlight className="bash">
            {`TrainFace --append list2.txt eGroup\\eGroup.Model`}
          </Highlight>
        </ul>

        <DocumentationLink variant="title" link="input">
          訓練 Input
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
              <TableCell>必/選</TableCell>
              <TableCell>--append</TableCell>
              <TableCell>
                疊加人臉資料於既有人臉模型庫。
                <br />
                有人臉模型庫時，此參數為必填，避免將既有人臉模型庫覆蓋。
                <br />
                無人臉模型庫時，此參數不需填寫。
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>選</TableCell>
              <TableCell>--verbose</TableCell>
              <TableCell>在CMD console 顯示每筆資料訓練結果。</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>必</TableCell>
              <TableCell>Face_Path_List</TableCell>
              <TableCell>
                人臉圖路徑與人臉識別碼文檔(編碼必須為Big5)。
                <br />
                文檔內容包含
                <br />
                <ul>
                  <li>人臉圖片路徑 (personFacePath)</li>
                  <strong>
                    圖片來源可自行準備或透過辨識引擎
                    <HashLink to="/documentation/recognize#input">
                      裁切人臉
                    </HashLink>
                    功能取得
                  </strong>
                  <li>人臉識別碼（personFaceId）</li>
                  <ul>
                    <li>唯一值</li>
                    <li>格式：人物識別碼(personId) + [No] + 自訂值(英/數)</li>
                    <li>以「tab」與人臉圖路徑(personFacePath)隔開</li>
                  </ul>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1aCZFVZ4n1SPxOPtmYpBYkNW_MSWv8ubj/view"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      範例
                    </a>
                  </li>
                  personFacePath1 personId[No]1
                  <br />
                  personFacePath2 personId[No]2
                  <br />
                  personFacePath3 personId[No]3
                </ul>
                訓練最佳化建議
                <br />
                <ul>
                  <li>人臉大小：100 x 100 pixels 以上</li>
                  <li>角度：正臉不遮蔽為主，上下左右15度角內</li>
                  <li>光線：明亮均勻光線、避免背光</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>必</TableCell>
              <TableCell>OutputDBFile</TableCell>
              <TableCell>
                輸出的人臉模型庫路徑。
                <br />
                範例: eGroup\eGroup.Model
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>

        <DocumentationLink variant="title" link="output">
          訓練 Output
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
              <TableCell>人臉模型庫</TableCell>
              <TableCell>OutputDBFile定義的資料夾內</TableCell>
              <TableCell>
                人臉模型庫包含以下檔案
                <br />
                <ul>
                  <li>.binary</li>
                  <strong>訓練出的人臉數據模型用來比對的二進位檔</strong>
                  <li>.faceInfor</li>
                  <strong>
                    成功建檔的人臉檔案列表+personFaceId+人臉位置+五官位置 <br />
                    (一個人臉一行)
                  </strong>
                  <li>.list</li>
                  <strong>
                    成功建檔的人臉檔案列表+ personFaceId <br />
                    (一個人臉一行)
                  </strong>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>訓練結果文檔</TableCell>
              <TableCell>同訓練程式TrainFace根目錄</TableCell>
              <TableCell>
                輸出檔案
                <a
                  href="https://drive.google.com/file/d/1-sWegWKvgB2BArbntYTUkFuDJXey2BpQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {' '}
                  TrainResult.eGroup.list
                </a>
                <br />
                顯示每筆訓練資料訓練結果。
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
                    <TableRow>
                      <TableCell>TrainFail</TableCell>
                      <TableCell>訓練失敗 -> 人臉圖品質問題</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>FaceIDError</TableCell>
                      <TableCell>人臉識別碼 -> 格式錯誤</TableCell>
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

export default compose(withnprogress)(DocumentationTrain);
