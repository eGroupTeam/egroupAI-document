import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';
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

class DocumentationAppendix extends Component {
  render() {
    return (
      <Documentation>
        <Helmet>
          <title>附錄</title>
        </Helmet>
        <DocumentationLink variant="headline" link="appendix">
          附錄
        </DocumentationLink>
        <Divider />
        <DocumentationLink variant="title" link="bench-mark">
          準確度測試報告
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>Benchmark</TableCell>
              <TableCell>Persons</TableCell>
              <TableCell>Total Images</TableCell>
              <TableCell>Size(MB)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <a
                  href="http://vis-www.cs.umass.edu/lfw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Labeled Faces In the Wild (LFW)
                </a>
              </TableCell>
              <TableCell>5,749</TableCell>
              <TableCell>13,233</TableCell>
              <TableCell>173</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <a
                  href="http://bcsiriuschen.github.io/CARC/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CACD-VS
                </a>
              </TableCell>
              <TableCell>> 2,000</TableCell>
              <TableCell>4,000</TableCell>
              <TableCell>198</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>Methods</TableCell>
              <TableCell>LFW (%)</TableCell>
              <TableCell>CACD(%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>eGroupAI (CPU)</TableCell>
              <TableCell>98±0.5%</TableCell>
              <TableCell>95.5±0.5%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>eGroupAI (GPU)</TableCell>
              <TableCell>98.5±0.5%</TableCell>
              <TableCell>97±0.5%</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationLink variant="title" link="software-required">
          系統規格實測
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目</TableCell>
              <TableCell>規格</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <strong>Windows edition</strong>
              </TableCell>
              <TableCell>Windows 10 Pro</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Processor</strong>
              </TableCell>
              <TableCell>Intel® Core™i5-8400 CPU @ 2.80GHz 2.81GHz</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>RAM</strong>
              </TableCell>
              <TableCell>8.00GB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>System type</strong>
              </TableCell>
              <TableCell>
                64-bit Operating System, x64-based processor
              </TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationLink variant="title" link="compare1">
          網路攝影機vs.解析度vs.辨識人數vs.辨識速度
        </DocumentationLink>
        <p>
          使用的辨識參數(請參閱
          <HashLink to="/documentation/recognize">辨識程序操作</HashLink>)
        </p>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>參數</TableCell>
              <TableCell>值</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>--threshold</TableCell>
              <TableCell>0.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--resolution</TableCell>
              <TableCell>360p、480p、720p、1080p</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--minimum-face-size</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--threads</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationLink variant="title" link="compare2">
          網路攝影機比較一覽表
        </DocumentationLink>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目/型號</TableCell>
              <TableCell>規格</TableCell>
              <TableCell>與前代差異</TableCell>
              <TableCell>價格</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>C930 LOGITECH</TableCell>
              <TableCell>
                H.264AVC壓縮：1.5
                <br />
                角度:90
                <br />
                <a
                  href="https://www.logitech.com/zh-tw/product/c930e-webcam#specification-tabular"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  詳細規格
                </a>
              </TableCell>
              <TableCell>鏡頭卡爾蔡司認證</TableCell>
              <TableCell>$3,899</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C925 LOGITECH</TableCell>
              <TableCell>
                H.264AVC壓縮：1.1
                <br />
                角度:78
                <br />
                <a
                  href="https://www.logitech.com/zh-tw/product/c925e-webcam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  詳細規格
                </a>
              </TableCell>
              <TableCell>強化雙向通訊</TableCell>
              <TableCell>$3,499</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C922 LOGITECH</TableCell>
              <TableCell>
                H.264AVC壓縮：1.1
                <br />
                角度:78
                <br />
                <a
                  href="https://www.logitech.com/zh-tw/product/c922-pro-stream-webcam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  詳細規格
                </a>
              </TableCell>
              <TableCell>提供直播主替換直播背景</TableCell>
              <TableCell>$3,390</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft LifeCamStudio V2</TableCell>
              <TableCell>
                H.264AVC壓縮：無
                <br />
                角度:未註明
                <br />
                <a
                  href="https://www.microsoft.com/accessories/zh-tw/products/webcams/lifecam-studio/q2f-00017"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  詳細規格
                </a>
              </TableCell>
              <TableCell> - </TableCell>
              <TableCell>$2,990</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <p>以下為實測結果，可依需求選擇適合的網路攝影機規格</p>
        <strong>--resolution (輸出圖像解析度)：360p</strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目/型號</TableCell>
              <TableCell>FPS(辨識一人)</TableCell>
              <TableCell>FPS(辨識二人)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>C930 LOGITECH</TableCell>
              <TableCell>40.3~41.2</TableCell>
              <TableCell>19.2~ 20.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C925 LOGITECH</TableCell>
              <TableCell>40.2~41.2</TableCell>
              <TableCell>19.2~ 20.2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C922 LOGITECH</TableCell>
              <TableCell>40.3~41.3</TableCell>
              <TableCell>19.1~ 20.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft LifeCam Studio V2</TableCell>
              <TableCell>40.3~41.6</TableCell>
              <TableCell>18.4~ 21.3</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <strong>--resolution (輸出圖像解析度)：480p</strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目/型號</TableCell>
              <TableCell>FPS(辨識一人)</TableCell>
              <TableCell>FPS(辨識二人)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>C930 LOGITECH</TableCell>
              <TableCell>33.2~34.6</TableCell>
              <TableCell>18.5~19.4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C925 LOGITECH</TableCell>
              <TableCell>32.1~35.1</TableCell>
              <TableCell>18.2~19.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C922 LOGITECH</TableCell>
              <TableCell>33.2~35.2</TableCell>
              <TableCell>18.1~19.5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft LifeCam Studio V2</TableCell>
              <TableCell>32.2~35.6</TableCell>
              <TableCell>18.5~19.5</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <strong>--resolution (輸出圖像解析度)：720p</strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目/型號</TableCell>
              <TableCell>FPS(辨識一人)</TableCell>
              <TableCell>FPS(辨識二人)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>C930 LOGITECH</TableCell>
              <TableCell>28.5~29.7</TableCell>
              <TableCell>16.4~17.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C925 LOGITECH</TableCell>
              <TableCell>28.2~29.7</TableCell>
              <TableCell>16.4~17.6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C922 LOGITECH</TableCell>
              <TableCell>28.2~29.7</TableCell>
              <TableCell>16.3~17.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft LifeCam Studio V2</TableCell>
              <TableCell>27.2~28.1</TableCell>
              <TableCell>15.5~16.1</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <strong>--resolution (輸出圖像解析度)：1080p</strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>項目/型號</TableCell>
              <TableCell>FPS(辨識一人)</TableCell>
              <TableCell>FPS(辨識二人)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>C930 LOGITECH</TableCell>
              <TableCell>18.2~20.1</TableCell>
              <TableCell>14.4~15.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C925 LOGITECH</TableCell>
              <TableCell>18.2~20.2</TableCell>
              <TableCell>14.5~15.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>C922 LOGITECH</TableCell>
              <TableCell>18.6~20.1</TableCell>
              <TableCell>14.4~15.2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Microsoft LifeCam Studio V2</TableCell>
              <TableCell>15.4~16.1</TableCell>
              <TableCell>9.7~10.2</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>

        <DocumentationLink variant="title" link="compare3">
          解析度vs.辨識距離
        </DocumentationLink>
        <p>
          使用的辨識參數(請參閱
          <HashLink to="/documentation/recognize">辨識程序操作</HashLink>)
        </p>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>參數</TableCell>
              <TableCell>值</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>--threshold</TableCell>
              <TableCell>0.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--resolution</TableCell>
              <TableCell>360p、480p、720p、1080p、1280p、1440p</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--minimum-face-size</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--threads</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <p>以下為實測結果，可依需求選擇適合的網路攝影機規格</p>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>解析度</TableCell>
              <TableCell>
                webcam最大距離(m)
                <br />
                型號：
                <a
                  href="https://www.logitech.com/zh-tw/product/c930e-webcam#specification-tabular"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C930 LOGITECH
                </a>
              </TableCell>
              <TableCell>
                ipcam(m)
                <br />
                型號：
                <a
                  href="http://www1.hikvision.com/cn/prgs_1019_i8918.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DS-2CD3T45-I5
                </a>
              </TableCell>
              <TableCell>
                ipcam(m)
                <br />
                型號：
                <a
                  href="https://world.taobao.com/item/562706316915.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DH-IPC-HFW4433M-I1
                </a>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>360p</TableCell>
              <TableCell>0.41</TableCell>
              <TableCell>0.78</TableCell>
              <TableCell>1.12</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>480p</TableCell>
              <TableCell>0.7</TableCell>
              <TableCell>1.05</TableCell>
              <TableCell>2.02</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>720p</TableCell>
              <TableCell>1.1</TableCell>
              <TableCell>2.01</TableCell>
              <TableCell>3.25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1080p</TableCell>
              <TableCell>1.78</TableCell>
              <TableCell>3.10</TableCell>
              <TableCell>5.01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1280p</TableCell>
              <TableCell> - </TableCell>
              <TableCell>3.90</TableCell>
              <TableCell>5.60</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1440p</TableCell>
              <TableCell> - </TableCell>
              <TableCell>4.70</TableCell>
              <TableCell>6.80</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationLink variant="title" link="compare4">
          解析度vs.執行緒數量vs.辨識速度
        </DocumentationLink>
        <p>
          使用的辨識參數(請參閱
          <HashLink to="/documentation/recognize">辨識程序操作</HashLink>)
        </p>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>參數</TableCell>
              <TableCell>值</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>--threshold</TableCell>
              <TableCell>0.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--resolution</TableCell>
              <TableCell>360p、480p、720p、1080p、1280p、1440p</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--minimum-face-size</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--threads</TableCell>
              <TableCell>2、4、6</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <p>以下為實測結果，可依需求選擇適合的執行緒數量</p>
        <strong>
          裝置：webcam (型號：
          <a
            href="https://www.logitech.com/zh-tw/product/c930e-webcam#specification-tabular"
            target="_blank"
            rel="noopener noreferrer"
          >
            C930 LOGITECH
          </a>
          )
        </strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>解析度</TableCell>
              <TableCell>FPS(2個執行緒)</TableCell>
              <TableCell>FPS(4個執行緒)</TableCell>
              <TableCell>FPS(6個執行緒)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>360p</TableCell>
              <TableCell>34.1~35.2</TableCell>
              <TableCell>41.3~41.1</TableCell>
              <TableCell>40.3~41.2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>480p</TableCell>
              <TableCell>30.3~31.7</TableCell>
              <TableCell>33.2~35.1</TableCell>
              <TableCell>33.2~34.6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>720p</TableCell>
              <TableCell>22.2~25.1</TableCell>
              <TableCell>28.4~30.1</TableCell>
              <TableCell>28.5~29.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1080p</TableCell>
              <TableCell>16.3~17.1</TableCell>
              <TableCell>19.1~21.1</TableCell>
              <TableCell>18.2~20.1</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <strong>
          裝置：ipcam (型號：
          <a
            href="http://www1.hikvision.com/cn/prgs_1019_i8918.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            DS-2CD3T45-I5
          </a>{' '}
          6mm)
        </strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>解析度</TableCell>
              <TableCell>FPS(2個執行緒)</TableCell>
              <TableCell>FPS(4個執行緒)</TableCell>
              <TableCell>FPS(6個執行緒)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>360p</TableCell>
              <TableCell>28.9~29.3</TableCell>
              <TableCell>30.4~33.7</TableCell>
              <TableCell>33.3~35.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>480p</TableCell>
              <TableCell>24.2~25.9</TableCell>
              <TableCell>30.2~31.4</TableCell>
              <TableCell>33.4~35.2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>720p</TableCell>
              <TableCell>20.7~21.8</TableCell>
              <TableCell>23.8~24.5</TableCell>
              <TableCell>26.5~27.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1080p</TableCell>
              <TableCell>15.6~16.4</TableCell>
              <TableCell>17.9~20.1</TableCell>
              <TableCell>16.1~19.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1280p</TableCell>
              <TableCell>10.2~11.8</TableCell>
              <TableCell>13.3~14.6</TableCell>
              <TableCell>11.9~12.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1440p</TableCell>
              <TableCell>9.4~10.1</TableCell>
              <TableCell>11.3~12.2</TableCell>
              <TableCell>11.5~12.1</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <strong>
          裝置：ipcam (型號：
          <a
            href="https://world.taobao.com/item/562706316915.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            DH-IPC-HFW4433M-I1
          </a>{' '}
          8mm)
        </strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>解析度</TableCell>
              <TableCell>FPS(2個執行緒)</TableCell>
              <TableCell>FPS(4個執行緒)</TableCell>
              <TableCell>FPS(6個執行緒)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>360p</TableCell>
              <TableCell>28.9~29.6</TableCell>
              <TableCell>30.4~33.6</TableCell>
              <TableCell>33.4~35.6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>480p</TableCell>
              <TableCell>24.5~25.9</TableCell>
              <TableCell>30.1~31.3</TableCell>
              <TableCell>33.4~35.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>720p</TableCell>
              <TableCell>20.8~21.8</TableCell>
              <TableCell>23.8~24.5</TableCell>
              <TableCell>26.5~27.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1080p</TableCell>
              <TableCell>16.3~17.4</TableCell>
              <TableCell>17.9~20.1</TableCell>
              <TableCell>17.1~19.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1280p</TableCell>
              <TableCell>10.2~11.8</TableCell>
              <TableCell>13.3~14.6</TableCell>
              <TableCell>12.9~13.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1440p</TableCell>
              <TableCell>9.4~10.1</TableCell>
              <TableCell>11.3~12.3</TableCell>
              <TableCell>11.5~12.1</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <DocumentationLink variant="title" link="compare5">
          辨識人數vs.辨識速度
        </DocumentationLink>
        <p>
          使用的辨識參數(請參閱
          <HashLink to="/documentation/recognize">辨識程序操作</HashLink>)
        </p>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>參數</TableCell>
              <TableCell>值</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>--threshold</TableCell>
              <TableCell>0.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--resolution</TableCell>
              <TableCell>720p、1080p</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--minimum-face-size</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>--threads</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <p>以下為實測結果，可依需求選擇適合的辨識人數</p>
        <strong>輸出圖像解析度：720p</strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>辨識人數</TableCell>
              <TableCell>
                webcam FPS
                <br />
                型號：
                <a
                  href="https://www.logitech.com/zh-tw/product/c930e-webcam#specification-tabular"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C930 LOGITECH
                </a>
              </TableCell>
              <TableCell>
                ipcam FPS
                <br />
                型號：
                <a
                  href="http://www1.hikvision.com/cn/prgs_1019_i8918.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DS-2CD3T45-I5
                </a>{' '}
                6mm
              </TableCell>
              <TableCell>
                ipcam FPS
                <br />
                型號：
                <a
                  href="https://world.taobao.com/item/562706316915.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DH-IPC-HFW4433M-I1
                </a>{' '}
                8mm
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>28.5~29.7</TableCell>
              <TableCell>26.5~27.1 </TableCell>
              <TableCell>26.5~27.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>16.4~17.7</TableCell>
              <TableCell>14.5~15.2</TableCell>
              <TableCell>14.5~15.2</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>11.6~13.1</TableCell>
              <TableCell>10.8~12.9</TableCell>
              <TableCell>10.6~12.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>8.7~9.3</TableCell>
              <TableCell>8.8~9.1</TableCell>
              <TableCell>8.7~9.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>7.7~8.2</TableCell>
              <TableCell>6.9~7.4</TableCell>
              <TableCell>7.1~7.5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>6.6~7.1</TableCell>
              <TableCell>5.7~6.3</TableCell>
              <TableCell>5.7~6.4</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
        <strong>輸出圖像解析度：1080p</strong>
        <DocumentationTable>
          <TableHead>
            <TableRow>
              <TableCell>辨識人數</TableCell>
              <TableCell>
                webcam FPS
                <br />
                型號：
                <a
                  href="https://www.logitech.com/zh-tw/product/c930e-webcam#specification-tabular"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  C930 LOGITECH
                </a>
              </TableCell>
              <TableCell>
                ipcam FPS
                <br />
                型號：
                <a
                  href="http://www1.hikvision.com/cn/prgs_1019_i8918.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DS-2CD3T45-I5
                </a>{' '}
                6mm
              </TableCell>
              <TableCell>
                ipcam FPS
                <br />
                型號：
                <a
                  href="https://world.taobao.com/item/562706316915.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DH-IPC-HFW4433M-I1
                </a>{' '}
                8mm
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>18.2~19.3</TableCell>
              <TableCell>16.3~17.6</TableCell>
              <TableCell>16.1~17.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>14.4~15.3</TableCell>
              <TableCell>10.1~11.2</TableCell>
              <TableCell>10.1~11.1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>8.9~9.3</TableCell>
              <TableCell>7.7~8.4</TableCell>
              <TableCell>7.6~8.5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>7.3~8.2</TableCell>
              <TableCell>6.8~7.2</TableCell>
              <TableCell>6.7~7.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>6.1~6.5</TableCell>
              <TableCell>4.6~5.4</TableCell>
              <TableCell>4.6~5.6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>4.9~5.3</TableCell>
              <TableCell>4.1~4.7</TableCell>
              <TableCell>4.1~4.6</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>4.3~4.9</TableCell>
              <TableCell>3.9~4.3</TableCell>
              <TableCell>3.9~4.4</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8</TableCell>
              <TableCell>3.5~4.5</TableCell>
              <TableCell>3.3~3.9</TableCell>
              <TableCell>3.4~3.9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>9</TableCell>
              <TableCell>3.1~3.7</TableCell>
              <TableCell>2.9~3.3</TableCell>
              <TableCell>2.8~3.3</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10</TableCell>
              <TableCell>2.7~3.4</TableCell>
              <TableCell>2.1~2.8</TableCell>
              <TableCell>2.1~2.9</TableCell>
            </TableRow>
          </TableBody>
        </DocumentationTable>
      </Documentation>
    );
  }
}

export default compose(withnprogress)(DocumentationAppendix);
