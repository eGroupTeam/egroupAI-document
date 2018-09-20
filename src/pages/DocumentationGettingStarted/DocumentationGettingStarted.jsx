import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { HashLink } from 'react-router-hash-link';
import { Typography, Divider } from '@material-ui/core';
import { compose } from 'redux';
import { withnprogress } from 'utils';

import Documentation from 'components/Documentation';
import DocumentationLink from 'components/DocumentationLink';
import Highlight from 'components/Highlight';

const image2 = require('static/images/preview/2.png');
const image3 = require('static/images/preview/3.png');
const image4 = require('static/images/preview/4.png');
const image5 = require('static/images/preview/5.png');
const image6 = require('static/images/preview/6.png');

class DocumentationGettingStarted extends Component {
  render() {
    return (
      <Documentation>
        <Helmet>
          <title>快速啟動</title>
        </Helmet>
        <DocumentationLink variant="headline" link="getting-started">
          快速啟動
        </DocumentationLink>
        <Divider />
        <Typography className="description">
          以下實作的影像輸入源為影片檔。
        </Typography>

        <DocumentationLink variant="title" link="source">
          範例資源
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          <a
            href="https://drive.google.com/file/d/1i3vQmiM68RYgVddwnlAJdq2K7GxTosfe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            範例資源下載
          </a>
          ，將resources資料夾放置引擎根目錄
        </Typography>
        <img src={image2} alt="範例資源下載" />

        <DocumentationLink variant="title" link="prepare">
          硬體/影像來源準備
        </DocumentationLink>
        <ul>
          <li>
            Winodows 主機 (
            <HashLink to="/documentation/introduce#system">
              最低系統需求
            </HashLink>
            )
          </li>
          <li>影像來源</li>
          <ul>
            <li>影片檔(範例 example.mp4)</li>
          </ul>
        </ul>

        <DocumentationLink variant="title" link="software-install">
          軟體安裝
        </DocumentationLink>
        <ul>
          <li>
            <a
              href="https://www.microsoft.com/zh-TW/download/details.aspx?id=48145"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio 2015 Visual C++ 可轉散發套件
            </a>
          </li>
        </ul>

        <DocumentationLink variant="title" link="key-active">
          金鑰設定
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          將金鑰放置引擎根目錄。
        </Typography>
        <img src={image3} alt="金鑰設定" />

        <DocumentationLink variant="title" link="face-train">
          訓練人臉
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          建立 jerry 的人臉模型。
        </Typography>
        <ol>
          <li>
            執行訓練指令(詳細說明請參閱
            <HashLink to="/documentation/train">訓練程序操作</HashLink>)
          </li>
          <Highlight className="bash">
            {`TrainFace resources\\list.txt eGroup\\jerry.Model`}
          </Highlight>
          <li>輸出檔案</li>
          <ul>
            <li>
              人臉模型(jerry.Model.binary、jerry.Model.faceInfor、jerry.Model.list)
            </li>
            <li>訓練結果文檔(TrainResult.eGroup.list)</li>
          </ul>
        </ol>
        <Typography variant="body2" gutterBottom>
          list.txt(人臉圖路徑與人臉識別碼文檔)，詳細說明請參閱
          <HashLink to="/documentation/train#input">
            訓練程序操作-訓練Input
          </HashLink>
        </Typography>

        <DocumentationLink variant="title" link="face-recognize">
          辨識人臉
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          查看 jerry 是否能否辨識成功。
        </Typography>
        <ol>
          <li>
            執行辨識指令(詳細說明請參閱
            <HashLink to="/documentation/recognize">辨識程序操作</HashLink>)
          </li>
          <Highlight className="bash">
            {`RetrieveFace --threshold 0.6 --resolution 720p --video resources\\example.mp4 --minimum-face-size 100 --threads 2 eGroup\\jerry.Model.binary eGroup\\jerry.Model.faceInfor output`}
          </Highlight>
          <li>輸出檔案</li>
          <ul>
            <li>
              辨識結果JSON(output.[當天日期].egroup.json、output.cache.egroup.json)
            </li>
            <li>影片時間進度Progress.Bar(輸入源為影片，才輸出此檔)</li>
          </ul>
        </ol>
        <Typography variant="body2" gutterBottom>
          personId回傳值為jerry(詳細說明請參閱
          <HashLink to="/documentation/recogniz辨識程序操作-回傳結果e#result" />
          )
        </Typography>
        <img src={image4} alt="回傳結果JSON說明" />

        <DocumentationLink variant="title" link="model-switch">
          人臉模型替換
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          疊加 leonard
          的人臉資料於既有人臉模型，產生新的人臉模型，並於辨識中執行人臉模型替換的功能。
          <br />
          (詳細操作說明，請參閱
          <HashLink to="/documentation/model-switch">模型替換程序</HashLink>)
        </Typography>
        <ol>
          <li>
            複製人臉模型檔案(jerry.Model.binary、jerry.Model.faceInfor、jerry.Model.list)，並重新命名
          </li>
          <ul>
            <li>jerry_and_leonard.Model.binary</li>
            <li>jerry_and_leonard.Model.faceInfor</li>
            <li>jerry_and_leonard.Model.list</li>
          </ul>
          <img src={image5} alt="複製人臉模型檔案" />
          <li>
            執行訓練疊加指令(詳細說明請參閱
            <HashLink to="/documentation/train">訓練程序操作</HashLink>)
          </li>
          <Highlight className="bash">
            {`TrainFace --append resources\\list_leonard.txt eGroup\\jerry_and_leonard.Model`}
          </Highlight>
          <li>輸出檔案</li>
          <ul>
            <li>
              人臉模型(jerry_and_leonard.Model.binary、jerry_and_leonard.Model.faceInfor、jerry_and_leonard.Model.list)
            </li>
            <li>訓練結果文檔(TrainResult.eGroup.list)</li>
          </ul>
          <li>
            查看於 resources 資料夾內的
            Singal_For_Model_Switch.txt，路徑為欲替換的人臉模型路徑
          </li>
          <img src={image6} alt="查看於" />
          <li>
            執行模型替換功能(先讀取 jerry.Model，透過替換功能讀取
            jerry_and_leonard.Model)
          </li>
          <ul>
            <li>執行辨識指令</li>
            <Highlight className="bash">
              {`RetrieveFace --threshold 0.6 --resolution 720p --video resources\\example.mp4 --minimum-face-size 100 --threads 2 eGroup\\jerry.Model.binary eGroup\\jerry.Model.faceInfor output`}
            </Highlight>
            <li>
              影片進行至 2 秒時，將 Singal_For_Model_Switch.txt
              複製到辨識程式根目錄，模型會自動替換
            </li>
            <li>
              模型替換成功後，Singal_For_Model_Switch.txt檔案會在辨識程式根目錄消失
            </li>
          </ul>
          <li>輸出檔案</li>
          <ul>
            <li>
              辨識結果JSON(output.[當天日期].egroup.json、output.cache.egroup.json)
            </li>
          </ul>
        </ol>
        <Typography variant="body2" gutterBottom>
          personId回傳值為jerry、leonard(詳細說明請參閱
          <HashLink to="/documentation/recogniz辨識程序操作-回傳結果e#result" />
          )
        </Typography>

        <DocumentationLink variant="title" link="model-merge">
          人臉模型合併
        </DocumentationLink>
        <Typography variant="subheading" gutterBottom>
          建立 daniel 的人臉模型，再與上步驟 jerry_and_leonard
          的人臉模型進行合併。
        </Typography>
        <ol>
          <li>
            執行訓練指令(詳細說明請參閱
            <HashLink to="/documentation/train">訓練程序操作</HashLink>)
          </li>
          <Highlight className="bash">
            {`TrainFace resources\\list_daniel.txt eGroup\\daniel.Model`}
          </Highlight>
          <li>輸出檔案</li>
          <ul>
            <li>
              人臉模型(daniel.Model.binary、daniel.Model.faceInfor、daniel.Model.list)
            </li>
            <li>訓練結果文檔(TrainResult.eGroup.list)</li>
          </ul>
          <li>
            執行合併指令(詳細說明請參閱
            <HashLink to="/documentation/model-merge">
              模型合併程序操作
            </HashLink>
            )
          </li>
          <Highlight className="bash">
            {`ModelMerge resources\\ModelList.egroup.List eGroup\\all.Model.binary eGroup\\all.Model.faceInfor`}
          </Highlight>
          <li>執行辨識指令</li>
          <Highlight className="bash">
            {`RetrieveFace --threshold 0.6 --resolution 720p --video resources\\example.mp4 --minimum-face-size 100 --threads 2 eGroup\\all.Model.binary eGroup\\all.Model.faceInfor output`}
          </Highlight>
          <li>輸出檔案</li>
          <ul>
            <li>
              辨識結果JSON(output.[當天日期].egroup.json、output.cache.egroup.json)
            </li>
          </ul>
        </ol>
        <Typography variant="body2" gutterBottom>
          personId回傳值為jerry、leonard、daniel(詳細說明請參閱
          <HashLink to="/documentation/recognize#result">
            辨識程序操作-回傳結果
          </HashLink>
          )
        </Typography>
      </Documentation>
    );
  }
}

export default compose(withnprogress)(DocumentationGettingStarted);
