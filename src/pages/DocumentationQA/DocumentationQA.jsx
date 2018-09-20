import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import {
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

const image12 = require('static/images/preview/12.jpg');

class DocumentationQA extends Component {
  render() {
    return (
      <Documentation>
        <Helmet>
          <title>Q&A</title>
        </Helmet>
        <DocumentationLink variant="headline" link="qa">
          Q&A
        </DocumentationLink>
        <Divider />
        <DocumentationLink variant="title" link="side-affect">
          影響辨識因子說明
        </DocumentationLink>
        <ol>
          <li>影響「辨識相似度」因子</li>
          <ul>
            <li>環境</li>
            <ul>
              <li>光線</li>
              <li>距離</li>
              <li>角度</li>
            </ul>
            <li>輸入影像</li>
            <ul>
              <li>辨識解析度</li>
              <strong>
                訓練的照片解析度與辨識的影像解析度越相近，則辨識相似度越高
              </strong>
              <li>訓練人臉資料</li>
              <strong>訓練越多人臉(不同角度)，辨識相似度越高</strong>
            </ul>
          </ul>
          <li>影響「辨識速度」因子</li>
          <ul>
            <li>硬體</li>
            <ul>
              <li>主機中央處理器(CPU)</li>
              <li>主機記憶體(Memory)</li>
            </ul>
            <li>輸入影像</li>
            <ul>
              <li>同時辨識人數</li>
              <strong>
                辨識人數越多，辨識速度越慢，因抓取的人臉特徵值較多(
                <HashLink to="/documentation/appendix#compare5">
                  實測數據
                </HashLink>
                )
              </strong>
              <li>解析度</li>
              <strong>
                解析度越高，辨識速度越慢(
                <HashLink to="/documentation/appendix#compare4">
                  實測數據
                </HashLink>
                )
              </strong>
            </ul>
            <li>引擎操作</li>
            <ul>
              <li>控制執行緒數量(依照各主機規格有不同的執行緒數量)</li>
              <strong>
                透過指令操作，執行緒數量越多，辨識速度越快(
                <HashLink to="/documentation/appendix#compare4">
                  實測數據
                </HashLink>
                )
              </strong>
            </ul>
          </ul>
          <li>影響「辨識距離」因子</li>
          <ul>
            <li>環境</li>
            <ul>
              <li>光線</li>
              <li>角度</li>
            </ul>
            <li>硬體</li>
            <ul>
              <li>鏡頭焦距(mm)</li>
              <strong>
                鏡頭焦距與可照射距離成正比，鏡頭焦距越大，可照射距離越遠，相對辨識距離越遠，請參閱附圖
              </strong>
              <img src={image12} alt="鏡頭焦距(mm)" />
            </ul>
            <li>輸入影像</li>
            <ul>
              <li>解析度</li>
              <strong>
                解析度越大、辨識距離越遠(
                <HashLink to="/documentation/appendix#compare3">
                  實測數據
                </HashLink>
                )
              </strong>
            </ul>
          </ul>
          <li>在一個影像可視範圍中，最多能偵測多少張臉 ?</li>
          <p>
            影像解析度、最小人臉尺寸(100 x 100 pixels)會影響最多偵測人臉數量。
          </p>
          <DocumentationTable>
            <TableHead>
              <TableRow>
                <TableCell>影像解析度</TableCell>
                <TableCell>最多偵測人臉數量</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>360p</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>480p</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>720p</TableCell>
                <TableCell>7</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1080p</TableCell>
                <TableCell>10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1280p</TableCell>
                <TableCell>12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1440p</TableCell>
                <TableCell>14</TableCell>
              </TableRow>
            </TableBody>
          </DocumentationTable>
        </ol>

        <DocumentationLink variant="title" link="issues">
          障礙排除
        </DocumentationLink>
        <ol>
          <li>影像視窗為何出現黑屏 ?</li>
          <ul>
            <li>原因一：持續在黑暗環境執行引擎</li>
            <p>
              使用ffmpeg(MPEG影像程式庫)，因程式庫演算法會根據連續影像進行壓縮。長時間輸入黑暗環境之影像，有可能造成黑屏情況。
            </p>
            <p>解決方式：重啟辨識引擎。</p>
            <p>
              建議作法：依照使用情境需求(e.g.關燈狀態)，由應用程式端控制引擎重啟。
            </p>
            <li>原因二：影像輸入設備故障</li>
            <p>輸入設備上的軟體出現問題，有可能造成黑屏情況。</p>
            <p>解決方式：重新連結影像輸入設備。</p>
            <p>建議作法：移除USB裝置、重新連結裝置。</p>
          </ul>
        </ol>

        <DocumentationLink variant="title" link="handle-result-json">
          回傳結果 JSON 處理
        </DocumentationLink>
        <ol>
          <li>無法直接讀取回傳的JSON?</li>
          <p>因辨識引擎持續辨識，程式需複製辨識中的JSON檔，再進行讀取。</p>
          <li>JSON無法轉換成可存取的資料型態?</li>
          <p>
            因辨識引擎持續辨識，根據完整辨識物件之結尾特性，以字串起始與結尾位置，重組JSON格式內容。
          </p>
          <ul>
            <li>JSON回傳格式結尾特性</li>
            <p>} + 換行 + Tab + 逗號</p>
            <li>變數名稱說明</li>
            <p>startIndex：字串起始位置。</p>
            <p>endIndex：字串結尾位置。</p>
            <li>重組JSON邏輯</li>
            <DocumentationTable>
              <TableHead>
                <TableRow>
                  <TableCell>startIndex</TableCell>
                  <TableCell>讀取JSON位置</TableCell>
                  <TableCell>完整JSON內容</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>startIndex = 0</TableCell>
                  <TableCell>從JSON內容 第一個字元開始</TableCell>
                  <TableCell>擷取後JSON內容 + }]</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>startIndex > 0</TableCell>
                  <TableCell>從JSON內容 中間字元開始</TableCell>
                  <TableCell>[ + 擷取後JSON內容 + }]</TableCell>
                </TableRow>
              </TableBody>
            </DocumentationTable>
            <li>
              <a
                href="https://github.com/eGroupTeam/faceRecognizeSample_JAVA/blob/22c635e430f5934e28bc35f4da9a74718643a328/faceRecognizeSample_JAVA/src/com/egroupai/engine/control/GetResult.java"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sample Code(Java)
              </a>
            </li>
            <strong>
              建議定期清理JSON檔、備份，避免檔案累積過大，影響存取速度與儲存空間。
            </strong>
          </ul>
          <li>JSON檔案大小隨辨識時間增加，讀取時間增加，如何處理?</li>
          <p>如需即時辨識，請讀取快取JSON檔(output.cache.egroup.json)</p>
          <p>完整辨識結果保留於完整JSON檔(output.[當天日期].egroup)</p>
        </ol>

        <DocumentationLink variant="title" link="handle-engin">
          引擎操作
        </DocumentationLink>
        <ol>
          <li>若在應用程式中，要開啟/關閉引擎，該如何做 ?</li>
          <p>開啟關閉與Process主線程 、Windows子線程有關</p>
          <DocumentationTable>
            <TableHead>
              <TableRow>
                <TableCell>/</TableCell>
                <TableCell>
                  開啟引擎
                  <br />
                  (依不同程式語言，執行cmd指令)
                </TableCell>
                <TableCell>
                  關閉引擎
                  <br />
                  (依不同程式語言，執行cmd指令)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Process 主線程</TableCell>
                <TableCell>
                  在Java中，使用 ProcessBuilder.start()，來創建一個新的Process
                  實例，開啟引擎
                </TableCell>
                <TableCell>
                  在Java中，使用 Process.destroy()，關閉引擎
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Windows 子線程</TableCell>
                <TableCell>
                  開啟Process主線程時，同時會啟動Windows子線程
                </TableCell>
                <TableCell>
                  參閱指令(不建議使用)
                  <br />
                  {`taskkill /F /IM <程式名稱>`}
                  <br />
                  範例: taskkill /F /IM RetrieveFace.exe
                </TableCell>
              </TableRow>
            </TableBody>
          </DocumentationTable>
          <p>
            <a
              href="https://github.com/eGroupTeam/faceRecognizeSample_JAVA/blob/master/faceRecognizeSample_JAVA/src/com/egroupai/engine/util/CmdUtil.java"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sample Code (Java)
            </a>
          </p>
        </ol>
      </Documentation>
    );
  }
}

export default compose(withnprogress)(DocumentationQA);
