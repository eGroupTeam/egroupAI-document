import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
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

const image8 = require('static/images/preview/8.jpg');
const image9 = require('static/images/preview/9.jpg');

class DocumentationRecognize extends Component {
  render() {
    return (
      <Documentation>
        <Helmet>
          <title>辨識程序操作</title>
        </Helmet>
        <DocumentationLink variant="headline" link="train">
          辨識程序操作
        </DocumentationLink>
        <Divider />
        <DocumentationLink variant="title" link="flowchart">
          流程圖
        </DocumentationLink>
        <img src={image8} alt="辨識程序操作" />

        <DocumentationLink variant="title" link="usage">
          使用說明
        </DocumentationLink>
        <ul>
          <li>Syntax</li>
          <Highlight className="bash">
            {`RetrieveFace [--threshold <value>] [--hide-main-window] [--resolution <value>] [--output-frame <value>] [--output-face <value>] [--cam <value> | --rtsp <value> | --video <value> | --photo-list <value> ] [--minimum-face-size <value>] [--threads <value>] <Trained_BinaryFile> <Trained_FaceInforFile> <JSONFile>`}
          </Highlight>
          <li>範例一：Web Camera</li>
          <Highlight className="bash">
            {`RetrieveFace --threshold 0.6 --resolution 720p --output-frame frame --output-face face --cam 0 --minimum-face-size 100 --threads 2 eGroup\\eGroup.Model.binary eGroup\\eGroup.Model.faceInfor output`}
          </Highlight>
          <li>範例二：IP Camera</li>
          <Highlight className="bash">
            {`RetrieveFace --threshold 0.6 --resolution 720p --output-frame frame --output-face face --rtsp rtsp://192.168.11.8:554/channel1/1 --minimum-face-size 100 --threads 2 eGroup\\eGroup.Model.binary eGroup\\eGroup.Model.faceInfor output`}
          </Highlight>
          <li>範例三：Video File</li>
          <Highlight className="bash">
            {`RetrieveFace --threshold 0.6 --resolution 720p --output-frame frame --output-face face --video C:\\example.mp4 --minimum-face-size 100 --threads 2 eGroup\\eGroup.Model.binary eGroup\\eGroup.Model.faceInfor output`}
          </Highlight>
          <li>範例四：Photo File</li>
          <Highlight className="bash">
            {`RetrieveFace --threshold 0.6 --resolution 720p --output-frame frame --output-face face --photo-list photolist.egroupList --minimum-face-size 100 --threads 2 eGroup\\eGroup.Model.binary eGroup\\eGroup.Model.faceInfor output`}
          </Highlight>
          <li>範例五：其他裝置(HTTP)</li>
          <Highlight className="bash">
            {`RetrieveFace --threshold 0.6 --hide-main-window --resolution 720p --output-frame frame --output-face face --rtsp http://admin:admin@192.168.1.125:8081 --minimum-face-size 100 --threads 2 eGroup\\eGroup.Model.binary eGroup\\eGroup.Model.faceInfor output`}
          </Highlight>
        </ul>

        <DocumentationLink variant="title" link="input">
          辨識 Input
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
              <TableCell>選</TableCell>
              <TableCell>--threshold</TableCell>
              <TableCell>{`相似度門檻值。(0.6 ≤ 門檻值 < 1)`}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>選</TableCell>
              <TableCell>--hide-main-window</TableCell>
              <TableCell>隱藏主影像視窗。</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>選</TableCell>
              <TableCell>--resolution</TableCell>
              <TableCell>輸出圖像解析度。(範圍值360p ~ 1440p)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>選</TableCell>
              <TableCell>--output-frame</TableCell>
              <TableCell>
                裁切影格功能，並裁切至指定路徑。
                <br />
                範例: --output-frame frame
                <br />
                說明: 裁下來的影格圖在frame資料夾內
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>選</TableCell>
              <TableCell>--output-face</TableCell>
              <TableCell>
                裁切人臉功能，並裁切至指定路徑。
                <br />
                範例: --output-face face
                <br />
                說明: 裁下來的人臉圖在face資料夾內
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan="4">必(擇一)</TableCell>
              <TableCell>--cam</TableCell>
              <TableCell>
                讀取資料來源
                <br />
                Webcam(若有多台Webcam， 可指定開啟的Webcam) <br />
                範例
                <br />
                <ul>
                  <li>--cam 0 (啟動第一台Webcam)</li>
                  <li>--cam 1 (啟動第二台Webcam)</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--rtsp</TableCell>
              <TableCell>
                讀取資料來源 <br />
                <ul>
                  <li>RTSP</li>
                  <li>RTMP</li>
                  <li>HTTP</li>
                </ul>
                範例 <br />
                <ul>
                  <li>--rtsp rtsp://192.168.11.8:554/demo/live</li>
                  <li>--rtsp rtmp://192.168.1.1/demo/live</li>
                  <li>--rtsp http://192.168.1.125:8081</li>
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--video</TableCell>
              <TableCell>
                讀取資料來源
                <br />
                影片路徑
                <br />
                範例: --video C:\example.mp4
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--photo-list</TableCell>
              <TableCell>
                讀取資料來源
                <br />
                <ul>
                  <li>照片路徑文檔(副檔名必須為egroupList)</li>
                  <li>多筆照片路徑</li>
                </ul>
                範例: --photo-list photolist.egroupList
                <br />
                檔案內容
                <br />
                <Highlight className="markdown">
                  D:\RetrieveFace\photo\leonard.JPG
                  <br />
                  D:\RetrieveFace\photo\jerry.JPG
                  <br />
                  D:\RetrieveFace\photo\daniel.png
                </Highlight>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>選</TableCell>
              <TableCell>--minimum-face-size</TableCell>
              <TableCell>
                最小人臉尺寸輸出。(默認值為100 pixels)
                <br />
                範例: --minimum-face-size 200
                <br />
                說明: 只偵測大於200 x 200(pixels)的人臉尺寸
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>選</TableCell>
              <TableCell>--threads</TableCell>
              <TableCell>
                執行緒數量。(默認值為2，範圍值1 ~ 16)
                <br />
                範例: --threads 4<br />
                說明: 表示使用4個執行緒進行辨識
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
                  {`RetrieveFace ... eGroup\\eGroup.Model.binary <Trained_FaceInforFile> <JSONFile>`}
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
                  {`RetrieveFace ... <Trained_BinaryFile> eGroup\\eGroup.Model.faceInfor <JSONFile>`}
                </Highlight>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>必</TableCell>
              <TableCell>{`<JSONFile>`}</TableCell>
              <TableCell>
                輸出JSON檔案路徑
                <br />
                範例:
                <Highlight className="bash">
                  {`RetrieveFace ... <Trained_BinaryFile> <Trained_FaceInforFile> output`}
                </Highlight>
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>

        <DocumentationLink variant="title" link="output">
          辨識 Output
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
              <TableCell>完整JSON檔</TableCell>
              <TableCell>預設輸出至辨識引擎根目錄，可自訂路徑</TableCell>
              <TableCell>
                保有完整辨識資料並以當天日期輸出。
                <br />
                檔名格式: [自定名稱].[當天日期].egroup.json
                <br />
                範例: output.2018-08-08.egroup.json
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>快取JSON檔</TableCell>
              <TableCell>同完整JSON檔輸出位置</TableCell>
              <TableCell>
                輕量級JSON檔，檔案較小(最新100筆資料)。
                <br />
                檔名格式: [自定名稱].egroup.json
                <br />
                範例: output.cache.egroup.json
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>影格圖片檔</TableCell>
              <TableCell>自訂路徑</TableCell>
              <TableCell>
                <strong>如有在辨識時設定 --output-frame 參數才會產生</strong>
                範例: --output-frame frame
                <br />
                說明: 裁下的影格圖將會在frame資料夾內。
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>人臉圖片檔</TableCell>
              <TableCell>自訂路徑</TableCell>
              <TableCell>
                <strong>如有在辨識時設定 --output-face 參數才會產生</strong>
                範例: --output-face face
                <br />
                說明: 裁下的人臉圖將會在face資料夾內。
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationLink variant="title" link="result">
          回傳結果JSON說明
        </DocumentationLink>
        <Highlight className="json">
          {`[{
  "hasFound": "0",
  "framePath": "frame/07-26.752.jpg",
  "frameFace": {
    "frameFaceNo": "0",
    "frameFacePath": "face/07-26.752.0.jpg"
  },
  "systemTime": "2018-07-26 15:44:32:462"
},
{
  "hasFound": "1",
  "personId": "leonard",
  "framePath": "frame/07-26.754.jpg",
  "frameFace": {
    "frameFaceNo": "0",
    "frameFacePath": "face/07-26.754.0.jpg"
  },
  "systemTime": "2018-07-26 15:44:32:788",
  "similarFaceList":
  [{
      "personFaceId": "leonard[No]3",
      "personFacePath": "C:/Users/eGroup/Desktop/eGroupAI_FaceRecognitionEngine/face/07-26.4.0.jpg",
      "similarity": "0.9529"
    },
    {
      "personFaceId": "leonard[No]5",
      "personFacePath": "C:/Users/eGroup/Desktop/eGroupAI_FaceRecognitionEngine/face/07-26.8.0.jpg",
      "similarity": "0.9501"
    },
    {
      "personFaceId": "leonard[No]1",
      "personFacePath": "C:/Users/eGroup/Desktop/eGroupAI_FaceRecognitionEngine/face/07-26.0.0.jpg",
      "similarity": "0.9491"
  }]
}]`}
        </Highlight>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>欄位</TableCell>
              <TableCell>類型</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>hasFound</TableCell>
              <TableCell>String</TableCell>
              <TableCell>
                <Table padding="none">
                  <TableBody>
                    <TableRow>
                      <TableCell>hasFound</TableCell>
                      <TableCell>說明</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>0</TableCell>
                      <TableCell>無找到人臉</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>有找到人臉</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>personId</TableCell>
              <TableCell>String</TableCell>
              <TableCell>
                人物識別碼。(有找到人物，hasFound = 1，才回傳此欄位)
                <br />
                每一個人的personId皆不相同，personId可包含
                <br />
                <ul>
                  <li>多張不同人臉照片</li>
                  <li>相似人臉編號(personFaceId)</li>
                </ul>
                詳細說明請參閱:{' '}
                <HashLink to="/documentation/recognize#relation">
                  人物識別碼(personId)與人臉識別碼(personFaceId) 關係圖
                </HashLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>similarFaceList</TableCell>
              <TableCell>Array</TableCell>
              <TableCell>
                相似人臉列表(若無找到人物或無人臉模型庫比對，則不回傳此欄位)
                <br />
                內容包含
                <br />
                <ul>
                  <li>人臉識別碼</li>
                  <li>人臉路徑</li>
                  <li>相似度</li>
                </ul>
                詳細說明請參閱:{' '}
                <HashLink to="/documentation/recognize#similarFaceList">
                  similarFaceList 欄位說明
                </HashLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>frameFace</TableCell>
              <TableCell>Object</TableCell>
              <TableCell>
                影格人臉資訊
                <br />
                內容包含
                <br />
                <ul>
                  <li>影格人臉編號</li>
                  <li>影格人臉路徑</li>
                </ul>
                詳細說明請參閱:{' '}
                <HashLink to="/documentation/recognize#frameFace">
                  frameFace 欄位說明
                </HashLink>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>framePath</TableCell>
              <TableCell>String</TableCell>
              <TableCell>影格路徑</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>systemTime</TableCell>
              <TableCell>String</TableCell>
              <TableCell>系統時間，單位至毫秒</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>videoTime</TableCell>
              <TableCell>String</TableCell>
              <TableCell>
                影片時間，單位至秒
                <strong>當輸入來源為影片檔案格式，才回傳此欄位</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>videoFrameNo</TableCell>
              <TableCell>String</TableCell>
              <TableCell>
                影片影格編號
                <strong>當輸入來源為影片檔案格式，才回傳此欄位</strong>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>imageSourcePath</TableCell>
              <TableCell>String</TableCell>
              <TableCell>
                照片來源路徑
                <strong>當輸入來源為圖片檔案格式，才回傳此欄位</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>

        <DocumentationLink variant="subheading" link="similarFaceList">
          similarFaceList中包含的欄位說明
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>欄位</TableCell>
              <TableCell>類型</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>personFaceId</TableCell>
              <TableCell>String</TableCell>
              <TableCell>人臉識別碼</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>personFacePath</TableCell>
              <TableCell>String</TableCell>
              <TableCell>人臉路徑</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>similarity</TableCell>
              <TableCell>String</TableCell>
              <TableCell>相似度</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>

        <DocumentationLink variant="subheading" link="frameFace">
          frameFace中包含的欄位說明
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>欄位</TableCell>
              <TableCell>類型</TableCell>
              <TableCell>說明</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>frameFaceNo</TableCell>
              <TableCell>String</TableCell>
              <TableCell>
                影格人臉編號，即同一張影格偵測的人臉排序編號。
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>frameFacePath</TableCell>
              <TableCell>String</TableCell>
              <TableCell>影格人臉路徑。</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <Typography variant="body2" gutterBottom>
          辨識引擎持續辨識影像(來源非圖片)
          ，因此JSON結果最後一筆物件會多一個逗號。
          <br />
          應用程式讀取JSON處理範例請參閱
          <HashLink to="/documentation/qa#handle-result-json">
            回傳結果JSON處理
          </HashLink>
          或
          <a
            href="https://github.com/eGroupTeam/faceRecognizeSample_JAVA"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          。
        </Typography>

        <DocumentationLink variant="subheading" link="relation">
          人物識別碼(personId)與人臉識別碼(personFaceId) 關係圖
        </DocumentationLink>
        <img
          src={image9}
          alt="人物識別碼(personId)與人臉識別碼(personFaceId) 關係圖"
        />
      </Documentation>
    );
  }
}

export default compose(withnprogress)(DocumentationRecognize);
