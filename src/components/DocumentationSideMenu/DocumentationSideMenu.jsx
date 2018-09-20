import React, { Component } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { List } from '@material-ui/core';

import DocumentationSideMenuItem from 'components/DocumentationSideMenuItem';

class DocumentationSideMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <List component="nav" disablePadding>
          <DocumentationSideMenuItem
            primary="簡介"
            items={[
              {
                key: 'a',
                primary: '系統架構',
                to: '/introduce#structure'
              },
              {
                key: 'b',
                primary: '應用程式整合',
                to: '/introduce#integration'
              },
              {
                key: 'c',
                primary: '最低系統需求',
                to: '/introduce#system'
              },
              {
                key: 'd',
                primary: '軟體安裝',
                to: '/introduce#install'
              },
              {
                key: 'e',
                primary: '輸入影像來源',
                to: '/introduce#input'
              }
            ]}
          />
          <DocumentationSideMenuItem
            primary="快速啟動"
            items={[
              {
                key: 'a',
                primary: '範例資源',
                to: '/getting-started#source'
              },
              {
                key: 'b',
                primary: '硬體/影像來源準備',
                to: '/getting-started#prepare'
              },
              {
                key: 'c',
                primary: '軟體安裝',
                to: '/getting-started#software-install'
              },
              {
                key: 'd',
                primary: '金鑰設定',
                to: '/getting-started#key-active'
              },
              {
                key: 'e',
                primary: '訓練人臉',
                to: '/getting-started#face-train'
              },
              {
                key: 'f',
                primary: '辨識人臉',
                to: '/getting-started#face-recognize'
              },
              {
                key: 'g',
                primary: '人臉模型替換',
                to: '/getting-started#model-switch'
              },
              {
                key: 'h',
                primary: '人臉模型合併',
                to: '/getting-started#model-merge'
              }
            ]}
          />
          <DocumentationSideMenuItem
            primary="訓練程序操作"
            items={[
              {
                key: 'a',
                primary: '流程圖',
                to: '/train#flowchart'
              },
              {
                key: 'b',
                primary: '使用說明',
                to: '/train#usage'
              },
              {
                key: 'c',
                primary: '訓練 Input',
                to: '/train#input'
              },
              {
                key: 'd',
                primary: '訓練 Output',
                to: '/train#output'
              }
            ]}
          />
          <DocumentationSideMenuItem
            primary="辨識程序操作"
            items={[
              {
                key: 'a',
                primary: '流程圖',
                to: '/recognize#flowchart'
              },
              {
                key: 'b',
                primary: '使用說明',
                to: '/recognize#usage'
              },
              {
                key: 'c',
                primary: '辨識 Input',
                to: '/recognize#input'
              },
              {
                key: 'd',
                primary: '辨識 Output',
                to: '/recognize#output'
              },
              {
                key: 'e',
                primary: '回傳結果',
                to: '/recognize#result'
              }
            ]}
          />
          <DocumentationSideMenuItem
            primary="模型替換程序操作"
            items={[
              {
                key: 'a',
                primary: '使用情境',
                to: '/model-switch#user-case'
              },
              {
                key: 'b',
                primary: '流程圖',
                to: '/model-switch#flowchart'
              },
              {
                key: 'c',
                primary: '使用說明',
                to: '/model-switch#usage'
              }
            ]}
          />
          <DocumentationSideMenuItem
            primary="模型合併程序操作"
            items={[
              {
                key: 'a',
                primary: '使用情境',
                to: '/model-merge#user-case'
              },
              {
                key: 'b',
                primary: '流程圖',
                to: '/model-merge#flowchart'
              },
              {
                key: 'c',
                primary: '使用說明',
                to: '/model-merge#usage'
              },
              {
                key: 'd',
                primary: '模型合併 Input',
                to: '/model-merge#input'
              },
              {
                key: 'e',
                primary: '模型合併 Output',
                to: '/model-merge#output'
              }
            ]}
          />
          <DocumentationSideMenuItem
            primary="Q&A"
            items={[
              {
                key: 'a',
                primary: '影響辨識因子說明',
                to: '/qa#side-affect'
              },
              {
                key: 'b',
                primary: '障礙排除',
                to: '/qa#issues'
              },
              {
                key: 'c',
                primary: '回傳結果 JSON 處理',
                to: '/qa#handle-result-json'
              },
              {
                key: 'd',
                primary: '引擎操作',
                to: '/qa#handle-engin'
              }
            ]}
          />
          <DocumentationSideMenuItem
            primary="附錄"
            items={[
              {
                key: 'a',
                primary: '準確度測試報告',
                to: '/appendix#bench-mark'
              },
              {
                key: 'b',
                primary: '系統規格實測',
                to: '/appendix#software-required'
              },
              {
                key: 'c',
                primary: '網路攝影機vs.解析度vs.辨識人數vs.辨識速度',
                to: '/appendix#compare1'
              },
              {
                key: 'd',
                primary: '網路攝影機比較一覽表',
                to: '/appendix#compare2'
              },
              {
                key: 'e',
                primary: '解析度vs.辨識距離',
                to: '/appendix#compare3'
              },
              {
                key: 'f',
                primary: '解析度vs.執行緒數量vs.辨識速度',
                to: '/appendix#compare4'
              },
              {
                key: 'g',
                primary: '辨識人數vs.辨識速度',
                to: '/appendix#compare5'
              }
            ]}
          />
        </List>
      </React.Fragment>
    );
  }
}

export default compose(withRouter)(DocumentationSideMenu);
